using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace DKP.InvestmentReview.WebUI.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class ExcelWidgetController : ApiController
    {
        [HttpPost]
        public IActionResult UploadFile(IFormFile formData)
        {
            var fileData = Request.Form.Files[0];
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), "Files");
            if (fileData.Length > 0)
            {
                var fullPath = Path.Combine(pathToSave, fileData.FileName);
                
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    fileData.CopyTo(stream);
                }
                return Ok();
            }
            return BadRequest();
        }
    }
}
