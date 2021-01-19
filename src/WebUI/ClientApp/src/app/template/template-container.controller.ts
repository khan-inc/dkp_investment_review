import { Component, ViewChild, ElementRef, ChangeDetectorRef ,Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import * as Mustache from 'mustache';
import { DocTemplateDto, DocumentTemplateClient, WidgetDTO, WidgetParameterDTO } from '../web-api-client';

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
  public docTemplate: DocTemplateDto;

  constructor(private route: ActivatedRoute, private router: Router, documentTemplateClient: DocumentTemplateClient) {    
      this._router = router;
      this._documentTemplateClient = documentTemplateClient;
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

  OnGenerate(){
   this._router.navigate(['/apptemplateview'], {state:{data: this.docTemplate}});
  }
}
