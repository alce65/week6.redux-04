export type TaskStructure = {
  id: number;
  title: string;
  owner: string;
  isCompleted: boolean;
};

export class Task implements TaskStructure {
  static generateId() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id!: number;
  isCompleted: boolean;
  constructor(public title: string, public owner: string) {
    // this.id = Task.generateId();
    this.isCompleted = false;
  }
}
