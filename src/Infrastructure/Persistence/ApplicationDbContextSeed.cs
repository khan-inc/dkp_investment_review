using DKP.InvestmentReview.Domain.Entities;
using DKP.InvestmentReview.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace  DKP.InvestmentReview.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedDefaultUserAsync(UserManager<ApplicationUser> userManager)
        {
            var defaultUser = new ApplicationUser { UserName = "administrator@localhost", Email = "administrator@localhost" };

            if (userManager.Users.All(u => u.UserName != defaultUser.UserName))
            {
                await userManager.CreateAsync(defaultUser, "Administrator1!");
            }
        }

        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            // Seed, if necessary
            if (!context.TodoLists.Any())
            {
                context.TodoLists.Add(new TodoList
                {
                    Title = "Shopping",
                    Items =
                    {
                        new TodoItem { Title = "Apples", Done = true },
                        new TodoItem { Title = "Milk", Done = true },
                        new TodoItem { Title = "Bread", Done = true },
                        new TodoItem { Title = "Toilet paper" },
                        new TodoItem { Title = "Pasta" },
                        new TodoItem { Title = "Tissues" },
                        new TodoItem { Title = "Tuna" },
                        new TodoItem { Title = "Water" }
                    }
                });

                await context.SaveChangesAsync();
            }

            if (!context.DocTemplates.Any())
            {
                context.DocTemplates.Add(new DocTemplate(){
                    Name = "Excel template",
                    Widgets = {
                        GetHeaderWidget(),
                        GetFooterWidget(),
                        GetExcelWidget()
                    }
                });

                context.DocTemplates.Add(new DocTemplate(){
                    Name = "Tableau template",
                    Widgets = {
                        GetHeaderWidget(),
                        GetFooterWidget(),
                        GetTableauWidget()
                    }
                });

                context.DocTemplates.Add(new DocTemplate(){
                    Name = "Excel and Tableau template",
                    Widgets = {
                        GetHeaderWidget(),
                        GetFooterWidget(),
                        GetTableauWidget(),
                        GetExcelWidget()
                        }
                    });
                    
                await context.SaveChangesAsync();
            }
        }

        private static WidgetTemplate GetHeaderWidget(){
            return new WidgetTemplate{
                            Name = "Header",
                            Parameters = {
                                new WidgetParameter { Name = "Header Text", Type = Domain.Enums.ParameterType.Text, IsRequired = true}
                            }
            };
        }

        private static WidgetTemplate GetFooterWidget(){
            return new WidgetTemplate{
                            Name = "Footer",
                            Parameters = {
                                new WidgetParameter { Name = "Footer Text", Type = Domain.Enums.ParameterType.Text, IsRequired = true}
                            }
            };
        }

        private static WidgetTemplate GetTableauWidget(){
            return new WidgetTemplate{
                            Name = "Tableau",
                            Parameters = {
                                new WidgetParameter { Name = "Tableau URL", Type = Domain.Enums.ParameterType.Text, IsRequired = true},
                                new WidgetParameter { Name = "Tableau Parameters", Type = Domain.Enums.ParameterType.Text}
                            }
            };
        }

        private static WidgetTemplate GetExcelWidget(){
            return new WidgetTemplate{
                            Name = "Excel",
                            Parameters = {
                                new WidgetParameter { Name = "Filepath", Type = Domain.Enums.ParameterType.File, IsRequired = true},
                                new WidgetParameter { Name = "Worksheet", Type = Domain.Enums.ParameterType.Text},
                                new WidgetParameter { Name = "From Cell", Type = Domain.Enums.ParameterType.Text},
                                new WidgetParameter { Name = "To Cell", Type = Domain.Enums.ParameterType.Text}
                            }
                        }
                    }
}
