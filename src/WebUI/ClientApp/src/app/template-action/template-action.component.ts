import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetParameterDTO, ParameterType, DocumentClient } from '../web-api-client';

@Component({
  selector: 'app-template-action',
  templateUrl: './template-action.component.html',
  styleUrls:['./template-action.component.css']
})

export class AppTemplateActionComponent {
  public inputPara: any = [];
  @Input() public tempId: string;
  @Input() widgetParams: WidgetParameterDTO[];
  uploadSuccess: boolean = false;

  constructor(private documentClient: DocumentClient) {
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

  fileAdded(widget:WidgetParameterDTO, files: FileList){
    if(widget.type === ParameterType.File){
      widget['fileData'] = files[0];
    }
  }

  uploadFile(files: FileList){
    if(files.length <= 0){
      return;
    }
    //const formData: FormData = new FormData();
    const fileData: any = {};
    fileData['data'] = files[0];
    fileData['fileName'] = files[0].name;
    //formData.append('file', files[0], files[0].name);
    this.documentClient.uploadFile(fileData).subscribe(result => {
      this.uploadSuccess = true;
    });
  }
}
