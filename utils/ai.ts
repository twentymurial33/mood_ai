import {OpenAI} from "langchain/llms/openai";


 export const analyze=async(prompt:any)=>{
    const model= new OpenAI({temperature:0,modelName:"gpt"});
    const res=await model.call(prompt);
    console.log(res)

}