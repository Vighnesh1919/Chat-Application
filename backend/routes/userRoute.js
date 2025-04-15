import express from 'express';
import { register,login,logout ,getOtherUsers} from '../controllers/userController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticated,getOtherUsers);// asoon as rote is called first goes to is Authenticated funtion then to getOthers

export default router;