const Helper = require("../Helper/Helper");
const Room =require("../Models/Room");

exports.CreateRoom=async(req,res)=>{
    try {
        const data={
            tower_id:req.body.tower_id,
            room_name:req.body.room_name,
            no_of_floor:req.body.no_of_floor
        }
        const create=await Room.create(data);
        if(create){
            console.log("Room Created Successfully !");
            Helper.response("Success","Room Create SUccessfully ",{},res,200)
        }
    } catch (error) {
        console.log("Failed !");
        Helper.response("Failed","Something went wrong !",error,res,200)
    }
};

exports.UpdateRoom=async(req,res)=>{
    
}