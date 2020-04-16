import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerDetails } from './serverdetails';

@Injectable({
  providedIn: 'root'
})
export class AzureSerchService {
  constructor(private http: HttpClient) {
  }

  searchData(query: string, pageSize: number): Observable<any> {
    console.log(`In searchData method ${query}`);
    let result: Observable<any> = null;
    const options = {
      headers: new HttpHeaders({
        'api-key': ServerDetails.searchServiceAdminApiKey,
        'Content-Type': 'application/json'
      })
    };
    result = this.http.post<any>(ServerDetails.searchUri, JSON.stringify({
      search: query,
      top: pageSize,
    }), options);
    return result;
  }

  // search=EmployeeName:Michael Suyama AND ShipperName:Speedy Express
  searchSuppliersLuceneData(query: string): Observable<any> {
    console.log(`In searchData method ${query}`);
    let result: Observable<any> = null;
    const options = {
      headers: new HttpHeaders({
        'api-key': ServerDetails.searchServiceAdminApiKey,
        'Content-Type': 'application/json'
      })
    };
    result = this.http.post<any>(ServerDetails.searchUriLucene, JSON.stringify({
      search: query
    }), options);
    return result;
  }
}
