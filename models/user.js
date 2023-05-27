// import mongoose,{model} from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     authorimg:String,
//     password:String,
// })

// userSchema.pre('save',async function(next){
//     if(!this.isModified('password')){
//         next();
//     }

//     this.password = await bcrypt.hash(this.password,10);
// })

// export default mongoose.models.User || mongoose.model('User',userSchema)

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

// const User = mongoose.model('User', userSchema);

// export default User;
export default mongoose.models.User || mongoose.model('User',userSchema)
