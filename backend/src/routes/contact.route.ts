
import { Router } from "express";
import  ContactController  from "../controllers/contact.controller";

const router =Router()
router.post('/add-message',ContactController.addMessage)
router.get('/get-messages',ContactController.getMessages)
// router.delete('/delete-skill/:id',SkillController.deleteSkill)
// router.put('/update-skill/:id',SkillController.updateSkill)

export default router


