export type CreateOrderGatewayDTO = {
  id: string;
  facilityId: string;
  total: number;
  createdAt: Date;
  document: string;
};
