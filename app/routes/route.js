const express = require("express");
const { login } = require("../Controller/Login");
const { DepartmentCreate } = require("../Controller/Department");
const router = express.Router();


router.post("/login", login);
router.post("/department",DepartmentCreate);


module.exports = router;