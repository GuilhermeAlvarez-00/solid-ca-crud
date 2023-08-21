import { CreateFacilityGateway } from "../gateway/facility.gateway";
import { CreateFacilityInputDTO } from "../presenters/facility/facility.input.dto";
import { CreateFacilityUseCase } from "../usecases/facility/create-facility";

export class CreateFacilityController {
  constructor(private gatewayCreateFacility: CreateFacilityGateway) {}

  async handle({ name, is_open }: CreateFacilityInputDTO) {
    const createFacilityUseCase = new CreateFacilityUseCase(
      this.gatewayCreateFacility
    );
    createFacilityUseCase.execute(name, is_open);
  }
}
