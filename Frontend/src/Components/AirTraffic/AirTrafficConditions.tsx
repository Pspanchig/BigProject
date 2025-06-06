import React, { useEffect, useState } from 'react';
import './css/AirTrafficConditions.css'
import { Airport } from './AirportsInfo';

interface AirTrafficConditionsProps {
  setSelectedDepartureAirport: (airport: Airport) => void;
  setSelectedDestinationAirport: (airport: Airport) => void;
  setWeather: (any :boolean) => void;
  isDepartureEX: (any: boolean) => void;
  weather: boolean;
}

const AirTrafficConditions: React.FC<AirTrafficConditionsProps> = ({
  setSelectedDepartureAirport,
  setSelectedDestinationAirport,
  setWeather,
  isDepartureEX,
  weather
}) => {

  const [departureAirportCode, setDepartureAirportCode] = useState<string>('')
  const [destinationAirportCode, setDestinationAirportCode] = useState<string>('')

  async function CallAirport(isDeparture: boolean, code: string): Promise<void> {  
    if (code.trim() === '') return;    
    try {
      const url = `https://api.api-ninjas.com/v1/airports?iata=${code}`;
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'AfauC+SiaJ04JjFEVLqYRg==JSDlxdwDKnzWMR1V'
        }
      });
  
      const airports: Airport[] = await response.json();
  
      if (isDeparture) {
        isDepartureEX(true);
        if (airports.length > 0) {
          setSelectedDepartureAirport(airports[0]);
        }
      } else {
        isDepartureEX(false);
        if (airports.length > 0) {
          setSelectedDestinationAirport(airports[0]);
        }
      }
  
      console.log(airports);
    } catch(e: any) {
      alert('There was a problem getting the airports: ' + e.message);
    } finally {
      setWeather(true);
      setTimeout(() => {
        setWeather(false);
      }, 100);
      setDepartureAirportCode('');
      setDestinationAirportCode('');
    }
  }
  
useEffect(() => {},[departureAirportCode, destinationAirportCode]);
  useEffect(() => {
    console.log('Weather changed to: ' + weather);
  }, [weather]);

  return (
    <article className='AirTrafficConditions'>
        <h1>Air Traffic Conditions</h1>
        <label htmlFor="Departure">
            <div className='AirportInput'>
            Please select your departure airport
              <input type="text" 
                placeholder='Provide the airport'
                value={departureAirportCode}
                onChange={(e) => setDepartureAirportCode(e.target.value)}
                />
            </div>
            <button onClick={() => CallAirport(true, departureAirportCode)}>Search</button>
        </label>
        <label htmlFor="Destination">
            <div className='AirportInput'>
            Please select your destination airport
              <input type="text" 
                placeholder='Provide the airport'
                value={destinationAirportCode}
                onChange={(e) => setDestinationAirportCode(e.target.value)}
                />
            </div>
            <button onClick={() => CallAirport(false, destinationAirportCode)}>Search</button>
        </label>

          <button className='AirTrButton'>Press Here to see in the map</button>
    </article>
  );
}

export default AirTrafficConditions;