import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetDTO } from '../web-api-client';

@Component({
  selector: 'app-template-view-container',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.css']
})
export class AppTemplateViewComponent {
  @Input() public tempId: string;  
  @Input() public widgets: WidgetDTO[];  
  public contentWidgets: WidgetDTO[] = [];
  public selectedWidget: WidgetDTO;
  @Output() selectedWidgetChanged: EventEmitter<WidgetDTO> = new EventEmitter();
    
  constructor() {
  }

  ngOnChanges() {
  }

  ngOnInit() {   
    this.bindTemplate();
  }

  private bindTemplate(){
    this.setContentWidgets()
  }

  private setContentWidgets(){
    this.contentWidgets = this.widgets.filter( x=> (x.name != 'Header' && x.name != 'Footer'));
  }

  onSelectWidgetByName(widgetName: string){
    let selectedItem = this.widgets.find(x => x.name == widgetName)

    if(selectedItem){
      this.onSelectWidget(selectedItem);
    }
  }

  onSelectWidget(widget:WidgetDTO){
    this.selectedWidget = widget;
    this.selectedWidgetChanged.emit(widget);
  }
}
