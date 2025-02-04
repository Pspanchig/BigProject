namespace Backend.Entities
{
    public class UserInformation
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Nickname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Position { get; set; }
        public string Birthday { get; set; }
        public string Information { get; set; }
    }
}
