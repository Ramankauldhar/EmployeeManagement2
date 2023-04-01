import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent {

  empForm: FormGroup;

  position: string[] =[
    'Administrator',
    'Manager',
  ];

  constructor(private _fb:FormBuilder, private _empService: EmployeeService, private _dialogRef: DialogRef<EmpAddComponent>){
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

  onFormSubmit(){
    if(this.empForm.valid){
      // console.log(this.empForm.value);

      this._empService.addEmplyee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Data is added successfully');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
