namespace larinsoft_task_1_web_api.Data;

using Entities;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
   protected readonly IConfiguration Configuration;
   
   public AppDbContext(IConfiguration configuration)
   {
      Configuration = configuration;
   }
   
   protected override void OnConfiguring(DbContextOptionsBuilder options)
   {
      // connect to postgres with connection string from app settings
      options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
   }
   
   public DbSet<User> UsersTable { get; set; }
   
}