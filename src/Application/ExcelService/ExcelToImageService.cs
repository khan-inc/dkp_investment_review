using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Text;
using Microsoft.AspNetCore.Hosting;

using DKP.InvestmentReview.Application.Common.Interfaces;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace DKP.InvestmentReview.Application.ExcelService
{
    public class ExcelToImageService : IExcelToImageService
    {
        private IConfiguration _configuration;
        private readonly IHostingEnvironment _hostEnvironment;

        public ExcelToImageService(IConfiguration iConfig, IHostingEnvironment webHostEnvironment)
        {
            _configuration = iConfig;
            _hostEnvironment = webHostEnvironment;
        }


        public void ConvertExcelToImage(string fileName, string namedRange)
        {
            string excelFilePath = Path.Combine(_hostEnvironment.ContentRootPath, _configuration.GetValue<string>("ExcelPath") + "\\" + fileName);
            string excelImageStoreFilePath = Path.Combine(_hostEnvironment.WebRootPath, _configuration.GetValue<string>("ExcelImageStorePath"));

            SpreadsheetGear.IWorkbook workbook = null;

            try
            {
                // Get the workbook from a file.
                workbook = SpreadsheetGear.Factory.GetWorkbook(excelFilePath);

                // Check whether we have a valid workbook.
                if (workbook == null)
                    throw new InvalidOperationException("Missing uri or file parameter.");

                // Get the requested worksheet or default to first worksheet.
                SpreadsheetGear.IWorksheet worksheet;

                SpreadsheetGear.IRange areaRangeName = null;
                SpreadsheetGear.Drawing.Image image = null;

                if (namedRange != null && namedRange.Trim() != "")
                {
                    // if NameRange is passed, get the range of occupied cells
                    //areaRangeName = workbook.Names[namedRange].RefersToRange;
                    //worksheet = workbook.Names[namedRange].RefersToRange.Worksheet;
                    areaRangeName = workbook.Names[namedRange].RefersToRange;
                    worksheet = workbook.Names[namedRange].RefersToRange.Worksheet;
                    worksheet.WindowInfo.DisplayGridlines = false;

                    image = new SpreadsheetGear.Drawing.Image(areaRangeName);
                }
                else
                {
                    worksheet = workbook.Worksheets[0];
                    worksheet.WindowInfo.DisplayGridlines = false;

                    // if nameRange is not specified, it takes default 1st spreadsheet & parse its occupied cells range
                    image = new SpreadsheetGear.Drawing.Image(worksheet.UsedRange.Cells.Range);
                }

                // Get a new bitmap image of the represented range.
                using (Bitmap bitmap = image.GetBitmap())
                {
                    Graphics graphics = Graphics.FromImage(bitmap);

                    //string[] fileExcelImage = fileName.Split('/'); // 1/ExampleExcelData_2.xlsx
                    //fileName = fileExcelImage[1].Substring(0, (fileExcelImage[1].Length - 5));

                    var imageFileName = fileName.Substring(0, fileName.LastIndexOf("."));

                    graphics.CompositingQuality = CompositingQuality.HighSpeed;
                    graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                    graphics.CompositingMode = CompositingMode.SourceCopy;
                    bitmap.Save(Path.Combine(excelImageStoreFilePath, $"{imageFileName}.jpeg"), ImageFormat.Bmp);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
