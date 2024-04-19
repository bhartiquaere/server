const Helper = require("../Helper/Helper");
const Designation=require("../Models/Designation");


exports.CreateDesignation=async(req,res)=>{
    try {
        const data={
            department:req.body.department,
            designation:req.body.designation,
            status:req.body.status
        }
        const create =await Designation.create(data);
        if(create){
            res.status(200).json({
                status: "Success",
                message: "Designation Created Successfully.",
                data:data
              });
            console.log("Designation Created Successfully.");
        }
    } catch (error) {
        Helper.response(
            "Failed",
            "Something Went Wrong !",
            {},
            error,
            200
          ); 
    }
};

exports.GetDesignation=async(req,res)=>{
    try {
    const get =await Designation.findAll();
    const total=[];
    get.map((item)=>{
        const data={
            department:item.department,
            designation:item.designation,
            status:item.status
        }
        total.push(data)
    })
    Helper.response("Success","Record Found Successfully",total,res,200)
    } catch (error) {
        Helper.response(
            "Failed",
            "Something Went Wrong !",
            {},
            error,
            200
          ); 
    }
};

exports.UpdateDesignation=async(req,res)=>{
    try {
        const update=await Designation.update(
            {
                department:req.body.department,
                designation:req.body.designation,
                status:req.body.status
              },{
                where:{
                    id:req.body.id,
                }
              }
        )
        if(update){
            Helper.response("Success","Record Updated Successfuly",{},res,200)
        }
    } catch (error) {
        Helper.response(
            "Failed",
            "Something Went Wrong !",
            {},
            error,
            200
          );  
    }
};

exports.DeleteDesignation=async(req,res)=>{
    try {
        if(req.body.id>0){
            const data =await Designation.destroy(
                {
                    where:{
                        id:req.body.id,
                    }
                }
            );
            if(data){
                Helper.response("Success","Record Deleted Successfully",{},res,200)
            }
        }
    } catch (error) {
        Helper.response(
            "Failed",
            "Something Went Wrong!"
        )
    }
}
