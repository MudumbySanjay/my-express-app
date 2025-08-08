/* GET homepage*/
const index=(req,res)=>{
    res.render('index',{title : 'Express Sanjay'});
};
module.exports={
    index
};