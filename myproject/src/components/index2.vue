<template>
	<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
		        	<img src="static/q.jpg" />
		        	<button @click="tg()" class="btn">跳过</button>
		        </div>
		        <div class="swiper-slide">
		        	<img src="static/w.jpg" />
		        	<button @click="tg()" class="btn">跳过</button>
		        </div>
		        <div class="swiper-slide">
		        	<img src="static/e.jpg" />
		        	<button @click="tg()" class="btn">跳过</button>
		        </div>
		        <div class="swiper-slide">
		        	<img src="static/r.jpg" />
		        	<button @click="ty()" id="btn">立即体验</button>
		        </div>
		       
		    </div>
		</div>
	
</template>

<script>
	import Swiper from "swiper"
	export default{
		name:"Index2",
		
		mounted(){
	       var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: false,
		  })     
	     },
	     methods:{
	     	tg(){
	     		this.$router.push("/lr")
	     	},
	     	ty(){
	     		this.$router.push("/lr")
	     	}
	     }
		
	}
</script>

<style scoped="">
	
			.swiper-container .swiper-wrapper{
				height:100vh;width:100vw;
			}
			img{
				height:100vh;width:100vw;
			}
			#btn{
		width:120px;
		height:30px;
		border:2px solid #000000;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		position: absolute;
		bottom: 50px;
		left:35%;
		/*margin:-100px auto;*/
		outline: none;
		background: #FFFFFF;
		
	}
	.btn{
		border:1px solid #fae151;
		height:40px;
		width:40px;
		position: absolute;
		top:20px;
		right:20px;
		font-size:10px;
		border-radius: 20px;
		background: #FFFFFF;
		text-align: center;
		line-height: 36px;
		color:#fae151;
		outline: none;
	}
</style>