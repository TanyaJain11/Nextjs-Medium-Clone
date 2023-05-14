import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import User from '../../../models/user'
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
    session:{
        strategy:'jwt'
    },

    providers:[
        CredentialsProvider({
            async authorize(credentials,req){

                dbConnect()
                const {email,password} = credentials;
                console.log(email,password)
                const user = await User.findOne({email});
                if(!user){
                    throw new Error('Invalid Email or password')
                }

                const isPasswordMatched = await bcrypt.compare(password,user.password)

                if(!isPasswordMatched){
                    throw new Error('Invalid')
                }

                return user;
            }
        })
    ],
    secret:process.env.AUTH_SECRET

})