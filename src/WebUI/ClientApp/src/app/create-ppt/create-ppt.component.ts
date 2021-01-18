import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ppt',
  templateUrl: './create-ppt.component.html',
  styles: [
  ]
})
export class CreatePPTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  returnData = [
    { "title": "Template 1 (Excel)", "URL": "#" },
    { "title": "Template 2 (Tableau)", "URL": "#" },
    { "title": "Template 3 (Excel & Tableau)", "URL": "#" },
];
}
