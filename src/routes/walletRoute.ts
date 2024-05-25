import { AuthRequest } from './../middleware/protectRoute';
import { Router } from "express";
import { OnRampTransactionsUpdated, bankWebhook, checkout, getBalance, getOnRampTransactions} from "../controllers/walletController";
import { verifyUser } from "../middleware/protectRoute";




  const router = Router();

//   // router.route('/').post(createWallet)
   router.route('/get-balance').get(verifyUser,getBalance)
   router.route('/').post(verifyUser,OnRampTransactionsUpdated)
   router.route('/get-transactions').get(verifyUser,getOnRampTransactions)
   router.route('/webhook').post(bankWebhook)

router.route('/checkout-page').post(verifyUser,checkout)

 

 export default router;

