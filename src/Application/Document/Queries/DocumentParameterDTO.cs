using DKP.InvestmentReview.Domain.Entities;
using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using System;

namespace DKP.InvestmentReview.Application.Document.Queries
{
    public class DocumentParameterDTO : IMapFrom<DocumentParameter>
    {
        public int Id { get; set; }
        public int WidgetPArameterId { get; set; }
        public string Value { get; set; }        
        public int DocumentId { get; set; }
        public int WidgetParameterId { get; set; }
        public DateTime CreatedDate { get; set; }        
    }
}