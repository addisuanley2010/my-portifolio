import { model, Schema } from 'mongoose';
import { IProject } from '../interfaces/user.interface';



const ProjecSchema: Schema = new Schema({
        project_name: {
                type: String,
                required: [true, 'Project name is required'],
                trim: true
        },
        project_desc: {
                type: String,
                required: true
        },
        tags: [{
                type: String
        }]



}, { timestamps: true });
const skillModel = model<IProject>('Project', ProjecSchema);

export default skillModel 