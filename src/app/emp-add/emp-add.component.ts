import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent {
  position: string[] =[
    'Administrator',
    'Manager',
  ]
}
