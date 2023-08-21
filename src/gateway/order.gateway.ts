import { CreateOrderGatewayDTO } from "../presenters/order/create-order-gateway.dto";

export interface OrderGateway {
  save(data: CreateOrderGatewayDTO): Promise<void>;
}
