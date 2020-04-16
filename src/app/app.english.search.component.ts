import { Component, OnInit } from '@angular/core';
import { AzureSerchService } from './azuresearchservice';
import { Orders } from './orders';

@Component({
  selector: 'app-search-component',
  templateUrl: './app.component.view.html'
})
export class AppEnglishSearchComponent implements OnInit {
  query: string;
  orders: Array<Orders>;
  headers: Array<string>;
  private order: Orders;
  recordCount: number;
  pageSizeArray: Array<number>;
  pageSize: number;

  constructor(private serv: AzureSerchService) {
    this.query = '';
    this.orders = new Array<Orders>();
    this.headers = new Array<string>();
    this.recordCount = 0;
    // the page size array
    this.pageSizeArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    // the defaule page size
    this.pageSize = 100;

    this.order = new Orders('', '', '', '', '', '', '',  0, '', '', '', '', '','');
  }



  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for (const p in this.order) {
      this.headers.push(p);
    }
    this.onChangeQuery();

  }
  // method for search query
  onChangeQuery(): void {
    this.serv.searchData(this.query, this.pageSize).subscribe(resp => {
      const response: any = resp.value;
      this.getOrders(response);
    });
  }
  // receive the search data
  private getOrders(data: []): void {
    this.orders = new Array<Orders>();
    for (const ord of data) {
      this.orders.push(ord);
    }
    this.recordCount = this.orders.length;
  }
}
