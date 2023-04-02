import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  //service created for saving form data on JSON server with POST method
  addEmplyee(data:any): Observable<any>{
    return this._http.post(' http://localhost:3000/employees', data);
  }

  //Getting data from JSON server with GET method
  getEmplyeeData(): Observable<any>{
    return this._http.get(' http://localhost:3000/employees');
  }

  deleteEmpData(id: number) : Observable<any>{
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  updtaeEmplyee(id:number, data:any): Observable<any>{
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }
}
