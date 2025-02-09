using Backend.Data;
using Backend.Models;
using Backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserInformationController : Controller
    {
        private ApplicationDBContext _dbContext;

        public UserInformationController(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var Users = _dbContext.UserInformation.ToList();
            if (User == null) NotFound(new { message = "User was not found" });
            return Ok(Users);
        }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetUser(Guid id)
        {
            var User = _dbContext.UserInformation.Find(id);

            if (User == null) NotFound(new {message = "User was not found" });

            return Ok(User);
        }
        [HttpPost]
        public IActionResult PostUser(AddUserInformationDto addUserInformationDto)
        {
            var newUser = new UserInformation()
            {
                Username = addUserInformationDto.Username,
                Password = addUserInformationDto.Password,
                Email = addUserInformationDto.Email,
                NickName = addUserInformationDto.NickName,
                Address = addUserInformationDto.Address,
                Phone = addUserInformationDto.Phone,
                Position = addUserInformationDto.Position,  
                Birthday = addUserInformationDto.Birthday,
                Information = addUserInformationDto.Information,
                LoggedIn = addUserInformationDto.LoggedIn
            };

            _dbContext.UserInformation.Add(newUser);
            _dbContext.SaveChanges();
            return Ok(newUser);
        }
    }
}
