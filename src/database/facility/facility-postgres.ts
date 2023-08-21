import { FacilityGateway } from "../../gateway/facility.gateway";
import { FacilityOutputDTO } from "../../presenters/facility/facility.output.dto";
import { clientPG } from "../../utils/database";

export class FacilityPostgres implements FacilityGateway {
  async findById(id: string): Promise<FacilityOutputDTO> {
    try {
      const query = await clientPG.query(
        "SELECT * FROM FACILITY WHERE id = $1;",
        [id]
      );
      return query.rows[0] as FacilityOutputDTO;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}
