using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.ComponentTemplates
{
    public class DataSet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<string> Fields { get; set; }
    }
}