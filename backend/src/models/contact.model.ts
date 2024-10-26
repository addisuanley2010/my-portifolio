import { model, Schema } from 'mongoose';


const contactSchema: Schema = new Schema({
        name: {
                type: String,
                required: [true, 'name is required'],

        },
         email: {
                type: String,
                required: [true, 'Email is required'],
                trim: true,
                lowercase: true,
                validate: {
                        validator: (value: string) => /^\S+@\S+\.\S+$/.test(value),
                        message: 'Invalid email format'
                }
        },
        phone: {
                type: Number,
                required: [true, 'phone is required'],
        },
        message: {
                type: String,
                required: [true, 'message is required'],
        }

}, {
        timestamps: true
})



const contactModel = model('Contact', contactSchema)
export default contactModel