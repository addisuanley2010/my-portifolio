import { IContact } from "../interfaces/user.interface";
import contactModel from "../models/contact.model"

class ContactService {

        async getMessages() {
                return await contactModel.find();
        }
        async deleteMessage(id: String) {
                return await contactModel.deleteOne({ _id: id });
        }
        async addMessage(messageData: IContact) {
                const newMessage = new contactModel<IContact>(messageData)
                return await newMessage.save()
        }
        async updateMessage(id: String, updateData: Partial<IContact>) {
                return await contactModel.findByIdAndUpdate(id, updateData, { new: true });
        }

}

export default ContactService