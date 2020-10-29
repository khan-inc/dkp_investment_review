using DKP.InvestmentReview.Application.Components.Models;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.Application.DataRetrival
{
    public interface IDataRetrievalService
    {
            string ServiceName { get; }

            Task<DataRetrievalResultModel<Dictionary<string, object>>> GetComponentTemplateAsync(
                ICollection<string> fields,
                ICollection<Parameter> parameters,
                DateTime transactionDateTime,
                CancellationToken cancellationToken);
    }

    public class DataRetrievalResultModel<T>
    {
        public ICollection<T> DataRows { get; set; }
        public string Query { get; set; }
    }
}