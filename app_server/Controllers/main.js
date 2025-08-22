/* GET homepage*/
const index=(req,res)=>{
    res.render('index',{title : 'AUtomated Customer Service chatbot'});
};
module.exports={
    index
};
