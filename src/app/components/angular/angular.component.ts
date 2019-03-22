import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  public inputValue: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.inputValue = params['transferedParam'];
    });
  }

  public goToAngularJs() {
    this.router.navigate(['/angularjs'], { queryParams: { transferesParam: this.inputValue }});
  }

}
