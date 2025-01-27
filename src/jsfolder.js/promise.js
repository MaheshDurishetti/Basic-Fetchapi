let mahesh=new Promise((success,failure)=>{
   let  datacame=true
   if(datacame){
    success([1,2,3])
   }
   else{
failure("fail")
   }
})
console.log(mahesh)
mahesh.then((success)=>{console.log(success)})
mahesh.catch((failure)=>{console.log(failure)})
