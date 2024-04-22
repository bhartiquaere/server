const {DataTypes}=require("sequelize");

const sequelize=require("../Connection/conn");

const Tower =sequelize.define("tower",
{
    tower_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tower_location:{
        type:DataTypes.STRING,
        allowNull:false
    },
    no_of_floor:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    kv:{
        type:DataTypes.FLOAT,
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
//     console.log("Tower Table Created Successfully !")
// })
// .catch((error)=>{
//     console.log(error)
// });

module.exports=Tower;