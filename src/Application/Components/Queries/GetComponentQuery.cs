using DKP.InvestmentReview.Application.Components.Models;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Components.Queries
{
    public class GetComponentUiQuery : IRequest<string>
    {
        internal readonly string templateName;
        internal readonly string uiTemplateName;

        public GetComponentUiQuery(string templateName, string uiTemplateName)
        {
            this.templateName = templateName;
            this.uiTemplateName = uiTemplateName;
        }
    }

    public class GetComponentQueryUiHandler : IRequestHandler<GetComponentUiQuery, string>
    {
        private readonly ComponentServiceFactory serviceFactory;

        public GetComponentQueryUiHandler(ComponentServiceFactory serviceFactory)
        {
            this.serviceFactory = serviceFactory;
        }

        public Task<string> Handle(GetComponentUiQuery request, CancellationToken cancellationToken)
        {
            var service = serviceFactory.GetServiceByComponentName(request.templateName);
            return service.GetComponentUiTemplateAsync(request.uiTemplateName, cancellationToken);
        }
    }
}
