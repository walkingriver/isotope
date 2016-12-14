export class Address {
  constructor(
    public id: number | string = '',
    public name: string = '',
    public address1: string = '',
    public address2: string = '',
    public city: string = '',
    public state: string = '',
    public zip: string = '',
    public icon: string = '',
    public lastUsed: string = '',
    public latitude: string = '',
    public longitude: string = ''
  ) {

  }

  foo() {
    let result = `${this.address1} ${this.address2} ${this.city}, ${this.state} ${this.zip}`;
    console.log(result);
    return result;
  }
}
