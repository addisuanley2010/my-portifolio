
import { Request, Response } from "express";
import SkillService from "../services/skill.service";
import { respond } from "../utils/error.respond.utils";


interface AuthenticatedRequest extends Request {
        user?: any;
}

class SkillController {

private service
  constructor() {
    this.service = new SkillService()
  }

  addNewSkill = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body
      const newSkill = await this.service.addSkill(data);
      respond(res, 201, true, 'Skill created successfully!', newSkill);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    } 
  }

  updateSkill = async (req: Request, res: Response): Promise<void> => {
    const {id}=req.params
    try {
      const data = req.body
      const updatedSkill = await this.service.updateSkill(id,data);
      respond(res, 201, true, 'Skill updated successfully!', updatedSkill);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    } 
  }
  getAllSkill = async (req: Request, res: Response): Promise<void> => {
    try {
      const skills = await this.service.getAllSkill();
      respond(res, 200, true, 'Skills fetched successfully!', skills);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }
  deleteSkill = async (req: Request, res: Response): Promise<void> => {
    const {id} =req.params
    try {
      const skills = await this.service.deleteSkill(id);
      respond(res, 200, true, 'Skills deleted successfully!', skills);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }

}


export default new SkillController();
