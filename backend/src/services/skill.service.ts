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


}
export default SkillService