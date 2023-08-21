import { CreateFacilityInputDTO } from "../presenters/facility/facility.input.dto";
import { FacilityOutputDTO } from "../presenters/facility/facility.output.dto";

export interface FacilityGateway {
  findById(id: string): Promise<FacilityOutputDTO>;
}

export interface CreateFacilityGateway {
  save(data: CreateFacilityInputDTO): Promise<void>;
}
