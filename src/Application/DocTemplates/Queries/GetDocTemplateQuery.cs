using AutoMapper;
using DKP.InvestmentReview.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DKP.InvestmentReview.Domain.Entities;
using System.Collections;
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class GetDocTemplateQuery : IRequest<DocTemplateDto>
    {
        public int DocumentTemplateId { get; set; }
    }

    public class GetDocTemplateQueryHandler : IRequestHandler<GetDocTemplateQuery, DocTemplateDto>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetDocTemplateQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<DocTemplateDto> Handle(GetDocTemplateQuery request, CancellationToken cancellationToken)
        {
            var docTemplate = _context.DocTemplates.Include(doc => doc.Widgets)
                                        .ThenInclude(wid => wid.Parameters)
                                        .First<DocTemplate>(x => x.Id == request.DocumentTemplateId);
            docTemplate.Widgets = docTemplate.Widgets.OrderBy(wid => wid.Id).ToList();
            docTemplate.Widgets.ToList().ForEach(wid => wid.Parameters = wid.Parameters.OrderBy(p => p.Id).ToList());
            var docTemplateDto = _mapper.Map<DocTemplateDto>(docTemplate);
            return Task.FromResult(docTemplateDto);
        }
    }

    public class GetPPTTemplateQuery : IRequest<List<pptLinkTemplateDTO>>
    {
        public int DocumentTemplateId { get; set; }
    }

    public class GetPPTTemplateQueryHandler : IRequestHandler<GetPPTTemplateQuery, List<pptLinkTemplateDTO>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetPPTTemplateQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<pptLinkTemplateDTO>> Handle(GetPPTTemplateQuery request, CancellationToken cancellationToken)
        {
            var returnList = new List<pptLinkTemplateDTO>();
            var pptTemplate = _context.PPTTemplates.ToList();
            foreach (var item in pptTemplate)
            {
                returnList.Add(_mapper.Map<pptLinkTemplateDTO>(item));
            }
            return Task.FromResult(returnList.OrderBy(x=>x.Id).ToList());
        }        
    }
}
