import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DocumentTemplateClient,PptLinkTemplateDTO } from '../web-api-client';
@Component({
  selector: 'app-create-ppt',
  templateUrl: './create-ppt.component.html',
  styles: [
  ]
})
export class CreatePPTComponent implements OnInit {
  public _router;
  public lstOfPPTtemplates: PptLinkTemplateDTO[];

  constructor(private client: DocumentTemplateClient, private router:Router) {
    this._router = router;

    client.getPPTTemplate().subscribe(result=>{
      this.lstOfPPTtemplates = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  CreatePPTClick(id:number,e: Event){
    e.preventDefault();
    this._router.navigateByUrl(`/apptemplate?id=${id}`);
  }
}
