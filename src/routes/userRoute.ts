import { Router } from "express";
import { SignIn, SignUp, getUsers } from "../controllers/userController";
import { verifyUser } from "../middleware/protectRoute";

 const router = Router();

    router.route('/').get(verifyUser,getUsers)
    router.route('/signup').post(SignUp)
    router.route('/signin').post(SignIn);
//  router.route('/create').post(createUser)
 

export default router;

