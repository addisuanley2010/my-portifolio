import ContactService from "../services/contact.service";
import { respond } from "../utils/error.respond.utils";
import { Request, Response } from "express";





class ConactController {
        private service;
        constructor() {
                this.service = new ContactService()
        }


        addMessage = async (req: Request, res: Response) => {
                try {
                        const data = req.body;
                        const newMessage = await this.service.addMessage(data)
                        respond(res, 201, true, 'message sent successfully!', newMessage)

                } catch (error: any) {
                        respond(res, 500, false, error.message);

                }
        }
        getMessages = async (req: Request, res: Response) => {
                try {
                        const messages = await this.service.getMessages();
                        respond(res, 200, true, 'Skills fetched successfully!', messages);

                } catch (error: any) {
                        respond(res, 500, false, error.message);


                }
        }


}
export default new ConactController()