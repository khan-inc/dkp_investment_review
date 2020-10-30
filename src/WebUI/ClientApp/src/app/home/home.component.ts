import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public bookData: any = [];
  //private router = ActivatedRoute;

  constructor(private router: Router) {
  };

  ngOnInit() {
    this.bookData = [
      { dealName: "Celanese",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "Amcor",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "Dupont",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "Graphic Packaging",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" },
      { dealName: "LyondellBasell",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" }, 
      { dealName: "Broke dealer",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" }, 
      { dealName: "Graphic packaging",status: "Greenlight",reason: "NA",dealSize: "35000",dealType: "M&A",commitmentDate: "04/08/2020",launchDate: "06/10/2020" }
    ]
  }

  onClickBenchMarkAnalysis() {
    this.router.navigate(['/benchmark'],
      { queryParams: { id: 1 } });
  }
}
