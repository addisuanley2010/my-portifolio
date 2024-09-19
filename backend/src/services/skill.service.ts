import { ISkill } from '../interfaces/user.interface'
import skillModel from '../models/skill.model';

class SkillService {
  async getAllSkill() {
    return await skillModel.find();
  }
  async deleteSkill(id:string) {
    return await skillModel.deleteOne({_id:id});
  }


  async addSkill(SkillModelData: ISkill) {
    const newSkill = new skillModel<ISkill>(SkillModelData);
    return await newSkill.save();
  }

async updateSkill(id: string, SkillModelData: Partial<ISkill>) {
  return await skillModel.findByIdAndUpdate(id, SkillModelData, { new: true });
}


}
export default SkillService