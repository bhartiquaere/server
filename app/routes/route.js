const express = require("express");
const { login } = require("../Controller/Login");
const { DepartmentCreate, DepartmentUpdate, DepartmentGet, DepartmentDelete } = require("../Controller/Department");
const { CreateDesignation, GetDesignation, UpdateDesignation, DeleteDesignation } = require("../Controller/Designation");
const router = express.Router();


router.post("/login", login);
router.post("/add-department",DepartmentCreate);
router.post("/get-department",DepartmentGet);
router.post("/update-department",DepartmentUpdate);
router.post("/delete-department",DepartmentDelete);

//Designation Api
router.post("/add-designation",CreateDesignation);
router.post("/get-designation",GetDesignation);
router.post("/update-designation",UpdateDesignation);
router.post("/delete-designation",DeleteDesignation);


module.exports = router;