import express from 'express';
import connectDatabase from './config/database.config';
import dotenv from 'dotenv';
import userRoute from './routes/user.route'
import skillRoute from './routes/skill.route'
import projectRoute from './routes/project.route'
import serviceRoute from './routes/service.route'

import contactRoute from './routes/contact.route'

import cors from 'cors'

const app = express();
dotenv.config();
const port = process.env.PORT!;



app.use(cors());
app.use(express.json());


app.use("/", userRoute);
app.use("/", skillRoute);
app.use("/", projectRoute);
app.use("/", serviceRoute);
app.use("/", contactRoute);





const startServer = async () => {
  try { 
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

