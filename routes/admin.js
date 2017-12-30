import express from 'express';
import mongoose from '../db/mongoose';
import AdminModel from '../models/adminModel';
import AdminController from '../controllers/adminController';

const adminModel = new AdminModel(mongoose);
const adminController = new AdminController(adminModel);

const router = express.Router();

router.get('/', adminController.getAllAdmin.bind(adminController));

module.exports = router;

