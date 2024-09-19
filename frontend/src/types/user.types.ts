

export interface IUser {
  _id?: string;
  full_name: string;
  user_name: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  qualification: string;
  password: string;
  verified: boolean;
  role: string;
  token?: string
}
export interface InitialStateInterface {
  userData: IUser,
  loading: boolean,
  message: string,
  status: boolean,
  token?: string
}
export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}
export interface IProject {
  _id: number;
  project_name: string;
  project_desc: string;
  tags: string[];
}