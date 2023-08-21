import { randomUUID } from "crypto";

export class Order {
  id: string;
  document: string;
  total: number;
  createdAt: Date;
  facilityId: string;

  private constructor(document: string, total: number, facilityId: string) {
    this.id = randomUUID();
    this.document = document;
    this.total = total;
    this.createdAt = new Date();
    this.facilityId = facilityId;
  }

  static create(document: string, total: number, facilityId: string) {
    if (!document) {
      throw new Error("Document is required");
    }

    if (!total || total <= 0) {
      throw new Error("Total is required");
    }

    if (!facilityId) {
      throw new Error("Facility is required");
    }

    const order = new Order(document, total, facilityId);
    return order;
  }
}
