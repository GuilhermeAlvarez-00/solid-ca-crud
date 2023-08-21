import { FacilityGateway } from "../../gateway/facility.gateway";
import { OrderGateway } from "../../gateway/order.gateway";
import { CreateOrderInputDTO } from "../../presenters/order/create-order.input.dto";
import { Order } from "./order.entity";

export class CreateOrderUseCase {
  constructor(
    private orderGateway: OrderGateway,
    private gatewayFacility: FacilityGateway
  ) {}

  async execute({ document, total, facilityId }: CreateOrderInputDTO) {
    const facilityIdExists = await this.gatewayFacility.findById(facilityId);

    if (!facilityIdExists) {
      throw new Error("Facility id not found");
    }

    const orderCreate = Order.create(document, total, facilityId);

    await this.orderGateway.save(orderCreate);
  }
}
