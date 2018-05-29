import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { EmployeeType } from './EmployeeType';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.css']
})
export class EmployeeTypeComponent implements OnInit {
  employeeTypes: EmployeeType[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getEmployeeTypes();
  }

  getEmployeeTypes():void {
    this.userService.getEmployeeTypes().subscribe(employeeTypes => this.employeeTypes = employeeTypes);
  }


}
