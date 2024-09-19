import { IProject } from '../interfaces/user.interface'
import projectModel from '../models/project.model';

class ProjectService {
  async getAllProject() {
    return await projectModel.find();
  }
  async deleteProject(id:string) {
    return await projectModel.deleteOne({_id:id});
  }


  async addProject(ProjectModelData: IProject) {
    const newProject = new projectModel<IProject>(ProjectModelData);
    return await newProject.save();
  }

async updateProject(id: string, ProjectModelData: Partial<IProject>) {
  return await projectModel.findByIdAndUpdate(id, ProjectModelData, { new: true });
}


}
export default ProjectService