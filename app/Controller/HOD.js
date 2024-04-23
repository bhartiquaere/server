const Helper = require("../Helper/Helper");
const HOD = require("../Models/HeadOfDepartment");


exports.CreateHod = async (req, res) => {
    try {
        const data = {
            department_id: req.body.department_id,
            designation_id: req.body.designation_id,
            hod_name: req.body.hod_name,
            status: req.body.status
        }
        const create = await HOD.create(data);
        if (create) {
            console.log("Hod Created Successfully !");
            Helper.response("Success", "HOD added Successfully !", {}, res, 200)
        } else {
            console.log("Failed to create Hod .")

        }
    } catch (error) {
        console.log("Failed !")
        Helper.response("Failed", "Something went Wrong !", error, res, 200)
    }
};

exports.UpdateHod = async (req, res) => {
    try {
        const update = await HOD.update(
            {
                designation_id: req.body.designation_id,
                department_id: req.body.department_id,
                status: req.body.status
            }, {
            where: {
                id: req.body.id,
            }
        }
        )
        if (update) {
            console.log("Hod Updated Successfully")
            Helper.response("Success", "Hod Update Successfully !", {}, res, 200)
        }
    } catch (error) {
        Helper.response("Failed", "Something went Wrong !", error, res, 200)
    }
};

exports.GetHod = async (req, res) => {
    try {
        const get = await HOD.findAll();
        const list = [];
        get.map((record) => {
            const data = {
                department_id: record.department_id,
                designation_id: record.designation_id,
                status: record.status
            }
            list.push(data)
        });
        Helper.response("Success", "Record Found Successfully", list, res, 200);
    } catch (error) {
        console.log("Failed !");
        Helper.response("Failed", "Something went Wrong !", error, res, 200)
    }
};


exports.DeleteHod = async (req, res) => {
    try {
        if (req.body.id > 0) {
            const data = await HOD.destroy(
                {
                    where: {
                        id: req.body.id,
                    }
                }
            );
            if (data) {
                Helper.response("Success", "Record Deleted Successfully", {}, res, 200)
            }
        }
    } catch (error) {
        console.log("Failed !");
        Helper.response("Failed", "something went wrong !", error, res, 200)
    }
}