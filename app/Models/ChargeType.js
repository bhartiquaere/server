const {DataTypes}=require("sequelize");
const sequelize = require("../Connection/conn");

const ChargeType= sequelize.define("chargeType",
{
charge_type_name:{
    type:DataTypes.INTEGER,
    allowNull:false
},

});

// sequelize.sync()
// .then(()=>{
//     console.log("HOD Table Created Successfully !")
// })
// .catch((error)=>{
//     console.log(error)
// });

module.exports=ChargeType;