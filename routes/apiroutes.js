const express = require("express")
const router = express.Router()
const Submission = require("../model/submissions")

router.post("/submit",async(req,res)=>{
    console.log(req.body)
        const newsubmit = new Submission({
            Q1: req.body.Q1,
            Q2 : req.body.Q2,
            Q3: req.body.Q3,
            Q4: req.body.Q4,
            Q5: req.body.Q5,
            Q6: req.body.Q6,
            Q7: req.body.Q7,
            Q8: req.body.Q8,
            Q9: req.body.Q9,
            Q10: req.body.Q10,
            Q11: req.body.Q11,
            Q12: req.body.Q12,
            Q13: req.body.Q13,
            Q14: req.body.Q14,
            Q15: req.body.Q15,
            Q16: req.body.Q16,
            Q17: req.body.Q17,
            Q18: req.body.Q18,
            Q19: req.body.Q19,
            Q20: req.body.Q20,
            Q21: req.body.Q21,
            Q22: req.body.Q22,
            Q23: req.body.Q23,
            Q24: req.body.Q24,
            Q25: req.body.Q25,
            Q26: req.body.Q26,
            Q27: req.body.Q27,
            Q28: req.body.Q28,
            Q29: req.body.Q29,
            Q30: req.body.Q30,
            Q31: req.body.Q31,
            Q32: req.body.Q32,
            Q33: req.body.Q33,
            Q34: req.body.Q34
        })
    try{
        const submit = await newsubmit.save()
        res.status(200).json({
            data: submit
        })
    }
    catch(err){
        res.status(500).json({
            errorMessage : err,
        })
    }
})

router.get("/submission", async(req,res)=>{
    try{
        const submitresponse = await Submission.find()
        res.status(201).json({
            data : submitresponse
        })
    }
    catch(err){
        res.status(501).json({
            errorMessage: err
        })
    }
})

router.get("/submission/:submissionId", async(req,res)=>{
    try{
        const submission=await Submission.findById(req.params.submissionId)
        if(submission==null){
            return res.status(404).json({
                error: "Submission not found"
            })
        }
        res.json({'status': true, 'data': submission})
    }
    catch(err){
        res.json({'status': false, 'error' : err, code: 104})
    }
})

module.exports=router