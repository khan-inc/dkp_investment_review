using Microsoft.Extensions.DependencyInjection;

namespace DKP.InvestmentReview.WebUI.Examples
{
    public static class RegistrationExtensions
    {
        public static IServiceCollection AddExamples(this IServiceCollection services)
        {
            services.AddTransient<BenchmarkReturnsComponentExampeService>();
            return services;
        }
    }
}
