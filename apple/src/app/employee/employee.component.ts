import { Component, OnInit } from '@angular/core';
import {FetchdataService} from '../fetchdata.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 public value:any
  constructor(private _fetchdataService:FetchdataService) { }

  ngOnInit() {
    this._fetchdataService.getEmployeeDetail()
    .subscribe(value=>{ this.value=value.data
      console.log(this.value)})
  }
   
  saveData(name:string,salary:string,age:string){
    console.log(name,salary,age)
    const data={"name":name,"salary":salary,"age":age}
   this._fetchdataService.saveemployeeDetail(data).subscribe(returnValue=> console.log(returnValue))
  }
}
