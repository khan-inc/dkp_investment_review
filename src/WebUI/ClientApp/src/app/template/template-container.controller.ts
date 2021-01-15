import { Component, ViewChild, ElementRef, ChangeDetectorRef ,Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Mustache from 'mustache';
import { DocumentTeplate, Widget, Parameter, ParameterTypes } from '../model/DocumentTemplate';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.controller.html',
  styleUrls: ["./template-container.controller.css"]
})
export class AppTemplateComponent {
  public temId: string;
  public acName: string;
  public stDate: string;
  public enDate: string;
  public templateBind: string; 
  public selectedWidgetParameters: Parameter[];
  //@ViewChild('dataContainer') dataContainer: ElementRef;
       
  public testhtml: string;

  public docTemplate: DocumentTeplate = {
    documentTemplateId: 1,
    documentTemplateName: 'Template with Excel and Tableau widget',
    widgets: [
      {
        widgetId: 1,
        widgetName: 'Header',
        parameters: [
          { parameterId:1, parameterName: 'Text', parameterType: ParameterTypes.string, isRequired: true, parameterVal:'' }
        ]
      },
      {
        widgetId: 2,
        widgetName: 'Footer',
        parameters: [
          { parameterId:2, parameterName: 'Text', parameterType: ParameterTypes.string, isRequired: true, parameterVal:''}
        ]
      },
      {
        widgetId: 3,
        widgetName: 'Tableau',
        parameters: [
          { parameterId:3, parameterName: 'Url', parameterType: ParameterTypes.string, isRequired: true, parameterVal:''},
          { parameterId:4, parameterName: 'UrlParams', parameterType: ParameterTypes.string, isRequired: true, parameterVal:''}
        ]
      },
      {
        widgetId: 4,
        widgetName: 'Excel',
        parameters: [
          { parameterId:5, parameterName: 'Filepath', parameterType: ParameterTypes.file, isRequired: true, parameterVal:''},
          { parameterId:6, parameterName: 'Worksheet', parameterType: ParameterTypes.string, isRequired: true, parameterVal:''},
          { parameterId:7, parameterName: 'From Cell', parameterType: ParameterTypes.string, isRequired: true, parameterVal:''},
          { parameterId:8, parameterName: 'To Cell', parameterType: ParameterTypes.string, isRequired: true, parameterVal:''},
        ]
      }
    ]
  };

  constructor(private route: ActivatedRoute, private changeDetector: ChangeDetectorRef,
    private elementRef: ElementRef, private sanitizer: DomSanitizer) {    
  }  
  
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.temId = params['id']
      });
  }

  renderHello() {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }

  renderHtmlData() {
    this.templateBind = this.bindHtmlContent();
  }

  ngDoCheck() {
  }

  onClickMe() {
  }

  myFunction() {
  }

  ngAfterViewChecked() {    
  }

  ngAfterViewInit() {
  }

  private bindHtmlContent(): string {
    return "";
  }

  selectedWidgetChanged(e: Widget){
    console.log('controller',e);
    this.selectedWidgetParameters = e.parameters;
  }
}
