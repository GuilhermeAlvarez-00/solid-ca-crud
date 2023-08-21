import { CreateFacilityPostgres } from "../database/facility/create-facility-postgres";
import { FacilityPostgres } from "../database/facility/facility-postgres";
import { OrderPostgres } from "../database/order/oder-postgres";
import { CreateFacilityController } from "./create-facility-controller";
import { CreateOrderController } from "./create-order.controller";
import { FindByIdFacilityController } from "./findById-facility.controller";

const facilityGateway = new FacilityPostgres();
const oderGatewayPostgres = new OrderPostgres();

const createOrderFactory = new CreateOrderController(
  oderGatewayPostgres,
  facilityGateway
);
const findByIdFacilityFactory = new FindByIdFacilityController(facilityGateway);

const createFacilityGateway = new CreateFacilityPostgres();
const createFacilityFactory = new CreateFacilityController(
  createFacilityGateway
);

export { createOrderFactory, findByIdFacilityFactory, createFacilityFactory };
