
import { save } from "@/services/users";
export default function handler(req, res) {
   

 if(req.method !== "POST"){
    return res.status(404).send()
 }

 
  const {email,password} = req.body
  try {
      save(email,password);
      res.status(201).send();
    
  } catch (error) {
    res.status(400).json({message:error});
  }

}