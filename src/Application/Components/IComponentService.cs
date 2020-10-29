using DKP.InvestmentReview.Application.Components.Models;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Components
{
    public interface IComponentService
    {
        string ServiceName { get; }

        Task<ComponentTemplate> GetComponentTemplateAsync(CancellationToken cancellationToken);
        Task<string> GetComponentUiTemplateAsync(string uiTemplateName, CancellationToken cancellationToken);
    }
}
