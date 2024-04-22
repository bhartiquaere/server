const {DataTypes}=require("sequelize");

const sequelize=require("../Connection/conn");

const HOD=sequelize.define("hod",
{
    department_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    designation_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    hod_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:1
    }
});

// sequelize.sync()
// .then(()=>{
//     console.log("HOD Table Created Successfully !")
// })
// .catch((error)=>{
//     console.log(error)
// });

module.exports=HOD;