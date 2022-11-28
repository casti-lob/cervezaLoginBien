const {request, response} = require('express')
const User = require('../models/usuario')
const bcryptjs = require('bcryptjs')


const getLogin= async(req,res) =>{
   const { email, password} = req.body;
   const user= await User.findOne(email)
   let login=false;
   if(!user){
      return res.status(404).json({ mensaje:'Error'})
   }
   else if(!bcryptjs.compareSync(password, user.password)){
      return res.status(404).json({ mensaje:'Mal'})
   }
   else if(!user.status){
      return res.status(404).json({ mensaje:'Mu Mal'})
   }
   else{
      return res.json({user})
   }
   
}  

module.exports = {getLogin}