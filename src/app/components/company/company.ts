import { Address } from "./address";

export class Company {
    constructor(
        public id: number,
        public name: string,
        public addressList: Address[],
    ) { }

}