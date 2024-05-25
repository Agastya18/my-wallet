import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute'
 import walletRoute from './routes/walletRoute'
 import Razorpay from 'razorpay';
 // import bodyParser from 'body-parser';
 import cookieParser from 'cookie-parser';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use(cookieParser());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }

));
 
 
app.use('/', userRoute);
 app.use('/wallet', walletRoute);

 export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY ?? "",
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 
 
 
