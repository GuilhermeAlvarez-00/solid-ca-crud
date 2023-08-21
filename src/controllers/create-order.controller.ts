import { FacilityGateway } from "../gateway/facility.gateway";
import { OrderGateway } from "../gateway/order.gateway";
import { CreateOrderUseCase } from "../usecases/order/create-order.usecase";

type CreateOrderControllerRequest = {
  document: string;
  facilityId: string;
  total: number;
};

export class CreateOrderController {
  constructor(
    private orderGateway: OrderGateway,
    private gatewayFacility: FacilityGateway
  ) {}

  async handle(request: CreateOrderControllerRequest) {
    const createOrderUseCase = new CreateOrderUseCase(
      this.orderGateway,
      this.gatewayFacility
    );
    await createOrderUseCase.execute(request);
  }
}
