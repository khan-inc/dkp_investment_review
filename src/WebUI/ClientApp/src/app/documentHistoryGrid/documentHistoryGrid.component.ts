import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-history',
  templateUrl: './documentHistoryGrid.component.html'
})

export class DocumentHistoryGridComponent implements OnInit {
  
    constructor() { }
    ngOnInit() { }

    data = [
      { "title": "Benchmark Return", "template": "Template 1 - Instance 1", "date": "01/01/2021" },
      { "title": "Annual Report: ABC", "template": "Template 1 - Instance 2", "date": "02/02/2021" },
      { "title": "Annual Report: XYZ", "template": "Template 2 - Instance 1", "date": "03/03/2021" },
      { "title": "2020 Sales History", "template": "Template 2 - Instance 2", "date": "04/04/2021" }
  ];;

}
