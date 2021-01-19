using DKP.InvestmentReview.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<TodoList> TodoLists { get; set; }

        DbSet<TodoItem> TodoItems { get; set; }

        public DbSet<DocTemplate> DocTemplates { get; set; }

        public DbSet<pptLinkTemplate> PPTTemplates { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
