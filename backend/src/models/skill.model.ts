import { model, Schema } from 'mongoose';
import {  ISkill } from '../interfaces/user.interface';



const SkillSchema: Schema = new Schema({
        skill_name: {
                type: String,
                required: [true, 'Skill name is required'],
                trim: true
        },
        
       skill_percent:{
        type:Number,
        default:50
       }
}, { timestamps: true });
const skillModel = model<ISkill>('Skill', SkillSchema);

export default skillModel 