import { optionModel, voteModel } from "./Schema.js"

export class voteRepository{

    static createQuestion=async(req,res)=>{
        const question= new voteModel(req.body);
        try{
        await question.save();
        res.status(200).send(question);
        }catch(err){
            res.status(400).send("Does not create question.");
        }
    }

    static createOption=async(req,res)=>{
        const {id}=req.params;
        const option= new optionModel(req.body);
        try{
        await option.save();
        option.Link_to_Vote=`http://localhost:3000/api/options/${option._id}/add_vote`;
        await option.save();
        const question=await voteModel.findOne({"_id":id});
        if(question){
        question.options=await optionModel.find();
        await question.save();
        res.status(200).send(question);
        }else{
            res.status(400).send("Question does not found");
        }
        }catch(err){
            res.status(400).send("Does not create option");
        }
    }

    static DeleteQuestion=async(req,res)=>{
        const {id}=req.params;
        try{
        const question= await voteModel.findOneAndDelete({"_id":id});
        res.status(200).send("Deleted successfully");
        }catch(err){
            res.status(401).send("Could not be deleted");
        }
    }

    static DeleteOption=async(req,res)=>{
        const {id}=req.params;
        try{
        const option= await optionModel.findOneAndDelete({"_id":id});
        res.status(200).send("Deleted successfully");
        }catch(err){
            res.status(401).send("Could not be deleted");
        }
    }

    static AddVote=async(req,res)=>{
        const {id}=req.params;
        const option= await optionModel.findOne({"_id":id});
        if(option){
        const vote= option.votes;
        option.votes=vote+1;
        await option.save();
        res.status(200).send(option);
        }else{
            res.status(400).send("Doesn't find the option");
        }
    }

    static ViewQuestion=async(req,res)=>{
        const {id}=req.params;
        const question=await voteModel.findOne({"_id":id});
        if(question){
            question.options=await optionModel.find();
            await question.save();
            res.status(200).send(question);
        }else{
            res.status(400).send("Doesn't Find question");
        }
    }
}