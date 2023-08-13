import Form from "@/components/auth/form";

export default function SignUp () {
   
    const onSubmit = async(email,password) =>{
      
      try {
          const response = await fetch("/api/auth/Singup",{
          method:"POST",
          body:JSON.stringify({email,password}),
          headers:{
              "Content-Type" :"application/json"
          }
         });
        
        if(response.ok){
            alert("singup is success")
        }

      } catch (error) {
        console.error(error);

    }
    
    }
     return <Form signin={false} onFormSubmit = {onSubmit}/>
    
};
