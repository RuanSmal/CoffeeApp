import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AccessProviders{

server: string = 'http://localhost/CoffeeStockApp/src/api/';

constructor(public http: HttpClient){}

postData(body, file){
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    let options = {headers: headers};
    return this.http.post(this.server + file, JSON.stringify(body),options).map(res => res);
}
}