
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DKP.InvestmentReview.Application.Components
{
    public class ComponentServiceFactory
    {
        private readonly IServiceProvider serviceProvider;

        public ComponentServiceFactory(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public IComponentService GetServiceByComponentName(string componentName)
        {
            var service = serviceProvider.GetServices<IComponentService>().SingleOrDefault(s => s.ServiceName == componentName);
            if (service == null)
                throw new InvalidOperationException($"Unknown component \"{componentName}\"");

            return service;
        }
    }
}
