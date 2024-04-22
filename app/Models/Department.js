const { DataTypes } = require("sequelize");

const sequelize = require('../Connection/conn');
const HOD = require("./HeadOfDepartment");

const Department = sequelize.define("department", {
    department_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    }
});

HOD.belongsTo(Department,{foreignkey:"department_id",as:"department"});

// sequelize.sync()
// .then(()=>{
//     console.log("Deparment Created Succesfully")
// })
// .catch((error)=>{
//     console.log(error);
// })

module.exports = Department;