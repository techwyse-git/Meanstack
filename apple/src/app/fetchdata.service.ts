import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private _httpClient:HttpClient) { }

  getEmployeeDetail():Observable<any>{
    return this._httpClient.get<any>('http://dummy.restapiexample.com/api/v1/employees')
  }

  saveemployeeDetail(data:Object):Observable<any>{
    return this._httpClient.post<any>('http://dummy.restapiexample.com/api/v1/create',data)
  }
}
