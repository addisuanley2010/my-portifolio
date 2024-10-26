
import { Request, Response } from "express";
import Service from "../services/services.service";
import { respond } from "../utils/error.respond.utils";


interface AuthenticatedRequest extends Request {
        user?: any;
}

class ServiceController {

private service
  constructor() {
    this.service = new Service()
  }

  addNewService = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body
      const newService = await this.service.addService(data);
      respond(res, 201, true, 'Service created successfully!', newService);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    } 
  }  
   

  updateService = async (req: Request, res: Response): Promise<void> => {
    const {id}=req.params
    try {
      const data = req.body
      const updatedService = await this.service.updateService(id,data);
      respond(res, 201, true, 'Service updated successfully!', updatedService);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    } 
  }
  getAllService = async (req: Request, res: Response): Promise<void> => {
    try {
      const Services = await this.service.getAllService();
      respond(res, 200, true, 'Services fetched successfully!', Services);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }
  deleteService = async (req: Request, res: Response): Promise<void> => {
    const {id} =req.params
    try {
      const Services = await this.service.deleteService(id);
      respond(res, 200, true, 'Services deleted successfully!', Services);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }

}


export default new ServiceController();
