import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		username:"",
		uid:"",
		count:0
	},
	mutations:{
		next1(a,b){
			a.username=b
			
		},
		next2(a,b){
			
			a.uid=b
		}
	}
	
})
