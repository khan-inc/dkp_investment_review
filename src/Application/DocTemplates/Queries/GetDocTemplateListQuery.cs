using AutoMapper;
using DKP.InvestmentReview.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DKP.InvestmentReview.Domain.Entities;
using System.Collections.Generic;

namespace DKP.InvestmentReview.Application.DocTemplates.Queries
{
    public class GetDocTemplateListQuery : IRequest<List<DocTemplateListDTO>>
    {
        
    }

    public class GetDocTemplateListQueryHandler : IRequestHandler<GetDocTemplateListQuery, List<DocTemplateListDTO>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetDocTemplateListQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<List<DocTemplateListDTO>> Handle(GetDocTemplateListQuery request, CancellationToken cancellationToken)
        {
            var docTemplatelist = _mapper.Map<List<DocTemplateListDTO>>(_context.DocTemplates);
            return Task.FromResult(docTemplatelist);
        }
    }
}
