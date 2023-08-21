import { FacilityGateway } from "../gateway/facility.gateway";
import { FindByIdFacilityUseCase } from "../usecases/facility/findById-facility";

export class FindByIdFacilityController {
  constructor(private gatewayFacility: FacilityGateway) {}

  async handle(request: string) {
    const findByIdFacilityUseCase = new FindByIdFacilityUseCase(
      this.gatewayFacility
    );
    return await findByIdFacilityUseCase.execute(request);
  }
}
