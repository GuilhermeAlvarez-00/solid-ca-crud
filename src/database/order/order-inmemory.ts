import { OrderGateway } from "../../gateway/order.gateway";
import { CreateOrderGatewayDTO } from "../../presenters/order/create-order-gateway.dto";

type OrderInMemoryProps = {
  id: string;
  document: string;
  total: number;
  createdAt: Date;
  facilityId: string;
};

export class OrderInMemory implements OrderGateway {
  orders: OrderInMemoryProps[] = [];

  async save(data: CreateOrderGatewayDTO): Promise<void> {
    this.orders.push(data);
  }
}
