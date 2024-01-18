import express from 'express';
import { addNewCake, deleterCake, getAllCakes, getCakeById, updateCake } from '../controllers/cakes.controllers.js';
//@restController('/api/v1/cake')
const router = express.Router();
//@getController()
//@public
router.get('/all', getAllCakes);
//@postController ()
//@public
router.post('/new', addNewCake);
//@getControlle()
//@putController()
//@deleteController()
router.route("/:id").get(getCakeById).put(updateCake).delete(deleterCake);
export default router;