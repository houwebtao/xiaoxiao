export default{
    countpf(state){
        return state.mycount * state.mycount
      },
      dayu20(state){
        return state.aaa.filter(stu => stu.age>20)
      },
      dayu20length(state,getters){
        return getters.dayu20.length
      }
}