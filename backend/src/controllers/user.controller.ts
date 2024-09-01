
import { Request, Response } from "express";
import UserService from "../services/user.service";
import { encryptPassword, comparePassword } from "../utils/passwordUtils.utils";
import { generateToken } from "../utils/generate.token.util";
import { respond } from "../utils/error.respond.utils";

class UserController {
  private service: UserService
  constructor() {
    this.service = new UserService()
  }

  signUp = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
      const password = data.password;
      data.password = await encryptPassword(password);
      const newUser = await this.service.signUp(data);
      respond(res, 201, true, 'User created successfully!', newUser);

    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }


  signIn = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const user = await this.service.signIn(email);
      if (user) {
        const isPasswordValid = await comparePassword(password, user.password);
        if (isPasswordValid) {
          const token = generateToken(user);
          const { password, ...userWithoutPassword } = user.toObject();
          const loggedUser = {
            ...userWithoutPassword,
            token
          };
          respond(res, 200, true, 'User signed in successfully!', loggedUser);
        } else {
          respond(res, 401, false, 'Invalid password');

        }
      } else {
        respond(res, 401, false, 'Invalid Email');
      }
    } catch (error: any) {
      respond(res, 500, false, error.message);

    }
  }




}


export default new UserController();
