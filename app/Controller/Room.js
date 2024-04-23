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
    try {
        const update=await Room.update(
            {
             tower_id:req.body.tower_id,
             room_name:req.body.room_name,
             no_of_floor:req.body.no_of_floor   
            },
            {
                where:{
                    id:req.body.id
                }
            }
        )
        if(update){
            console.log("Room Updated Successfully");
            Helper.response("Success","Room Update Successfully ",{},res,200)
        }
    } catch (error) {
        console.log("Failed to Update.");
        Helper.response("Failed","Something went worng ",error,res,200)
    }
};

exports.DeleteRoom =async(req,res)=>{
    try {
        if(id.req.body>0){
            const DelRoom=await Room.destroy(
                {
                 where:{
                    id:req.body.id,
                 }   
                }
            );
            if(DelRoom){
                console.log("Record Delete Successfully")
                Helper.response("Success","Record Deleted Successfully",{},res,200)
            }
        }
       
    } catch (error) {
        console.log("Failed To Delete Record ");
        Helper.response("Failed","Something went Wrong ",error,res,200)
    }
};

exports.GetRoom=async(req,res)=>{
    try {
        const get=await Room.findAll();
        const list=[];
        get.map((item)=>{
            const data={
                tower_id:item.tower_id,
                room_name:item.room_name,
                no_of_floor:item.no_of_floor
            }
            list.push(data)
        });
        Helper.response("Success","Record found Successfully",list,res,200)
    } catch (error) {
        console.log("Failed to fech data");
        Helper.response("Failed","Something went worng ",error,res,200);
    }
}