const express = require("express");
const Login = require("../Models/Login")
const db = require("../Connection/conn");
const Helper = require("../Helper/Helper");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Login.findAll({
      where: {
        email: req.body.email,
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
   
      await Login.update(
        { token: token },
        {
          where: {
            id: user[0].dataValues.id,
          },
        }
      );
      Helper.response(
        "Success",
        "Authentication Success",
        {
          id: user[0].dataValues.id,
          username: user[0].dataValues.name,
          token: token,
          user_type: user[0].dataValues.user_type,
        },
        res,
        200
      );
    }
    else {
      Helper.response(
        "Failed",
        "Username or Password Wrong!",
        {},
        res,
        200
      );
    }
  } catch (error) {
   Helper.response(
      "Failed",
      "Username or Password Wrong!",
      {},
      res,
      200
    );
   }
  }

