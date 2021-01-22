using DKP.InvestmentReview.Domain.Entities;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using System.Collections.Generic;
using DKP.InvestmentReview.Application.Document.Queries;
using System;
using DKP.InvestmentReview.Application.Common.Mappings;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class DocumentDTO : IMapFrom<DKP.InvestmentReview.Domain.Entities.Document>{
        public int Id { get; set; }

        public string Title { get; set; }
        public int DocTemplateId { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public DocTemplateDto DocTemplateDTO { get; set; }

        public IList<DocumentParameterDTO> Parameters { get; set; }
    }
}
// using DKP.InvestmentReview.Application.Common.Mappings;
// using DKP.InvestmentReview.Domain.Entities;
// using DKP.InvestmentReview.Application.DocTemplates.Queries;
// using System.Collections.Generic;
// using DKP.InvestmentReview.Application.Document.Queries;

// namespace DKP.InvestmentReview.Application.DocTemplates.Queries
// {
//     public class DocumentDTO : IMapFrom<DKP.InvestmentReview.Domain.Entities.Document>{
//         public int Id { get; set; }

//         public DocTemplateDto DocTemplateDTO { get; set; }

//         public IList<DocumentParameterDTO> Parameters { get; set; }
//     }
// }
