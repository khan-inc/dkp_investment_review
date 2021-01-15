import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionService } from '../service/template.observable.service';
import { Subscription } from 'rxjs';
import { DocumentTeplate, Widget, Parameter, ParameterTypes } from '../model/DocumentTemplate';

@Component({
  selector: 'app-template-view-container',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.css']
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
  public headerTitle: string;
  public headerSubtitle: string;
  //@ViewChild('myDiv') mydiv: ElementRef;
  @Input() public tempId: string;  
  subscription: Subscription;
  @Input() public widgets: Widget[];  
  public contentWidgets: Widget[] = [];
  public selectedWidget: Widget;
  @Output() selectedWidgetChanged: EventEmitter<Widget> = new EventEmitter();
    
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
    this.templateName = "<Template-Name>";
    this.accountName = "<Account-Name>";
    this.startDate = "1819-01-01";
    this.endDate = "1819-03-31";
    this.frequency = "<Frequency>";
    this.headerTitle = `Benchmark returns - ${this.accountName}`;

    this.bindTemplate();
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
    return "";
  }

  onClickMe() {
  }

  private bindTemplate(){
    //this.setHeaderWidget();
    this.setContentWidgets()
  }

  private setHeaderWidget(){
    let headerWidget = this.widgets.find(x => x.widgetName == "Header");
    console.log(headerWidget);
  }

  private setContentWidgets(){
    this.contentWidgets = this.widgets.filter( x=> (x.widgetName != 'Header' && x.widgetName != 'Footer'));
    console.log('Arrays',this.contentWidgets);
  }

  onSelectWidgetByName(widgetName: string){
    let selectedItem = this.widgets.find(x => x.widgetName == widgetName)

    if(selectedItem){
      this.onSelectWidget(selectedItem);
    }
  }

  onSelectWidget(widget:Widget){
    console.log(widget);
    this.selectedWidget = widget;
    this.selectedWidgetChanged.emit(widget);
  }
}
