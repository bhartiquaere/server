const express = require("express");
const { login } = require("../Controller/Login");
const { DepartmentCreate, DepartmentUpdate, DepartmentGet, DepartmentDelete } = require("../Controller/Department");
const router = express.Router();


router.post("/login", login);
router.post("/add-department",DepartmentCreate);
router.post("/get-department",DepartmentGet);
router.post("/update-department",DepartmentUpdate);
router.post("/delete-department",DepartmentDelete);

module.exports = router;