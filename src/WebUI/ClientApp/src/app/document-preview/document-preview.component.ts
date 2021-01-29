import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import pptxgen from "pptxgenjs";
import { DocumentClient, DocumentParameterDTO, DocumentVM, WidgetDTO } from '../web-api-client';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg } from 'html-to-image';

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnInit {

  result: string;
  docTitle: string;
  headerText: string = '';
  footerText: string = '';
  contentWidgets: WidgetDTO[] = [];
  contentDivs: string[];
  documentParameters: DocumentParameterDTO[];
  templateId: number;
  documentId: number;

  constructor(private documentClient : DocumentClient, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.documentId = parseInt(params['id']);
        if(!isNaN(this.documentId)){
          this.documentClient.getDocument(this.documentId).subscribe(data => this.renderWidget(data));
        }
      });
  }

  OnExport(){
    var node = document.getElementById('exportAsImage');
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var pptx = new pptxgen();
        let slide = pptx.addSlide();
        slide.addImage({ path: dataUrl, x:0, y:0, h:5.61, w:10 });
        pptx.writeFile("Geneated ppt from using tool.pptx");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    console.log('On Export');
  }



  renderWidget(documentVM : DocumentVM){
    console.log(documentVM);
    this.templateId = documentVM.docTemplateDTO.id;
    this.documentParameters = documentVM.documentParameters;

    var headerWidget = documentVM.docTemplateDTO.widgets.find(w => w.name == 'Header')
    this.renderHeaderWidget(headerWidget);
    
    var footerWidget = documentVM.docTemplateDTO.widgets.find(w => w.name == 'Footer')
    this.renderFooterWidget(footerWidget);

    this.renderContentWidget(documentVM.docTemplateDTO.widgets.filter(w => w.name!= 'Header' && w.name!= 'Footer'));
  }

  renderContentWidget(contentWidgets: WidgetDTO[]){
    let contentParams = contentWidgets.map(widget => {
      if(widget.name == 'Excel'){
        return widget.parameters.find(p => p.name=='Filepath').id;
      }
      else{
        return '';
      }
    });

    this.contentDivs = contentParams.map(cp => {
      let docPara = this.documentParameters.find(p => p.widgetPArameterId == cp);
      if(docPara){
        console.log('docPara.value',docPara.value);
        //let filePath = this.templateId + '/' + docPara.value.replace('.xlsx', '.jpeg');
        return `<div><img src="/Files/ExcelImageFiles/${docPara.id}.jpeg" hieght="auto" width="100%" style="width: 100%"></img></div>`
      }
      return '';
    });
    
  }

  renderHeaderWidget(header:WidgetDTO){
    let headerParameter = header.parameters.find(p => p.name=='Header Text');
    let docPara = this.documentParameters.find(dp => dp.widgetPArameterId == headerParameter.id);
    if(docPara){
      this.headerText = docPara.value;
    }
  }

  renderFooterWidget(footer:WidgetDTO){
    let footerParameter = footer.parameters.find(p => p.name=='Footer Text');
    let docPara = this.documentParameters.find(dp => dp.widgetPArameterId == footerParameter.id);
    if(docPara){
      this.footerText = docPara.value;
    }
  }

}
