using larinsoft_task_1_web_api.Data;
using Microsoft.EntityFrameworkCore;

namespace larinsoft_task_1_web_api;

class Program
{
   static void Main(string[] args)
   {
      Console.WriteLine("Hello, World!");

      var builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllers();
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();

      builder.Services.AddDbContext<AppDbContext>( options =>
         options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
      );
      
      var app = builder.Build();

      if (app.Environment.IsDevelopment()) {
         app.UseSwagger();
         app.UseSwaggerUI();
      }

      app.MapControllers();

      app.Run();

   }
}
