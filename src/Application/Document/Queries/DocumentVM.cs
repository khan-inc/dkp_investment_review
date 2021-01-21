using DKP.InvestmentReview.Application.Common.Mappings;
using DKP.InvestmentReview.Domain.Entities;
using DKP.InvestmentReview.Application.DocTemplates.Queries;
using System.Collections.Generic;
using System.Collections;
using DKP.InvestmentReview.Application.Document.Queries;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class DocumentVM : IMapFrom<DKP.InvestmentReview.Domain.Entities.Document>{
        public DocTemplateDto docTemplateDTO { get; set; }

        public IList<DocumentParameterDTO> DocumentParameters { get; set; }

    }
}