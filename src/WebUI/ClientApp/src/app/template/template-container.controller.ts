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
    //if (this.temId === "1") {
    //  this.acName = "ABC";
    //  this.stDate = "05/10/2020";
    //  this.enDate = "09/11/2020";
    //}
    //else if (this.temId === "2") {
    //  this.acName = "PQR";
    //  this.stDate = "06/10/2020";
    //  this.enDate = "12/11/2020";
    //}
    //this.renderHtmlData();    
  }

  renderHello() {
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }

  renderHtmlData() {
    //this.templateBind = `<div>Hello
    //    <div #myDiv>Some text</div>
    //    </div>`;   

    this.templateBind = this.bindHtmlContent();
    //this.dataContainer.nativeElement.innerHTML = this.templateBind;

    //this.templateBind = `<div>Hello
    //    <div #myDiv>Some text</div>
    //    </div>`;   
       
  }

  ngDoCheck() {
    //this.changeDetector.markForCheck();
    //this.changeDetector.detach();
    //setInterval(() => {
    //  this.changeDetector.detectChanges();
    //}, 5000);
  }

  onClickMe() {
    //this.chkData = "Y";
  }

  myFunction() {
    //this.changeDetector.markForCheck(); // Trigger change detection
   //document.getElementById("demo").innerHTML = "Hello World";
    //document.getElementById("mydiv").innerHTML = "Hello";
    //this.demo.nativeElement.innerHTML = "Angular binding data";   
  }

  ngAfterViewChecked() {    
    //this.startDate = "Date test";    
    //console.log(this.demo.nativeElement.innerHTML);
    //console.log(this.dataContainer.nativeElement.innerHTML);
  }

  ngAfterViewInit() {
    //this.renderHtmlData();

    //this.changeDetector.markForCheck();
    //console.log(this.mydiv.nativeElement.innerHTML);
    //this.mydiv.nativeElement.innerHTML = "Angular success";
    //this.mydiv.nativeElement.innerHTML = "Angular success";
    //console.log(this.demo.nativeElement.innerHTML);

    //this.demo.nativeElement.innerHTML = "Angular binding data";
    //this.mydiv.nativeElement.innerHTML = "Angular success";
    //this.renderHtmlData();
    //this.accountName = "Account test";
    //this.bindHtmlContent();
    //console.log(this.bindHtmlContent());


    //this.dataContainer.nativeElement.innerHTML = this.templateBind;   
    //this.sanitizer.sanitize(SecurityContext.HTML, this.templateBind);

    //this.sanitizer.bypassSecurityTrustHtml(this.templateBind);    
  }

  private bindHtmlContent(): string {
    let strContent;
    //console.log(this.code);
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
