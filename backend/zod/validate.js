const zod = require("zod");

// validateSchema --> user,admin both 

const validationRule = zod.object ({
    username : zod.string().min(4).max(20)
    },
{

    password : zod.string().min(5).max(16)
            .regex(/['A-Z']/,"password must contain at least one upper chase")
            .regex(/[a-z]/,"password should contain at least one lower case ")
            .regex(/[0-9]/,"password should contain at least one number ")
            .regex(/[@#$%^&*()]/,"password should contain at least one special character")

}
    

);


module.exports = {
    validationRule
}