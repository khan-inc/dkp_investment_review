import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionModel } from '../model/action.model';
import { ActionService } from '../service/template.observable.service';

@Component({
  selector: 'app-template-action',
  templateUrl: './template-action.component.html'
})

export class AppTemplateActionComponent {
  public accountName: string;
  public stDate: string;
  public enDate: string;
  public frequency: string;
  public templateName: string;
  public templateId: string;
  public inputPara: any = [];
  @Input() public tempId: string;
  @Output() public emitAction: EventEmitter<ActionModel> = new EventEmitter();

  public inputArray: any = [
    {
      "id": 123,
      "templateName": null,
      "componentName": "BenchmarkReturns",
      "parameters": [
        {
          "id": 1,
          "name": "accountName",
          "type": "text",
          "value": null,
          "title": "Benchmark Name",
          "placeholder": "benchmark name"
        },
        {
          "id": 2,
          "name": "stDate",
          "type": "date",
          "value": null,
          "title": "Start Date",
          "placeholder": "Start date"
        },
        {
          "id": 3,
          "name": "enDate",
          "type": "date",
          "value": null,
          "title": "End Date",
          "placeholder": "End date"
        },
        {
          "id": 4,
          "name": "frequency",
          "type": "text",
          "value": null,
          "title": "Frequency",
          "placeholder": "Frequency"
        }
      ],
      "dataSets": [
        {
          "id": 1,
          "name": "BenchmarkReturnDataSet",
          "fields": [
            "BenchmarkName",
            "ReturnEndDate",
            "BenchmarkReturn"
          ]
        }
      ],
      "uiTemplates": [
        "barChartTemplate",
        "pieChartTemplate"
      ]
    }
  ];

  constructor(private actionService: ActionService) {
  }

  ngOnInit() {
    if (this.inputArray != undefined && this.inputArray.length > 0) {
      this.inputPara = this.inputArray[0].parameters;
      console.log(this.inputPara);
    }
  }

  ngOnChanges() {
    if (this.tempId != undefined && this.tempId === "1") {
      this.templateId = this.tempId;
      this.templateName = "Benchmark returns";
    }
    else if (this.tempId != undefined && this.tempId === "2") {
      this.templateId = this.tempId;
      this.templateName = "Risk Analysis";
    }
  }

  onClickGenerate() {
    if (this.inputPara != undefined) {
      let _accountname: string;
      let _stDate: string;
      let _enDate: string;
      let _frequency: string;

      this.inputPara.forEach(function (item) {
        if (item.name === 'accountName') {
          _accountname = item.value;
        }
        if (item.name === 'stDate') {
          _stDate = item.value;
        }
        if (item.name === 'enDate') {
          _enDate = item.value;
        }
        if (item.name === 'frequency') {
          _frequency = item.value;
        }
      });

      if (_accountname === null) return;
      if (_stDate === null) return;
      if (_enDate === null) return;
      if (_frequency === null) return;

      let _actionData = this.bindActionModel(_accountname,
        _stDate,
        _enDate,
        _frequency);

      console.log(_actionData);
      this.actionService.sendActionMessage(_actionData);
      //this.emitAction.emit(_actionData);
    }
  }

  bindActionModel(clientName: string,
    stDate: string,
    enDate: string,
    frequency: string): ActionModel {
    let _action = new ActionModel();
    _action.tempId = this.templateId;
    _action.templateName = this.templateName;
    _action.accountName = clientName;
    _action.stDate = stDate;
    _action.enDate = enDate;
    _action.frequency = frequency;
    return _action;
  }
}
