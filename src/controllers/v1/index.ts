import { CarController } from "./cars/car";
import { Controller } from "../../POO/express";
const v1 = new Controller("/v1")
v1.addController(CarController)

export default v1