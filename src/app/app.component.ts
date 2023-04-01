import { Component, OnInit , } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmployeeService } from './services/employee.service';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'contact', 'positionOf', 'gender'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  //constructor created to open the form
  constructor(public _dialog: MatDialog, private _empService: EmployeeService) {}
  
  //calling getEmployeeData method here 
  ngOnInit(): void {
    this.getEmplyeeData();
  }

  openForm(){
    this._dialog.open(EmpAddComponent);
  }

  getEmplyeeData(){
    this._empService.getEmplyeeData().subscribe({
      next: (res) => { 
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
