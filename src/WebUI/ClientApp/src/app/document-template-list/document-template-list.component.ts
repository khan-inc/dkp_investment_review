import { Component, OnInit } from '@angular/core';
import { DocTemplateListDTO, DocumentTemplateClient } from '../web-api-client';

@Component({
  selector: 'app-document-template-list',
  templateUrl: './document-template-list.component.html',
  styleUrls: ['./document-template-list.component.css']
})
export class DocumentTemplateListComponent implements OnInit {

  _documentTemplateClient: DocumentTemplateClient;
  docTemplates: DocTemplateListDTO[];

  constructor(private documentTemplateClient: DocumentTemplateClient) { 
    this._documentTemplateClient = documentTemplateClient;
  }

  ngOnInit(): void {
    this._documentTemplateClient.get().subscribe(templates => this.docTemplates=templates);
  }

}
