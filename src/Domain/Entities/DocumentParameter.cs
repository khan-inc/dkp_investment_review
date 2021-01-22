
using System.Collections.Generic;
using System;
namespace DKP.InvestmentReview.Domain.Entities
{
    public class DocumentParameter
    {
        public int Id { get; set; }
        public string DocumentId { get; set; }
        public int WidgetParameterId { get; set; }
        public WidgetParameter WidgetParameter { get; set; }
        public string Value { get; set; }
        public DateTime CreatedDate { get; set; }  
    }
}
