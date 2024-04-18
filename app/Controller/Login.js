const express = require("express");
const Login =require ("../Models/Login")
const db = require("../Connection/conn");
const Helper = require("../Helper/Helper");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Login.findAll({
      where: {
        email:email,
      },
    });
    if (
      Helper.decryptPassword(user[0].dataValues.password) === req.body.password
    ) {
      let token = jwt.sign(
        { id: user[0].dataValues.id },
        process.env.SECRET_KEY,
        {
          expiresIn: "50m",
        }
      );
      console.log(token)
    //   return false

    }
    else {
     console.log("Username or Password Wrong!")
    }
  } catch (error) {
   res.send(error);
   }
};
