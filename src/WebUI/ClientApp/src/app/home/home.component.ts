import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public bookData: any = [];

  constructor(private router: Router) {
  };

  ngOnInit() {
    this.bookData = [
      { dealName: "Celanese",status: "Pending",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "Amcor",status: "Approved",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "Dupont",status: "Pending",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "Graphic Packaging",status: "Approved",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "LyondellBasell",status: "Approved",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" }, 
      { dealName: "Broke dealer",status: "Pending",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" }, 
      { dealName: "Graphic packaging",status: "Approved",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" }
    ]
  }

  onClickBenchMarkAnalysis() {
    this.router.navigate(['/benchmark'],
      { queryParams: { id: 1 } });
  }
}
