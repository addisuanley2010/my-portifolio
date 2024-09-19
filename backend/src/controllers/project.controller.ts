
import { Request, Response } from "express";
import ProjectService from "../services/project.service";
import { respond } from "../utils/error.respond.utils";



class ProjectController {

private service
  constructor() {
    this.service = new ProjectService()
  }

  addNewProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body
      const newProject = await this.service.addProject(data);
      respond(res, 201, true, 'Project created successfully!', newProject);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    } 
  }

  updateProject = async (req: Request, res: Response): Promise<void> => {
    const {id}=req.params
    try {
      const data = req.body
      const updatedProject = await this.service.updateProject(id,data);
      respond(res, 201, true, 'Project updated successfully!', updatedProject);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    } 
  }
  getAllProject = async (req: Request, res: Response): Promise<void> => {
    try {
      const Projects = await this.service.getAllProject();
      respond(res, 200, true, 'Projects fetched successfully!', Projects);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }
  deleteProject = async (req: Request, res: Response): Promise<void> => {
    const {id} =req.params
    try {
      const Projects = await this.service.deleteProject(id);
      respond(res, 200, true, 'Projects deleted successfully!', Projects);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }

}


export default new ProjectController();
