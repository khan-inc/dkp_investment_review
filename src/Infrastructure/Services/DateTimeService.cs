using DKP.InvestmentReview.Application.Common.Interfaces;
using System;

namespace  DKP.InvestmentReview.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
