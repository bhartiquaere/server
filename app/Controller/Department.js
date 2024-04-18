const Department =require ("../Models/Department");


exports.DepartmentCreate=async(req,res)=>{
    try {
        const data={
            department_name:req.body.department_name,
            status:req.body.status
        }
        const create =await Department.create(data);
        if(create){
            res.send(data)
            res.send("Department Created Successfully.")
        }
    } catch (error) {
        console.log(error);
    }
};