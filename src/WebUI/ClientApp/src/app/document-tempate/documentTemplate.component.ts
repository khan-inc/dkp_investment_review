import { Component, OnInit } from '@angular/core';
//import { DocumentTemplateClient } from '../web-api-client';

@Component({
  selector: 'app-document-template',
  templateUrl: './documentTemplate.component.html',
  styleUrls: ['./documentTemplate.component.css']
})
export class DocumentTemplateComponent implements OnInit {

  result: string;

  // constructor(private client : DocumentTemplateClient) { 
  // }

  ngOnInit(): void {
    //this.client.getDocument().subscribe(data => this.result = data, err => console.log(err));
  }

}
