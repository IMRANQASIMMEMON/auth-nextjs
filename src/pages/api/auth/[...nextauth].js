import { getByEmail } from "@/services/users";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
 session:{
    jwt:true
 },
 
  providers: [
    CredentialsProvider({
      async authorize ({email,password}){
       const user = getByEmail(email);
      if(!user){

          throw new Error("user not found");
      }
        const inValid = await verifedPassword(user.password,password);
        if(!inValid){
            throw new Error("incorrect password");
        } 
        return {email};
    }
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)