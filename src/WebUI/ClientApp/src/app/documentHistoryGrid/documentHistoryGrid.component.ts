import { Component, OnInit } from '@angular/core';
import { DocumentHistoryGridServiceClient, HistoryGridData } from '../web-api-client';

@Component({
  selector: 'app-document-history',
  templateUrl: './documentHistoryGrid.component.html'
})

export class DocumentHistoryGridComponent implements OnInit {

  public gridDetails: HistoryGridData[];

  constructor(private client: DocumentHistoryGridServiceClient) {
  
  client.getDocumentHistoryGridDetails().subscribe(result => {
        this.gridDetails = result;
      }, error => console.error(error));
   }

   ngOnInit() { }

}
