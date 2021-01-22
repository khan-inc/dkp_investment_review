using System;
using System.Collections.Generic;
using System.Text;

namespace DKP.InvestmentReview.Application.Common.Interfaces
{
    public interface IExcelToImageService
    {
        void ConvertExcelToImage(string fileName, string namedRange);
    }
}
