import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <table class="table table-bordered table-striped">
       <tr>
          <td>
            <a [routerLink]="['']">English Search</a>
          </td>
          <td>
          <a [routerLink]="['lucene']">Lucene Search</a>
        </td>
       </tr>
    </table>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
