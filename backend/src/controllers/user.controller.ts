
import { Request, Response } from "express";
import UserService from "../services/user.service";
import { encryptPassword, comparePassword } from "../utils/passwordUtils.utils";
import { generateToken } from "../utils/generate.token.util";

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
      res.status(201).json({ success: true, message: "User created successfully!", newUser });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
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
          res.status(200).json({ success: true, message: "User signed in successfully!",user, token });
        } else {
          res.status(401).json({ success: false, message: "Invalid password!" });
        }
      } else {
        res.status(401).json({ success: false, message: "Invalid email!" });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }




}


export default new UserController();
