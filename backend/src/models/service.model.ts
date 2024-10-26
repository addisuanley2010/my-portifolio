import { model, Schema } from 'mongoose';



const ServiceSchema: Schema = new Schema({
        service_name: {
                type: String,
                required: [true, 'service name is required'],
                trim: true
        },
        
       service_description:{
        type:String
       }
}, { timestamps: true });
const serviceModel = model<any>('Service', ServiceSchema);

export default serviceModel 