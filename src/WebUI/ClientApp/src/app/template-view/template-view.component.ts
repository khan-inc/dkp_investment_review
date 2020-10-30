import { Component, ViewChild, ElementRef, ChangeDetectorRef, Input,Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../service/template.observable.service';
import { Subscription } from 'rxjs';
import { ActionModel } from '../model/action.model';

@Component({
  selector: 'app-template-view-container',
  templateUrl: './template-view.component.html'
})
export class AppTemplateViewComponent {
  public accountName: string;
  public startDate: string;
  public endDate: string;
  public frequency: string;
  public templateBind: string;
  public templateName: string;
  private code: number;
  public showBarContainer: boolean;
  public showPieContainer: boolean;
  public img: any;
  public imgPie: any;
  //@ViewChild('myDiv') mydiv: ElementRef;
  @Input() public tempId: string;  
  subscription: Subscription;
    
  constructor(private actionService: ActionService) {    
    this.subscription = this.actionService.getActionMessage()
      .subscribe(data => {
        if (data) {          
          this.templateName = data.templateName;
          this.accountName = data.accountName;
          this.startDate = data.stDate;
          this.endDate = data.enDate;
          this.frequency = data.frequency;
          this.img = 'https://image-charts.com/chart?chd=a:1.20,0.65,0.95&chl=1.20|0.65|0.95&chs=730x350&cht=bvs&chtt=Benchmark Returns - Q1 2020 MSCI World&chco=CFECF7,27c9c2&chdlp=r&chxl=0:|Jan|Feb|Mar&chxt=x,y&chbr=5';

          this.imgPie = 'https://image-charts.com/chart?chan=1000%2CeaseOutBounce&chbr=2&chco=228ADC&chd=a%3A-3.45%2C7.93%2C10.41%2C1.70%2C7.74%2C10.48%2C9.37&chdl=1%20Mo%7C3%20Mo%7C1%20Yr%7CYTD%7C3%20Yr%7C50%20Yr%7C10%20Yr&chdlp=r&chl=-3.45%7C7.93%7C10.41%7C1.70%7C7.74%7C10.48%7C9.37&chli=MSCI%20World%20&chs=730x350&cht=pd&chxt=x%2Cy';
        }
    });
  }

  ngOnChanges() {
    if (this.tempId != undefined && this.tempId === "1") {
      this.showBarContainer = true;
      this.showPieContainer = false;
      this.templateName = "Benchmark returns";
    }
    else if (this.tempId != undefined && this.tempId === "2") {
      this.showBarContainer = false;
      this.showPieContainer = true;
      this.templateName = "Risk Analysis";
    }
  }

  ngOnInit() {   
    
  }

  ngOnDestroy() {   
    this.subscription.unsubscribe();
  }

  //ngOnChanges() {    
  //  if (this.temId != undefined && this.temId === "1") {
  //    this.templateName = "Benchmark returns";
  //    this.accountName = this.acName;
  //    this.startDate = this.stDate;
  //    this.endDate = this.enDate;
  //  }
  //  else if (this.temId != undefined && this.temId === "2") {
  //    this.templateName = "Risk Analysis";
  //    this.accountName = this.acName;
  //    this.startDate = this.stDate;
  //    this.endDate = this.enDate;
  //  }
  //}

  ngDoCheck() {
    //this.changeDetector.markForCheck();
  }

  renderHtmlData() {
    this.templateBind = this.bindHtmlContentData("1");   
  }

  private bindHtmlContentData(code: string): string {
    let strContent;   
    if (code != undefined && code === "1") {
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

  //ngDoCheck() {
  //  this.changeDetector.markForCheck();    
  //  //this.changeDetector.detach();
  //  //setInterval(() => {
  //  //  this.changeDetector.detectChanges();
  //  //}, 5000);
  //}

  onClickMe() {
    //this.changeDetector.markForCheck();
    //alert("Ok");
  }
}
