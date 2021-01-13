import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    public _router;

    constructor(private router:Router){
        this._router = router;
    }

    CreatePPTClick(){
        this._router.navigateByUrl("/document-template");
    }
}