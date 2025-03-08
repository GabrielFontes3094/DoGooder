using APIWEB.Models;
using Microsoft.EntityFrameworkCore;

namespace APIWEB.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Evento> Eventos { get; set; }
    }
}
