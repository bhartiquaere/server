const express = require("express");
const { login } = require("../Controller/Login");
const { DepartmentCreate, DepartmentUpdate, DepartmentGet, DepartmentDelete } = require("../Controller/Department");
const { CreateDesignation, GetDesignation, UpdateDesignation, DeleteDesignation } = require("../Controller/Designation");
const { TowerCreate, GetTowerList, UpdatedTower, DeleteTower } = require("../Controller/Tower");
const { CreateHod, UpdateHod, GetHod, DeleteHod } = require("../Controller/HOD");
const { CreateRoom } = require("../Controller/Room");
const router = express.Router();


router.post("/login", login);
router.post("/add-department", DepartmentCreate);
router.post("/get-department", DepartmentGet);
router.post("/update-department", DepartmentUpdate);
router.post("/delete-department", DepartmentDelete);

//Designation Api
router.post("/add-designation", CreateDesignation);
router.post("/get-designation", GetDesignation);
router.post("/update-designation", UpdateDesignation);
router.post("/delete-designation", DeleteDesignation);

//Hod API's
router.post("/add-hod", CreateHod);
router.post("/get-hod", GetHod);
router.post("/update-hod", UpdateHod);
router.post("/delete-hod", DeleteHod)


//Tower API's
router.post("/add-tower", TowerCreate);
router.post("/get-tower",GetTowerList);
router.post("/update-tower",UpdatedTower)
router.post("/delete-tower",DeleteTower)

//Room API's
router.post("/add-room",CreateRoom);


module.exports = router;