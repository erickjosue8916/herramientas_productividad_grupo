import {Verb, Controller } from "../../../POO/express";
import { getUser,  getUsers, createUser, updateUser, deleteUser, findUserById } from "./user.controller";
const UserController = new Controller("/users") 
UserController.addVerb(Verb.get, "/", getUsers )
UserController.addVerb(Verb.get, "/:id", findUserById, getUser )
UserController.addVerb(Verb.post, "/", createUser )
UserController.addVerb(Verb.put, "/:id", findUserById, updateUser )
UserController.addVerb(Verb.delete, "/:id", findUserById, deleteUser )

export { UserController }