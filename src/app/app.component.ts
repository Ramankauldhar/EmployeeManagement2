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
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'contact', 'positionOf', 'gender', 'actions'];
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
   const dialogRef = this._dialog.open(EmpAddComponent);
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if(val){
        this.getEmplyeeData();
      }
    }
   });
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

  deleteEmpData(id: number){
    this._empService.deleteEmpData(id).subscribe({
      next: (res) => {
        //alert('Employee Data is deleted! ');
        this.getEmplyeeData();
      },
      error: console.log,
    });
  }

  openEditForm(data: any){
    const dialogRef = this._dialog.open(EmpAddComponent,{
      data
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val){
          this.getEmplyeeData();
        }
      }
     });

   }
}
