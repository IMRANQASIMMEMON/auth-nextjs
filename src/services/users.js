import { error } from 'console';
import fs from 'fs';
import path from 'path';
import { hash } from 'bcrypt';

const filePath = path.join(process.cwd(), "src","data", "users.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));
}
export function getByEmail (email) {
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}
export async function verifedPassword (password, hashpasswortd) {
   const isValid = await compare(password,hashpasswortd);
   return isValid;                                              
}

export async function save (email,password) {
   
   const found = getByEmail (email);
   if(found){
    throw new error("user already exist");
   }
   
    const data = getAll();
   const hashpasswortd = await hash(password,12);
    data.push({
        id: data.length + 1,
        email,
        password : hashpasswortd
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}