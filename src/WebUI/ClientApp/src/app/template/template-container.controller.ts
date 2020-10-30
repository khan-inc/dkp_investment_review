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
    let strContent;

    if (this.temId != undefined && this.temId.toString() === "1") {      
      strContent = `<div id="benchmarkReturnsSlideComponent" class="slideContainer">
        <section class="slideHeader">
          <h1 [innerHtml]="accountName"></h1>
          <h3>Benchmark returns from <span [innerHTML]="startDate"></span> to <span [innerHTML]="endDate"></span></h3>
        </section>
        <section class="slideBody">
          <h2>Body - could be a chart, table or text</h2>
          <canvas id="chartHere">
            <!--todo - render char here with eg highChart.js-->
          </canvas>
        </section>

        <section class="slideFooter">
          <h3>Footer - could be disclaimer & footnotes </h3>
        </section>
      </div>
      <style type="text/css">
        section {
          border: 1px solid #e8e8e8;          
        }

        .slideContainer {
          font-family: Tahoma;
          font-weight: normal;
          width: 750px;
          height: 550px;
          color: #3e3e3e;
          background-color: #fff          
        }

        .slideHeader {
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #b7b6b6;
        }

        .slideBody {
          height: 370px;
          padding: 10px;
          width: 100%;
          background-color: #e5dfdf;
        }

        .slideFooter {
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color: #b7b6b6;
        }
      </style>`
    }
    if (this.temId != undefined && this.temId.toString() === "2") {
      strContent = `<div id="benchmarkReturnsSlideComponent" class="slideContainer">
        <section class="slideHeader">
          <h2>{{AccountName}}</h2>
          <h3>Risk Connect returns from {{startDate}} to {{endDate}}</h3>
        </section>

        <section class="slideBody">
          <h2>Body - could be a chart, table or text</h2>
          <canvas id="chartHere">
            <!--todo - render char here with eg highChart.js-->
          </canvas>
        </section>

        <section class="slideFooter">
          <h3>Footer - could be disclaimer & footnotes </h3>
        </section>
      </div>
      <style type="text/css">
        section {
          border: 1px solid #e8e8e8;          
        }

        .slideContainer {
          font-family: Tahoma;
          font-weight: normal;
          width: 750px;
          height: 550px;
          color: #3e3e3e;
          background-color: #fff          
        }

        .slideHeader {
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color:#7e848f;
        }

        .slideBody {
          height: 370px;
          padding: 10px;
          width: 100%;
          background-color: #d0d7e4;
        }

        .slideFooter {
          height: 100px;
          width: 100%;
          padding: 10px;
          background-color:#7e848f;
        }
      </style>`
    }
    return strContent;
  }

}
