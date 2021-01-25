import { Component, ViewChild, ElementRef, ChangeDetectorRef ,Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as Mustache from 'mustache';
import { WidgetService } from '../service/widget.service';
import { DocTemplateDto, DocumentClient, DocumentTemplateClient, WidgetDTO, WidgetParameterDTO } from '../web-api-client';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.controller.html',
  styleUrls: ["./template-container.controller.css"]
})
export class AppTemplateComponent {
  public templateId: number;
  public acName: string;
  public stDate: string;
  public enDate: string;
  public templateBind: string; 
  public selectedWidgetParameters: WidgetParameterDTO[];
  public _router: Router;
  public _documentTemplateClient: DocumentTemplateClient;
  public _documentClient: DocumentClient;
  public docTemplate: DocTemplateDto;

  constructor(private route: ActivatedRoute, private router: Router, documentTemplateClient: DocumentTemplateClient,
    documentClient: DocumentClient, private widgetService: WidgetService) {    
      this._router = router;
    this._documentTemplateClient = documentTemplateClient;
    this._documentClient = documentClient;
  }  
  
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.templateId = parseInt(params['id']);
        if(!isNaN(this.templateId)){
          this._documentTemplateClient.getDocument(this.templateId).subscribe(res => this.docTemplate = res);
        }
      });
  }

  selectedWidgetChanged(e: WidgetDTO){
    console.log('controller',e);
    this.selectedWidgetParameters = e.parameters;
  }

  onGenerate() {    
    console.log(this.docTemplate);
    let fileData;
    let fileParameterId;
    var array = this.docTemplate.widgets.map(widget => (
      widget.parameters.map(para => {
        if(para['fileData']){
          fileData = para['fileData'];
          fileParameterId = para.id;
        }
        return (  {WidgetParameterId: para.id, WidgetParameterName: para.name, Value : (para["parameterVal"] || '')      }
      )})
    ));

    this.widgetService.saveWidget(fileData, array, this.docTemplate.id, fileParameterId).subscribe(result => {
      console.log("Document Result", result);
      this._router.navigateByUrl(`/documentPreview?id=${result}`);
    });
  }
}
