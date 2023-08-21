import { randomUUID } from "crypto";

export class Facility {
  id: string;
  name: string;
  is_open: boolean;

  private constructor(name: string, is_open: boolean) {
    this.id = randomUUID();
    this.name = name;
    this.is_open = is_open;
  }

  static create(name: string, is_open: boolean) {
    if (!name) {
      throw new Error("name is required");
    }

    if (!is_open) {
      throw new Error("is_open is required");
    }

    const facility = new Facility(name, is_open);
    return facility;
  }
}
