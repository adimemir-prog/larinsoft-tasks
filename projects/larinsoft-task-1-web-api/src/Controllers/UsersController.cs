using larinsoft_task_1_web_api.Data;
using larinsoft_task_1_web_api.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace larinsoft_task_1_web_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
   private readonly AppDbContext _context;

   public UserController(AppDbContext injectedContext)
   {
      _context = injectedContext;
   }
   
   [HttpGet]
   public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
   {
      //var users = new List<User>();
      //users.Add(new User{Id=55,FirstName = "asdf",LastName = "fdsa",
      //   TelephoneNumber = "+901231231231",Email = "aaa@qqq.www"}
      //);
      //return Ok(users);

      var users = await _context.UsersTable.ToListAsync();

      return users;
   }
   
   [HttpPost]
   public async Task<IActionResult> PostAllUsers(User clientInput)
   {
      User user = clientInput.copy();
      _context.Add(user);
      await _context.SaveChangesAsync();
      
      return Ok();
   }
   
   
} // UserController

