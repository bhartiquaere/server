const Helper = require("../Helper/Helper");
const Tower = require("../Models/Tower");


exports.TowerCreate = async (req, res) => {
    try {
        const data = {
            tower_name: req.body.tower_name,
            tower_location: req.body.tower_location,
            no_of_floor: req.body.no_of_floor,
            kv: req.body.kv,
            status: req.body.status
        }
        const create = await Tower.create(data);
        if (create) {
            console.log("Tower Created Successfully");
            Helper.response("Success", "Created Data SuccessFully", {}, res, 200);
        }
    } catch (error) {
        Helper.response("Failed", "Something went Wrong", error, res, 200);
    }
};

exports.GetTowerList = async (req, res) => {
    try {
        const get = await Tower.findAll();
        const List = [];
        get.map((record) => {
            const data = {
                tower_name: record.tower_name,
                tower_location: record.tower_location,
                no_of_floor: record.no_of_floor,
                kv: record.kv,
                status: record.status
            }
            List.push(data);
        });
        Helper.response("Success", "Record Found Successfully", List, res, 200);
    } catch (error) {
        console.log("Failed !")
        Helper.response("Failed", "Something went worng !", error, res, 200);
    }
};

exports.UpdatedTower = async (req, res) => {
    try {
        const update = await Tower.update(
            {
                tower_name: req.body.tower_name,
                tower_location: req.body.tower_location,
                no_of_floor: req.body.no_of_floor,
                kv: req.body.kv,
                status: req.body.status
            },
            {
                where: {
                    id: req.body.id,
                }
            }
        )
        if(update){
            console.log("Updated Successfully !")
            Helper.response("Success","Data Updated Succcessfully",{},res,200)
        }
    } catch (error) {
        console.log("Failed !")
        Helper.response("Failed","Something went Wrong !",error,res,200)
    }
};


exports.DeleteTower=async(req,res)=>{
    try {
        if(req.body.id>0){
            const detData=await Tower.destroy(
                {
                    where:{
                        id:req.body.id,
                    }
                }
            );
            if(detData){
                Helper.response("Success","Record Delete Successfully ",{},res,200)
            }
        }
    } catch (error) {
        console.log("Failed !")
        Helper.response("Failed","Something went Wrong !",error,res,200)
    }
}


