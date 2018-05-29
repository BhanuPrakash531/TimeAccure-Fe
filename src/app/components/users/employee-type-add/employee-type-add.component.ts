import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { EmployeeType } from '../employee-type/EmployeeType';

import { Location } from '@angular/common';
import { Company } from '../../company/company/company';
import { Address } from '../../company/company/address';

@Component({
  selector: 'app-employee-type-add',
  templateUrl: './employee-type-add.component.html',
  styleUrls: ['./employee-type-add.component.css']
})
export class EmployeeTypeAddComponent implements OnInit {

  constructor(private userService: UserService,
    private location: Location) { }

  ngOnInit() {
  }

  company : Company = new Company(1,'',[]);
  model : EmployeeType = new EmployeeType(1,'Developer','Developer',this.company);
 
  submitted = false;

  onSubmit(){
    console.log("before going to service");
    console.log(JSON.stringify(this.model));
    this.userService.addEmployeeType(this.model).subscribe(model => this.model = model);
    console.log("after going to service");
    console.log(this.model);
    this.submitted = true;
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
