import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EmployeeType } from '../employee-type/EmployeeType';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-employee-type-update',
  templateUrl: './employee-type-update.component.html',
  styleUrls: ['./employee-type-update.component.css']
})
export class EmployeeTypeUpdateComponent implements OnInit {

  @Input() employeeType: EmployeeType;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  submitted = false;

  ngOnInit() {
    this.getEmployeeType();
  }

  getEmployeeType():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getEmployeeType(id).subscribe(employeeType => this.employeeType = employeeType);
  }
  save(): void {
    this.userService.updateEmployeeType(this.employeeType)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(){
    console.log("before going to service");
    console.log(JSON.stringify(this.employeeType));
    //this.userService.updateEmployeeType(this.employeeType).subscribe(employeeType => this.employeeType = employeeType);
    this.save();
    console.log("after going to service");
    console.log(this.employeeType);
    this.submitted = true;
  }
  
  deleteEmployeeType(employeeType: EmployeeType): void {
    //this.employeeType = this.employeeType.filter(h => h !== employeeType);
    this.userService.deleteEmployeeType(employeeType).subscribe();
    this.location.back();
  }


}
