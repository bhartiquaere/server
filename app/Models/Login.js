const {DataTypes}=require('sequelize');
const sequelize = require('../Connection/conn');

const Login=sequelize.define("user",{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
});

// sequelize.sync()
// .then(()=>{
//     console.log("Login Created Succesfully")
// })
// .catch((error)=>{
//     console.log(error);
// })
module.exports=Login;