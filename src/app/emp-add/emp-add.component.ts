import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent implements OnInit{

  empForm: FormGroup;

  position: string[] =[
    'Administrator',
    'Manager',
  ];

  constructor(private _fb:FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<EmpAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any 
    ){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email:'',
      dob:'',
      contact:'',
      positionOf:'',
      gender:''
    });
  }

ngOnInit(): void {
  this.empForm.patchValue(this.data);
}

  onFormSubmit(){
    if(this.empForm.valid){
      // console.log(this.empForm.value);
      if(this.data){
        this._empService.updtaeEmplyee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Data is updated successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else{
        this._empService.addEmplyee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Data is added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
