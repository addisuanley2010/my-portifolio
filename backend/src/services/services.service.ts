import serviceModel from "../models/service.model";


class Service {
  async getAllService() {
    return await serviceModel.find();
  }
  async deleteService(id:string) {
    return await serviceModel.deleteOne({_id:id});
  }


  async addService(ServiceModelData: any) {
    const newService = new serviceModel<any>(ServiceModelData);
    return await newService.save();
  }

async updateService(id: string, ServiceModelData: Partial<any>) {
  return await serviceModel.findByIdAndUpdate(id, ServiceModelData, { new: true });
}


}
export default Service 




