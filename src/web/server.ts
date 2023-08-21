import { EventEmitter } from "node:events";
import http from "http";
import {
  createFacilityFactory,
  createOrderFactory,
  findByIdFacilityFactory,
} from "../controllers";

http
  .createServer(async (request, response) => {
    if (request.method === "POST" && request.url === "/orders") {
      request.on("data", async (data) => {
        const body = JSON.parse(data);

        try {
          await createOrderFactory.handle(body);
          return response.end("Pedido enviado com sucesso");
        } catch (err: any) {
          response.statusCode = 400;
          return response.end(err.message);
        }
      });
    }
    if (request.method === "GET" && request.url?.startsWith("/orders")) {
      const urlSplit = request.url.split("/");

      const orderService = await findByIdFacilityFactory.handle(urlSplit[2]);
      // const orders = await orderService.findByDocument(urlSplit[2]);
      return response.end(JSON.stringify(orderService));
    }
    if (request.method === "POST" && request.url === "/facility") {
      request.on("data", async (data) => {
        const body = JSON.parse(data);

        try {
          await createFacilityFactory.handle(body);
          return response.end("Facility criada com sucesso!");
        } catch (err: any) {
          response.statusCode = 400;
          return response.end(err.message);
        }
      });
    }
  })
  .listen(3333);
