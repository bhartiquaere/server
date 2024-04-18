const {DataTypes}=require("sequelize");

const sequelize = require('../Connection/conn');

const Department=sequelize.define("department",{
    department_name:{
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
//     console.log("Deparment Created Succesfully")
// })
// .catch((error)=>{
//     console.log(error);
// })

module.exports=Department;