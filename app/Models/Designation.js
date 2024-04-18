const { DataTypes } = require("sequelize");

const sequelize = require("../Connection/conn");

const Designation = sequelize.define("designation",
    {
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    });

// sequelize.sync()
// .then(()=>{
//     console.log("Designation Table Created.")
// })
// .catch((error)=>{
//     console.log(error)
// });

module.exports = Designation;