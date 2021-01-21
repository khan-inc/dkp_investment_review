import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetParameterDTO, ParameterType } from '../web-api-client';

@Component({
  selector: 'app-template-action',
  templateUrl: './template-action.component.html',
  styleUrls:['./template-action.component.css']
})

export class AppTemplateActionComponent {
  public inputPara: any = [];
  @Input() public tempId: string;
  @Input() widgetParams: WidgetParameterDTO[];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  getControlType(type: ParameterType): string{
      let controlType : string = '';
      switch (type) {
          case ParameterType.Text, ParameterType.Number, ParameterType.Date:
              controlType = 'text';
              break;
          case ParameterType.File:
              controlType = 'file';
              break;
          default:
              controlType = 'text';
              break;
      }
      return controlType;
  }
}
