import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit {

  array = [ 1, 2, 3, 4 ];

  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
  }

}
