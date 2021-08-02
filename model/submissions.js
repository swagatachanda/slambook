const mongoose = require("mongoose")
const validator = require("validator")
const submissions = mongoose.Schema({
    Q1 : {
        type: String,
        required: true
    },
    Q2 : {
        type: String,
        required: true
    },
    Q3 : {
        type: String,
        required: true,
        unique : true,
        validate:{
            validator : (value)=>{
                return validator.isMobilePhone(value)
            },
            message : ("Provide a valid phone number")
        }
    },
    Q4 : {
        type: String,
        required: true
    },
    Q5 : {
        type: String,
        required: true
    },
    Q6 : {
        type: String,
        required: true
    },
    Q7 : {
        type: String,
        required: true
    },
    Q8 : {
        type: String,
        required: true
    },
    Q9 : {
        type: String,
        required: true
    },
    Q10 : {
        type: String,
        required: true
    },
    Q11 : {
        type: String,
        required: true
    },
    Q12 : {
        type: String,
        required: true
    },
    Q13 : {
        type: String,
        required: true
    },
    Q14 : {
        type: String,
        required: true
    },
    Q15 : {
        type: String,
        required: true
    },
    Q16 : {
        type: String,
        required: true
    },
    Q17 : {
        type: String,
        required: true
    },
    Q18 : {
        type: String,
        required: true
    },
    Q19 : {
        type: String,
        required: true
    },
    Q20 : {
        type: String,
        required: true
    },
    Q21 : {
        type: String,
        required: true,
        unique: true
    },
    Q22 : {
        type: String,
        required: true
    },
    Q23 : {
        type: String,
        required: true
    },
    Q24 : {
        type: String,
        required: true
    },
    Q25 : {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('submissions',submissions)