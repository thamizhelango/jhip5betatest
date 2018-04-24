export interface IEmployee {
  id?: string;
  name?: string;
  gender?: string;
  age?: number;
}

export class Employee implements IEmployee {
  constructor(public id?: string, public name?: string, public gender?: string, public age?: number) {}
}
