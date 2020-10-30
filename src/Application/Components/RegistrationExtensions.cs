using DKP.InvestmentReview.Application.Components.Mock;
using Microsoft.Extensions.DependencyInjection;

namespace DKP.InvestmentReview.Application.Components
{
    public static class RegistrationExtensions
    {
        public static IServiceCollection AddComponentService(this IServiceCollection services)
        {
            services.AddTransient<BenchmarkReturnsComponentExampleService>();
            services.AddTransient<ComponentServiceFactory>();
            services.AddTransient<IComponentService, BenchmarkReturnsComponentExampleService>();

            return services;
        }
    }
}
