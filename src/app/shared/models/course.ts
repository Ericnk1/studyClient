export class Course {
  private id: number;
  private name: string;
  private durationHours: number;
  private isActive: boolean;

  constructor(id: number, name: string, durationHours: number, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.durationHours = durationHours;
    this.isActive = isActive;
  }
}
