
import { Router } from "express";
import projectController from "../controllers/project.controller";

const router = Router()
router.post('/add-project', projectController.addNewProject)
router.get('/get-project', projectController.getAllProject)
router.delete('/delete-project/:id', projectController.deleteProject)
router.put('/update-project/:id', projectController.updateProject)

export default router