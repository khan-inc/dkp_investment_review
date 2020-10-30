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
    this.bookData = [{
      dealName: "Celanese",
      status: "Greenlight",
      reason: "NA",
      dealSize: "37000",
      dealType: "M&A",
      commitmentDate: "04/08/2020",
      launchDate: "06/10/2020"
    },
    {
      dealName: "Amcor",
      status: "Greenlight",
      reason: "NA",
      dealSize: "96000",
      dealType: "M&A",
      commitmentDate: "05/09/2020",
      launchDate: "21/10/2020"
    },
    {
      dealName: "Dupont",
      status: "Greenlight",
      reason: "NA",
      dealSize: "45000",
      dealType: "A&C",
      commitmentDate: "14/04/2020",
      launchDate: "03/10/2020"
    },
    {
      dealName: "Graphic Packaging",
      status: "Greenlight",
      reason: "NA",
      dealSize: "56000",
      dealType: "BAC",
      commitmentDate: "15/03/2020",
      launchDate: "07/09/2020"
    },
    {
      dealName: "LyondellBasell",
      status: "Greenlight",
      reason: "NA",
      dealSize: "12000",
      dealType: "A&T",
      commitmentDate: "12/03/2020",
      launchDate: "17/10/2020"
    }, {
      dealName: "Broke dealer",
      status: "Greenlight",
      reason: "NA",
      dealSize: "87000",
      dealType: "G&A",
      commitmentDate: "13/05/2020",
      launchDate: "07/09/2020"
    }, {
      dealName: "Graphic packaging",
      status: "Greenlight",
      reason: "NA",
      dealSize: "23000",
      dealType: "T&A",
      commitmentDate: "18/05/2020",
      launchDate: "14/09/2020"
      },
      {
        dealName: "Graphic packaging",
        status: "Greenlight",
        reason: "NA",
        dealSize: "65000",
        dealType: "P&O",
        commitmentDate: "18/08/2020",
        launchDate: "19/10/2020"
      }
      , {
        dealName: "Broke dealer",
        status: "Greenlight",
        reason: "NA",
        dealSize: "90000",
        dealType: "M&A",
        commitmentDate: "19/08/2020",
        launchDate: "20/10/2020"
      }, {
        dealName: "LyondellBasell",
        status: "Greenlight",
        reason: "NA",
        dealSize: "76000",
        dealType: "C&A",
        commitmentDate: "10/08/2020",
        launchDate: "15/10/2020"
      }]
  }

  onClickBenchMarkAnalysis() {
    this.router.navigate(['/benchmark'],
      { queryParams: { id: 1} });
  }
}
