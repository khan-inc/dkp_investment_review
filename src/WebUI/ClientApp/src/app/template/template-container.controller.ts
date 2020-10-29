import { Component, ViewChild, ElementRef, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.controller.html'
})
export class AppTemplateComponent {
  public accountName: string = 'Test1';
  public startDate: string = 'Test2';
  public endDate: string;
  public templateBind: string;
  private code: number;  
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(private route: ActivatedRoute,
    private elementRef: ElementRef, private sanitizer: DomSanitizer) {
  }
  
  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.code = params['id']
      });    
  }

  ngAfterViewChecked() {
    this.accountName = "Data1";
    this.startDate = "Data2";
  }

  ngAfterViewInit() {
    let bar = 'BenchMark';
    this.templateBind = this.bindHtmlContent();
    console.log(this.bindHtmlContent());
    
    this.dataContainer.nativeElement.innerHTML = this.templateBind;   
    //this.sanitizer.sanitize(SecurityContext.HTML, this.templateBind);

    //this.sanitizer.bypassSecurityTrustHtml(this.templateBind);
    //this.templateBind;    
  }

  private bindHtmlContent(): string {
    let strContent;
    console.log(this.code);
    if (this.code != undefined && this.code.toString() === "1") {      
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
    if (this.code != undefined && this.code.toString() === "2") {
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
