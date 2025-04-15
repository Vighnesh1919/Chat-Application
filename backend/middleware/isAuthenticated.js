import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next)=>{
    try{

        const token = req.cookies.token;
//   console.log(token);

if(!token){
    return res.status(401).json({message:"User not authenticated."})
};


const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY)
console.log(decode);
if(!decode){
    return res.status(401).json({message:"Invalid token"});
};

req.id=decode.userId; 


next();// runs next function from the file thatis called - can go back in messageRoutes check the the sendMessage is called 

    } catch(error){
        console.log(error); 

    }
};

export default isAuthenticated;