const {User,VolRegister} = require('../modules/user_modules');
const {Volunteer} = require('../modules/admin_modules')
module.exports.signinUser = async(req,res) => {
    console.log(req.params)
    console.log(req.params.user_mail)
    const user1 = await User.findOne({user_mail:req.params.user_mail});
    console.log(user1)
    if(user1)
    {
        if(user1.user_password === req.params.user_password)
        {
            curr_stud = user1;
            res.send(user1)
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
module.exports.register = async(req,res)=>{
    console.log(req.params);
    console.log(req.params.vol_id);
    console.log(req.params.user_rollno);
    const reguser = await User.findOne({user_rollno:req.params.user_rollno});
    const regvol = await Volunteer.findOne({vol_id:req.params.vol_id});
    console.log(reguser);
    console.log(regvol);
    if(reguser && regvol)
    {
        if(reguser.user_rollno === req.params.user_rollno && regvol.vol_id === req.params.vol_id)
        {
            res.send({msg:"successfully registered"});
        }
        else{
            res.send({msg:"not registered"});
        }
    }
    else{
        res.send({msg:"not found"});
    }
} 

/* module.exports.register = async (req, res) => {
    console.log(req.params);
    console.log(req.params.vol_id);
    console.log(req.params.user_rollno);
    const reguser = await User.findOne({ user_rollno: req.params.user_rollno });
    const regvol = await Volunteer.findOne({ vol_id: req.params.vol_id });
    console.log(reguser);
    console.log(regvol);
    if (reguser && regvol) {
        if(reguser.user_rollno === req.params.user_rollno && regvol.vol_id === req.params.vol_id)
      {
        // Create an instance of the VolRegister model and set its properties
        const volRegisterData = new VolRegister({
          // Set properties based on your VolRegister schema definition
          // For example:
          property1: req.params.property1,
          property2: req.params.property2,
        });
  
        // Save the data to the VolRegister schema
        const savedData = await volRegisterData.save();
  
        res.send({ msg: "successfully registered", data: savedData });
      } else {
        res.send({ msg: "not registered" });
      }
    } else {
      res.send({ msg: "not found" });
    }
  }; */

module.exports.signupuser = async(req,res)=>{
    const {user_rollno,user_name,user_mail,user_password,user_cpassword,dept,yearofstudy,user_section,isVolBefore} = req.body;

    try{
        const insert = await User.create({user_rollno,user_name,user_mail,user_password,user_cpassword,dept,yearofstudy,user_section,isVolBefore});
        res.status(200).json(insert);
    }
    catch(e){
        res.status(400).json({error: e.message});
      }
}

module.exports.getallUser = async(req,res)=>{
    try{
        const view = await User.find({});
        res.status(200).json(view);
    }
    catch(e){
        res.status(400).json({error: e.message});
    }
}
module.exports.updateUser = async (req, res) => {
    const { user_rollno } = req.params;

    try {
        const task = await User.findByIdAndUpdate(user_rollno, { ...req.body }, { new: true });
        console.log(task);
        res.status(200).json("Successfully edited");

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};
