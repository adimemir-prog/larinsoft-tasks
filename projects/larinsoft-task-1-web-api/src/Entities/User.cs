using System.ComponentModel.DataAnnotations;

namespace larinsoft_task_1_web_api.Entities;

public class User
{
   [Key] public int Id { get; set; } = 0;
   public string FirstName { get; set; } = "";
   public string LastName { get; set; } = "";
   public string TelephoneNumber { get; set; } = "";
   public string Email { get; set; } = "";
   
   public User copy()
   {
      User user = new User();
      user.FirstName = this.FirstName;
      user.LastName = this.LastName;
      user.TelephoneNumber = this.TelephoneNumber;
      user.Email = this.Email;
      return user;
   }
}