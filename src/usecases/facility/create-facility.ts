import {
  CreateFacilityGateway,
  FacilityGateway,
} from "../../gateway/facility.gateway";
import { Facility } from "./facility.entity";

export class CreateFacilityUseCase {
  constructor(private gatewayFacility: CreateFacilityGateway) {}

  async execute(name: string, is_open: boolean) {
    const createFacility = Facility.create(name, is_open);

    await this.gatewayFacility.save(createFacility);
  }
}
