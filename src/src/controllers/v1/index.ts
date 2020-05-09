import { UserController } from "./users/user";
import { Controller } from "../../POO/express";
const v1 = new Controller("/v1")
v1.addController(UserController)

export default v1