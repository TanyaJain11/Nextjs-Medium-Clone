// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials"
// import bcrypt from "bcrypt";
// import User from '../../../models/user'
// import dbConnect from "../../../config/dbConnect";

// export default NextAuth({
//     session:{
//         strategy:'jwt'
//     },

//     providers:[
//         CredentialsProvider({
//             async authorize(credentials,req){

//                 dbConnect()
//                 const {email,password} = credentials;
//                 console.log("signin",email,password)
//                 const user = await User.findOne({email});
//                 if(!user){
//                     throw new Error('Invalid Email or password')
//                 }

//                 const isPasswordMatched = await bcrypt.compare(password,user.password)

//                 if(!isPasswordMatched){
//                     throw new Error('Invalid')
//                 }

//                 return user;
//             }
//         })
//     ],
//     secret:process.env.NEXTAUTH_SECRET

// })

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import User from '../../../models/user';
import dbConnect from '../../../config/dbConnect';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await dbConnect(); // Connect to the database
          const { email, password } = credentials;

          const user = await User.findOne({ email });
          if (!user) {
            // Redirect to the login page if user is not found
            return null;
          }

          const isPasswordMatched = await bcrypt.compare(password, user.password);
          if (!isPasswordMatched) {
            // Redirect to the login page if password is incorrect
            return null;
          }

          return user;
        } catch (error) {
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Specify the login page path
  },
  secret: process.env.NEXTAUTH_SECRET,
});