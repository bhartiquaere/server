const Department =require ("../Models/Department");


exports.DepartmentCreate=async(req,res)=>{
    try {
        const data={
            department_name:req.body.name,
            status:req.body.status
        }
        const create =await Department.create(data);
        if(create){
            res.status(200).json({
                status: "Success",
                message: "Department Created Successfully",
              });
            console.log("Department Created Successfully.");
        }
    } catch (error) {
        console.log("Failed ");
    }
};

exports.DepartmentUpdate=async(req,res)=>{
    try {
        const update=await Department.update(
          {
            department_name:req.body.department_name,
            status:req.body.status
          },{
            where:{
                id:req.body.id,
            }
          }
    );

    if(update){
        console.log("Record Updated Successfully.");
        res.status(200).json({
                status: "Success",
                message: "Department Update Successfully",
                data:update
              });
    }
    } catch (error) {
        console.log("update Failed");

    }
}

exports.DepartmentGet=async(req,res)=>{
    try{
        const get=await Department.findAll();
const total=[];
get.map((record)=>{
    const data={
       name: record.dataValues.department_name,
        id: record.dataValues.id,
        status: record.dataValues.status,
    }
    total.push(data)
})
console.log(total);
res.status(200).json({
    status: "Success",
    message: "Record Found Successfully",
    data:total
  });
    }catch(error){
        console.log("Failed to Get DepartmentList")
    }
};

exports.DepartmentDelete=async(req,res)=>{
    try {
        if(req.body.id > 0){
            const data = await Department.destroy(
                {
                    where:{
                        id:req.body.id,
                    }
                }
            );
            if(data){
                console.log("Record Delete Successfully.")
                res.status(200).json({
                    status: "Success",
                    message: "Record Delete Successfully",
                  });
            }
        }
       
    } catch (error) {
        console.log("Failed to Delete Department")
    }
}