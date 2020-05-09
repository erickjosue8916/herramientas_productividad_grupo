import {CarModel, ICar} from "../../../models/mongoDB/index";

async function getCars(req:any, res:any) {
    try {
        const cars = await CarModel.find()
        return res.status(200).json({cars})
    } catch (e) {
        return res.status(500).json({ error: "server error" })    
    }
    
}

async function findCarById(req:any, res:any, next:any) {
    const { id } = req.params
    try {
        const car = await CarModel.findById(id)
        if (!car) return res.status(404).json({ error: "car not found" })    
        req.car = car
        return next()
    } catch (e) {
        return res.status(404).json({ error: "car not found" })    
    }
    
}


async function getCar(req:any, res:any) {
    
    return res.status(200).json(req.car)
    
}

async function createCar(req:any, res:any) {
    
    const Car:ICar = req.body
    
    if (!Car.name) return res.status(403).json({error: "car name not found"})
    if (!Car.category) return res.status(403).json({error: "car lastName not found"})
    if (!Car.age) return res.status(403).json({error: "car age not found"})
    if (!Car.price) return res.status(403).json({error: "car lastName not found"})
    if (!Car.transmition) return res.status(403).json({error: "car age not found"})
    
    

    try {
        const createdCar = new CarModel(Car);
        console.log("carro creado")
        const newCar = await createdCar.save();
        console.log("carro guardado")
        return res.status(201).json(newCar)
    } catch (e) {
        return res.status(400).json({error: "invalid Car"})
    }

}

async function updateCar(req:any, res:any) {
    let { car } = req
    const Car:ICar = req.body;
    const { name, category, age, price, transmition } = Car
    try {
        if(name) car.name = name
        if(category) car.lastName = category
        if(age) car.age = age
        if(price) car.price = price
        if(transmition) car.transmition = transmition
        car = await car.save()
        return res.status(200).json(car)
    } catch (e) {
        return res.status(400).json({error: "Bad request"})
    }

}

async function deleteCar(req:any, res:any) {
    const { car } = req;
    try {
        await car.remove()
        return res.status(200).json({success: "car is deleted"})
    } catch (e) {
        return res.status(400).json({error: "error"})
    }
}

export { getCars, getCar, createCar, updateCar, deleteCar, findCarById }