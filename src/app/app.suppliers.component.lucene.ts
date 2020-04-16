import { Component, OnInit } from '@angular/core';
import { AzureSerchService } from './azuresearchservice';
import { SuppliersData } from './suppliersdata';


@Component({
  selector: 'app-suppliers-search-lucene-component',
  templateUrl: './app.suppliers.component.lucene.view.html'
})
export class AppSuppliersSearchLuceneComponent implements OnInit {
  query: string;
  suppliers: Array<SuppliersData>;
  headers: Array<string>;
  private supplier: SuppliersData;
  recordCount: number;


  constructor(private serv: AzureSerchService) {
    this.query = '';
    this.suppliers = new Array<SuppliersData>();
    this.headers = new Array<string>();
    this.recordCount = 0;
    this.supplier = new SuppliersData('', '', '', '', '', '', '', '', '');
  }



  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for (const p in this.supplier) {
      this.headers.push(p);
    }
    this.onChangeQuery();

  }

  onChangeQuery(): void {
    this.serv.searchSuppliersLuceneData(this.query).subscribe(resp => {
      const response: any = resp.value;
      this.getSuppliers(response);
    });
  }

  private getSuppliers(data: []): void {
    this.suppliers = new Array<SuppliersData>();
    for (const sup of data) {
      this.suppliers.push(sup);
    }
    this.recordCount = this.suppliers.length;
  }
}
