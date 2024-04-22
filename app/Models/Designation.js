const { DataTypes } = require("sequelize");

const sequelize = require("../Connection/conn");
const HOD = require("./HeadOfDepartment");

const Designation = sequelize.define("designation",
    {
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        designation_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    });

    HOD.belongsTo(Designation,{foreignKey:"designation_id",as:"designation"});
    
// sequelize.sync()
// .then(()=>{
//     console.log("Designation Table Created.")
// })
// .catch((error)=>{
//     console.log(error)
// });

module.exports = Designation;