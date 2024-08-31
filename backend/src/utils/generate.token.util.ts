import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';

export const generateToken = (user: IUser): string => {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email,
      username: user.user_name,
      isVerified: user.verified,
      role:user.role,
    },
    secret,
    { expiresIn: '1h' }
  );
};
