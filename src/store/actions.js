export default{
    apname(context,paylode){
        setTimeout(()=>{
         context.commit("updataname")
       console.log(paylode.name);
       paylode.success()
        },1000)
      } 
}