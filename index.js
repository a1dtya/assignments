
// how many kidney || kidney status


const express = require("express");
const app = express();
var user = [{
    name:"Harkirat",
    kidney:[{
        healthy:false
        }]
}];

app.use(express.json());

 // query parameters
app.get("/", function(req,res){
    
    let userKidney = user[0].kidney;
    let noOfKidney = userKidney.length;
    let healthykidney = 0;
    for ( let i = 0; i < userKidney.length; i++ ){
        if(userKidney[i].healthy){
            healthykidney += 1; 
        }
    }
    let unhealthyKindey = noOfKidney - healthykidney;
    res.json ({
        noOfKidney,
        healthykidney,
        unhealthyKindey   
    })
})



app.post("/", function(req,res){

    console.log(req.body);
    // Cannot read properties of undefined 
    // req.body -> undefinded
   let isHealthy = req.body.isHealthy;
   user[0].kidney.push({
        healthy: isHealthy
   })
   res.json({
        msg:"Done!"
   })
})


app.put("/", function(req,res){
    
    if(allGoodKidney()){
    for(let i = 0; i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy = true;
    }
    res.json({});
    }
    else{
        res.status(411).json({
            msg:"You have no bad kidney!"
        })
    }
})


app.delete("/", function(req,res){
    //remove unhealthy kidney!
    // only if there is any unhealthy else return - 411
    if(oneBadKidney()){
    const newKidney = [];
    for( let i = 0 ; i < user[0].kidney.length ;i++){
        if( user[0].kidney[i].healthy){
            newKidney.push({
                healthy:true
            })
        }
    }
    user[0].kidney=newKidney;
    res.json({msg: "Done!" })

    }
    else {
        res.status(411).json({
            msg:"You have no bad kidney!"
        })
    }
})

function allGoodKidney(){
    let allhealthykidney = false;
    for(let i = 0; i<user[0].kidney.length; i++ ){
        if(!user[0].kidney[i].healthy){
            allhealthykidney = true;
        }
        return allhealthykidney;
    }

}


function oneBadKidney (){
    let atleast1kidney = false;
    for(let i = 0; i<user[0].kidney.length; i++ ){
        if(!user[0].kidney[i].healthy){
            atleast1kidney = true;
        }
        return atleast1kidney;
    }

}

app.listen(3000);