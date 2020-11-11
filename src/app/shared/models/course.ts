export class Course {
  id: number;
  name: string;
  durationHours: number;
  isActive: boolean;

  constructor(id: number, name: string, durationHours: number, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.durationHours = durationHours;
    this.isActive = isActive;
  }
}
