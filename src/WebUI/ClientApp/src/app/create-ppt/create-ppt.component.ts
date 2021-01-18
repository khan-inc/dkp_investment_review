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
    { "title": "from Excel", "URL": "#" },
    { "title": "from Tableau", "URL": "#" },
    { "title": "from Both", "URL": "#" },
    { "title": "from Excel and Tableau", "URL": "#" }
];
}
