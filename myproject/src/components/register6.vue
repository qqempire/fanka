<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">跳过</button>
		</div>
		<div id="box1">
			<div>
				<h4>口味选择</h4>
				<ul>
					<li><input type="button" value="清淡"></li>
					<li><input type="button" value="微辣"></li>
					<li><input type="button" value="中辣"></li>
					<li><input type="button" value="特辣"></li>
				</ul>
			</div>
			<div>
				<h4>类别选择</h4>
				<ul class="xz">
					
					<li><input type="button" value="烹饪"></li>
					<li><input type="button" value="甜食"></li>
					<li><input type="button" value="素食"></li>
					<li><input type="button" value="火锅"></li>
					<li><input type="button" value="烧烤"></li>
					<li><input type="button" value="蒸煮"></li>
					<li><input type="button" value="凉拌"></li>
					<li><input type="button" value="其他"></li>
				</ul>
			</div>
			
		
			<button @click="next()" class="btn">下一步</button>
		</div>
				
	</div>
	
</template>

<script>
	
	
	
	
	
	
	
	
	
	
	export default{
		name:"Register6",
		methods:{

			back(){
				this.$router.push("/register5")
			},
			next(){
				this.$router.push("/register7")
			},
			login(){
				this.$router.push("/register7")
			}
			
		},
		mounted(){
			document.getElementsByTagName("input").onclick=function(){
		this.style.background="red"
	}
		}
	}
	
	
</script>

<style scoped="">
	#box{
		height:100vh;
		width: 100vw;
		background:#212121;
		/*overflow: hidden;*/
		text-align: center;
	}
	#box1{
		/*height:377px;*/
		width:290px;
		background:url(/static/reg6.jpg) no-repeat;
		margin:44px auto 0;
		overflow: hidden;
	}
	#return{
		height:18px;
		width:18px;
		border:1px solid #FFDC14;
		border-radius: 50%;
		background: none;
		color:#FFDC14;	
		margin-top:10px;	
	}
	#top{
		height:45px;width:95vw;margin-left:2.5vw;display: flex;justify-content: space-between;
	}
	#dl{
		height:22px;
		width:46px;
		text-align: center;
		line-height: 22px;
		color:#FFDC14;
		border:1px solid #FFDC14;
		border-radius: 11px;
		background: none;		
		margin-top:10px;
	}
	.btn{
		width:180px;
		height:42px;
		background: #FFDC14;
		color:#FFFFFF;
		border:none;
		border-radius: 21px;
		margin:35px auto 0;
	}
	#box1 div:nth-child(1){
		margin-top:150px;
		margin-left:40px;
	}
	#box1 div:nth-child(1) h4{
		display: block;
		height:26px;
		width:90px;
		text-align: center;
		line-height: 26px;
		border:2px solid #FFDC14;
		border-radius: 13px;
		margin-left:60px;
	}
	#box1 div:nth-child(1) li{
		float: left;
		width:45px;
		height:22px;
		margin-left:5px;
		text-align: center;
		line-height: 22px;
		border:2px solid #FFDC14;
		border-radius: 11px;
		margin-top:10px;
	}
	
	
	#box1 div:nth-child(2){
		margin-top:40px;
		margin-left:40px;
	}
	#box1 div:nth-child(2) h4{
		display: block;
		height:26px;
		width:90px;
		text-align: center;
		line-height: 26px;
		border:2px solid #FFDC14;
		border-radius: 13px;
		margin-left:60px;
	}
	#box1 div:nth-child(2) li{
		float: left;
		width:45px;
		height:22px;
		margin-left:5px;
		text-align: center;
		line-height: 22px;
		border:2px solid #FFDC14;
		border-radius: 11px;
		margin-top:10px;
	}
	
	input{
		background: none;border:none;outline: none;
	}
</style>