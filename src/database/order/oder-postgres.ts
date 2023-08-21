import { OrderGateway } from "../../gateway/order.gateway";
import { clientPG } from "../../utils/database";

type OrderInMemoryProps = {
  id: string;
  document: string;
  total: number;
  createdAt: Date;
  facilityId: string;
};

export class OrderPostgres implements OrderGateway {
  async save({
    id,
    document,
    total,
    createdAt,
    facilityId,
  }: OrderInMemoryProps) {
    await clientPG.query(
      "INSERT INTO ORDERS(ID, TOTAL, CREATED_AT, DOCUMENT, facility_id) VALUES ($1, $2, $3, $4, $5)",
      [id, total, createdAt, document, facilityId]
    );
  }
}
