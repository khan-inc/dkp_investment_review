using DKP.InvestmentReview.Domain.Common;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
