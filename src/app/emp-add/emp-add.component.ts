import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb:FormBuilder){
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
      console.log(this.empForm.value);
    }
  }
}
