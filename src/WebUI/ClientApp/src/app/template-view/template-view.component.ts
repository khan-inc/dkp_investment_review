import { Component, Input } from '@angular/core';
import { ActionService } from '../service/template.observable.service';
import { Subscription } from 'rxjs';

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
          this.img = 'https://image-charts.com/chart?chd=a:1.20,0.65,0.95&chl=1.20|0.65|0.95&chs=500x300&cht=bvs&chtt=Benchmark Returns - Q1 2020 MSCI World&chco=CFECF7,27c9c2&chdlp=r&chxl=0:|Jan|Feb|Mar&chxt=x,y&chbr=5';
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

  ngDoCheck() {

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

  onClickMe() {
  }
}
