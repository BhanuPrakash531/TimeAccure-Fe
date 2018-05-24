
export class User {
    constructor(
        public id: number,
        public userID: number,
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
        public emailAddress: string,
        public dateOfBirth: Date,
        public dateOfJoining: Date,
        public dateOfEnding?: Date,
        //public employee_type: string
    ) { }

}