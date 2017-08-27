export class User {
   userName: string;
   password: string;
   firstName: string;
   lastName: string;
   address: Address; 
   constructor() { 
   }
}

export class Address{
	flatNo: string;
	city: string;
	state: string;
	country: string;
	pinCode: string;
	lane: string;
	constructor() { 
   }
}

  