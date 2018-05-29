import { Company } from "../../company/company/company";

export class EmployeeType {
    constructor(
        public id: number,
        public employeeType: string,
        public employeeTypeDescription: string,
        public company: Company
    ) { }

}