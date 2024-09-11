const {User,Course} = require("../db/database")
const {validationRule} =require("../zod/validate"); 
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const authcontroller = {

    register : async (req,res)=>{
    try {
        // validate the user input 

        const {username , password }= req.body;
        const validationResult = validationRule.safeParse({username, password});

        if(validationResult)
        {
            // create a dp table 
            existingUser = await User.findOne({username});
            if(existingUser){
               return  res.status(401).json({
                    msg : "username all ready exist"
                });
            }
            const newUser = await User.create({ username, password });
            return res.status(200).json({
                msg : "new user created successfully !!"
            })
        }

    }catch(err)
    {
        res.status(500).json({
            msg : "Internal server error"
        })
    }
    
    },

    login: async (req,res)=>{
        try {

            const JwtPassword = process.env.JWT_PASSWORD;
            const {username,password} = req.body;

            const validateResult = validationRule.safeParse({username,password})
            if(validateResult){
            const user = await User.find({
                username,
                password
            })

            if(user)
            {
                const token = jwt.sign({
                    username
                },JwtPassword);

                res.json({
                    token
                })
            }else{
                res.status(401).json({
                    message : "Incoreect username and password "
                })
            }
        }

            

        }catch(err)
        {
            res.status(401).json({
                message: "Internal server problem !"
            })
        }
    }
    ,
    course: async(req,res)=>{
        const token = req.headers.authorization;// beare+token 
        const word = token.split(" ") ; // [bear , token]
        const jwtToken = word[1]; // -->token 

        try{

            const decodeValue = jwt.verify(jwtToken,JWT_PASSWORD);

            if(decodeValue)
            {
                const responce = await Course.find ({});

                res.json({
                    courses : responce
                })
            }
        }catch(err)
        {
            res.status(501).json({
                message : "Internal server problem !"
            })
        }
    }
    
}

module.exports = authcontroller;