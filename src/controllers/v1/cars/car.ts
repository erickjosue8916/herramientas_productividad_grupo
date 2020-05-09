import {Verb, Controller } from "../../../POO/express";
import { getCar,  getCars, createCar, updateCar, deleteCar, findCarById } from "./car.controller";
const CarController = new Controller("/cars") 
CarController.addVerb(Verb.get, "/", getCars )
CarController.addVerb(Verb.get, "/:id", findCarById, getCar )
CarController.addVerb(Verb.post, "/", createCar )
CarController.addVerb(Verb.put, "/:id", findCarById, updateCar )
CarController.addVerb(Verb.delete, "/:id", findCarById, deleteCar )

export { CarController  }