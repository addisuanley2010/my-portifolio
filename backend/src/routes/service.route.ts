
import { Router } from "express";
import  ServiceController  from "../controllers/service.controller";

const router =Router()
router.post('/add-service',ServiceController.addNewService)
router.get('/get-service',ServiceController.getAllService)
router.delete('/delete-service/:id',ServiceController.deleteService)
router.put('/update-service/:id',ServiceController.updateService)

export default router