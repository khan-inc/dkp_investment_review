
using System.Collections.Generic;

namespace DKP.InvestmentReview.Domain.Entities
{
    public class Document
    {
        public int Id { get; set; }

        public int DocTemplateId { get; set; }
        public DocTemplate DocTemplate { get; set; }
        public IList<DocumentParameter> Parameters { get; set; } = new List<DocumentParameter>();
        public bool Active { get; set; }
    }
}
