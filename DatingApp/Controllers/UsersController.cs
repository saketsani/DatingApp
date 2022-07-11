using DatingApp.Data;
using DatingApp.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
       {
            var users = _context.Users.ToList();
            return users;
        }


        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUsers(int id)
        {
            var user = _context.Users.Find(id);
            return user;
        }
    }
}
