
import{ prisma} from "../db/prisma";
import bcrypt   from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const getUsers = async (req:any, res:any) => {
 //console.log(req.user);
  const users = await prisma.user.findMany();
  res.json(users);
};

 export const SignUp = async (req:any, res:any) => {
   
  const  { name, password, email} = req.body

  if( !name || !password || !email ){
    return res.status(400).json({message: "All fields are required"})
}

    try {
      
      const userExists = await prisma.user.findUnique({
        where: {
          email
        }
      })
        if(userExists){
            return res.status(400).json({message: "User already exists"})
        }

      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)


      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword,
          Balance: {
            create: [
              {
                amount: 0,
                locked: 0
                
              },
            ],
          },



        },
        select:{
          id: true,
          name: true,
          email: true
        }
      });

      const authtoken = jwt.sign({id: newUser.id}, process.env.JWT_SECRET || '', {expiresIn: 3600})

      res.cookie('authToken', authtoken, {
        httpOnly: true,
        sameSite: "strict",
        // secure: process.env.NODE_ENV === 'production', 
        secure: true,
        maxAge: 3600000 ,// 1 hour
        
      });


       
      res.status(201).json({message: "User created successfully", authtoken, user: newUser});
      
    } catch (error) {

      console.log(error)
      
    }
  }

  export const SignIn = async (req:any, res:any) => {
    const { email, password} = req.body

    if( !email || !password){
      return res.status(400).json({message: "All fields are required"})
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if(!user){
      return res.status(400).json({message: "Invalid credentials"})}

      const isMatch = await bcrypt.compare(password, user.password)

      if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"})
      }
      
      const authtoken = jwt.sign({id: user.id}, process.env.JWT_SECRET || '', {expiresIn: 3600})

      res.cookie('authToken', authtoken, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 3600000 ,// 1 hour
        
      });

      res.status(200).json({message: "User signed in successfully", authtoken, user: {
        id: user.id,
        username: user.name,
        email: user.email,
        
      }});
      

      
    
  } catch (error) {
    console.log(error)
    
  }

}