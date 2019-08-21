<template>
  <div id="app">
  <button @click="jiajia"> +1</button>
  <button @click="jianjian">-1</button>
  <button @click="sbjia">+5</button>
  <div>
    app中的{{$store.state.mycount}}
    </div> 
  <div>
     comnt中的{{$store.getters.countpf}}
    </div> 
 <div>
     年龄大于20的：{{$store.getters.dayu20}}
    </div> 
     <div>
     年龄大于20的人数：{{$store.getters.dayu20length}}
    </div> 
    <div>
      <button @click="updataname">点我该名字</button>
      <h1>{{$store.state.name}}</h1>
        <h1>{{$store.state.moduleA.names}}</h1>
  <img src="@assets/img/2.jpg" alt="">
    </div>
<hehe></hehe>
  </div> 
</template>

<script>  
import hehe from './components/hehe'

export default {
 components:{
   hehe
 },
 methods: {
   jiajia(){
     this.$store.commit("jia")
   },
    jianjian(){
     this.$store.commit("jian")
   },
   sbjia(){
     this.$store.commit("sbjia",5)
   }, 
   updataname(){
     this.$store.dispatch("apname",{
       name:"hehe",
       success:function(){
         console.log("成功")
       }
     });
   }
 }
}
</script>

<style>

</style>
