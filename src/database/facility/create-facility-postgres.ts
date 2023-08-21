import { CreateFacilityGateway } from "../../gateway/facility.gateway";
import { CreateFacilityInputDTO } from "../../presenters/facility/facility.input.dto";
import { clientPG } from "../../utils/database";

export class CreateFacilityPostgres implements CreateFacilityGateway {
  async save({ id, name, is_open }: CreateFacilityInputDTO): Promise<void> {
    await clientPG.query(
      "INSERT INTO FACILITY(ID, NAME, IS_OPEN) VALUES($1, $2, $3)",
      [id, name, is_open]
    );
  }
}
