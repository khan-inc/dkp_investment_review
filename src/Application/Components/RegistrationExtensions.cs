using DKP.InvestmentReview.Application.Components.Mock;
using Microsoft.Extensions.DependencyInjection;

namespace DKP.InvestmentReview.Application.Components
{
    public static class RegistrationExtensions
    {
        public static IServiceCollection AddComponentService(this IServiceCollection services)
        {
            services.AddTransient<BenchmarkReturnsComponentExampeService>();
            services.AddTransient<ComponentServiceFactory>();
            services.AddTransient<IComponentService, BenchmarkReturnsComponentExampeService>();

            return services;
        }
    }
}
