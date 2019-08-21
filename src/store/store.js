import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import moduleA from "@store/moduls/moduleA"
Vue.use(Vuex)
const state={
  mycount:0,
  aaa:[
    {name:"zs",age:10},
    {name:"ls",age:21},
    {name:"ww",age:40},
    {name:"zl",age:60},
  ],
  name:"侯文涛"
}
export default new Vuex.Store({
  state,
  mutations,
  getters, 
  actions,
  modules:{
    moduleA
} 
})

