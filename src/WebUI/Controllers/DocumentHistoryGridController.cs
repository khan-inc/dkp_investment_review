using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    public class DocumentHistoryGridServiceController : ApiController
    {        
        [HttpGet]
        public List<HistoryGridData> getDocumentHistoryGridDetails()
        {
            List<HistoryGridData> objGridData = new List<HistoryGridData>();
            objGridData.Add(new HistoryGridData("Benchmark Return", "Template 1 - Instance 1", "01/01/2020"));
            objGridData.Add(new HistoryGridData("Annual Report: ABC", "Template 1 - Instance 1", "01/01/2020"));
            objGridData.Add(new HistoryGridData("Annual Report: XYZ", "Template 1 - Instance 1", "01/01/2020"));
            objGridData.Add(new HistoryGridData("2020 Sales History", "Template 1 - Instance 1", "01/01/2020"));

            return objGridData;
        }
    }

    public class HistoryGridData
    {
        private string title;
        private string template;
        private string date;

        public HistoryGridData(string title, string template, string date)
        {
            this.title = title;
            this.template = template;
            this.date = date;
        }
        public string Title
        {
            get { return title; }
            set { title = value; }
        }

        public string Template
        {
            get { return template; }
            set { template = value; }
        }

        public string Date
        {
            get { return date; }
            set { date = value; }
        }

    }

}
