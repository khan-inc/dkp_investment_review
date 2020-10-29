using Microsoft.Extensions.DependencyInjection;

namespace DKP.InvestmentReview.Application.DataRetrival
{
    public static class RegistrationExtensions
    {
        public static IServiceCollection AddDataRetrievalService(this IServiceCollection services)
        {
            services.AddTransient<DataRetrievalServiceFactory>();

            return services;
        }
    }
}
