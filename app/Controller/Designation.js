const Designation=require("../Models/Designation");


exports.CreateDesignation=async(req,res)=>{
    try {
        const data={
            department_name:req.body.department,
            designation_name:req.body.designation,
            status:req.body.status
        }
        const create =await Designation.create(data);
        if(create){
            res.status(200).json({
                status: "Success",
                message: "Designation Created Successfully",
              });
            console.log("Designation Created Successfully.");
        }
    } catch (error) {

        console.log("Failed To Create");
    }
};

