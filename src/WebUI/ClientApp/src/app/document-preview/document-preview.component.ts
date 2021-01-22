import { Component, OnInit } from '@angular/core';
import { DocumentClient, DocumentParameterDTO, DocumentVM, WidgetDTO } from '../web-api-client';

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnInit {

  result: string;
  docTitle: string;
  _documentClient: DocumentClient;
  headerText: string = '';
  footerText: string = '';
  contentWidgets: WidgetDTO[] = [];
  contentDivs: string[];
  documentParameters: DocumentParameterDTO[];
  templateId: number;

  constructor(private documentClient : DocumentClient) { 
    this._documentClient = documentClient;

  }

  ngOnInit(): void {
    this._documentClient.getDocument(1).subscribe(data => this.renderWidget(data));
  }

  OnExport(){
    console.log('On Export');
  }

  renderWidget(documentVM : DocumentVM){
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
        let filePath = this.templateId + '/' + docPara.value.replace('.xlsx', '.jpeg');
        return `<div><img src="/WidgetImages/Excel/${filePath}" hieght="auto" width="100%" style="width: 100%"></img></div>`
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
