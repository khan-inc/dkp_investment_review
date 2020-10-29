using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.Components.Models
{
    public class DataSet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<string> Fields { get; set; }
    }
}