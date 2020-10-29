
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DKP.InvestmentReview.Application.DataRetrival
{
    public class DataRetrievalServiceFactory
    {
        private readonly IServiceProvider serviceProvider;

        public DataRetrievalServiceFactory(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public IDataRetrievalService GetServiceByComponentName(string componentName)
        {
            var service = serviceProvider.GetServices<IDataRetrievalService>().SingleOrDefault(s => s.ServiceName == componentName);
            if (service == null)
                throw new InvalidOperationException($"{typeof(DataRetrievalServiceFactory)} : Unknown component \"{componentName}\"");

            return service;
        }
    }
}
