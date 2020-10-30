import { Component, ViewChild, ElementRef, ChangeDetectorRef ,Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as Mustache from 'mustache';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.controller.html'
})
export class AppTemplateComponent {
  public temId: string;
  public acName: string;
  public stDate: string;
  public enDate: string;
  public templateBind: string; 
  //@ViewChild('dataContainer') dataContainer: ElementRef;
       
  public testhtml: string;

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

}
