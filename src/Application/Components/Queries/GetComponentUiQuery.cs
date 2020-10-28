using DKP.InvestmentReview.Application.Components.Models;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.Components.Queries
{
    public class GetComponentQuery : IRequest<ComponentTemplate>
    {
        internal readonly string templateName;

        public GetComponentQuery(string templateName)
        {
            this.templateName = templateName;
        }
    }

    public class GetComponentQueryHandler : IRequestHandler<GetComponentQuery, ComponentTemplate>
    {
        private readonly ComponentServiceFactory serviceFactory;

        public GetComponentQueryHandler(ComponentServiceFactory serviceFactory)
        {
            this.serviceFactory = serviceFactory;
        }

        public Task<ComponentTemplate> Handle(GetComponentQuery request, CancellationToken cancellationToken)
        {
            var service = serviceFactory.GetServiceByComponentName(request.templateName);
            return service.GetComponentTemplateAsync(cancellationToken);
        }
    }
}
