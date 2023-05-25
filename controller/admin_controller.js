const {Admin,Volunteer} = require('../modules/admin_modules')

module.exports.signinAdmin = async(req,res) => {
  console.log(req.params)
  console.log(req.params.admin_email)
  const admin1 = await Admin.findOne({admin_email:req.params.admin_email});
  console.log(admin1)
  if(admin1)
  {
      if(admin1.admin_password === req.params.admin_password)
      {
        console.log(admin1)
          curr_admin = admin1;
          res.send(admin1)
      }
      else
      {
          res.send({msg:"PASSWORD IS INCORRECT"})
      }
  }
  else
  {
      res.send({msg:"DATA DOESN'T EXISTS. PLEASE SIGNUP"});
  }
}

module.exports.signupadmin = async (req,res)=>{
  const {admin_rollno,admin_name, admin_email , admin_password} = req.body;

  try{
    const task = await Admin.create({admin_rollno,admin_name, admin_email,admin_password});
    res.status(200).json(task);
  }
  catch(e){
    res.status(400).json({error: e.message});
  }
}

module.exports.volunteerinsert = async(req,res)=>{
  const {vol_id,date,hours,location,activity,slot_available,description} = req.body;

  try{
    const insert = await Volunteer.create({vol_id,date,hours,location,activity,slot_available,description});
    res.status(200).json(insert);
  }
  catch(e){
    res.status(400).json({error: e.message});
  }
}

module.exports.getvolunteer = async(req,res)=>{
  try{
    const getvol = await Volunteer.find({})
    res.status(200).json(getvol);
  }
  catch(e){
    res.status(400).json({error: e.message});
  }
}

module.exports.UpdateVolunt = async(req,res)=>{
  const {vol_id} = req.params;
  try{
    const update = await Volunteer.findByIdAndUpdate(vol_id ,{...req.body});
    console.log(update)
    res.status(200).json(update);
  }
  catch(e){
    res.status(400).json({error: e.message});
  }
}





