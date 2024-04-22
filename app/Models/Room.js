const {DataTypes}=require("sequelize");

const sequelize=require("../Connection/conn");

const Room=sequelize.define("room",
{
    tower_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    room_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    no_of_floor:{
        type:DataTypes.INTEGER
    },
}
);

// sequelize.sync()
// .then(()=>{
//     console.log("Room Table Created Successfully !")
// })
// .catch((error)=>{
//     console.log(error)
// });

module.exports=Room;