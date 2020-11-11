export class School {
  id: number;
  name: string;
  city: string;
  phone: string;
  isActive: boolean;


  constructor(id: number, name: string, city: string, phone: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.phone = phone;
    this.isActive = isActive;
  }
}
