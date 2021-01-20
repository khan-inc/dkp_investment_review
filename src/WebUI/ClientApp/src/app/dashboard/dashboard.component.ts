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

    createPPTClick(){
        this._router.navigateByUrl(`/apptemplate?id=1`);
    }
}