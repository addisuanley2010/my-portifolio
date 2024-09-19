
import { Router } from "express";
import  SkillController  from "../controllers/skill.controller";

const router =Router()
router.post('/add-skill',SkillController.addNewSkill)
router.get('/get-skill',SkillController.getAllSkill)
router.delete('/delete-skill/:id',SkillController.deleteSkill)
router.put('/update-skill/:id',SkillController.updateSkill)

export default router