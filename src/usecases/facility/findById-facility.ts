import { FacilityGateway } from "../../gateway/facility.gateway";

export class FindByIdFacilityUseCase {
  constructor(private gatewayFacility: FacilityGateway) {}

  async execute(id: string) {
    if (!id) {
      throw new Error("id is required");
    }

    return await this.gatewayFacility.findById(id);
  }
}
