<template>
	<div id="box">
		<div id="top">
			<button @click="back()" id="return">&lt;</button>
			<button @click="login()" id="dl">登录</button>
		</div>
			<p class="hy">w e l c o m e t o f a n k e</p>
		
		<div id="box1">
			<div class="getyzm">
				<!--<div class="xx"><p class="tsxx"></p></div>-->
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请输入您的昵称" class="nc"/>
					<button class="qc"><span class="iconfont icon-shanchu3"></span></button>
				</div>
				<div class="sjh">
					<span class="iconfont icon-wode"></span>
					<input type="text" placeholder="请输入您的密码" class="mm"/>
					<!--<button class="yzm">发送验证码</button>-->
					<button class="qc"><span class="iconfont icon-shanchu3"></span></button>
				</div>
			</div>	
			<div class="xx"><p class="tsxx"></p></div>
			
			<button @click="next()" class="next">下一步</button>
		</div>
		
	</div>
</template>

<script>
	
	var flag=0;
	var flag1=false;
	var flag2=false;
	
	
	
	export default{
		name:"Register",
		data:function(){
			return{
				ipt:"",
				ipt2:""
			}
		},
		methods:{
			back(){
				this.$router.push("/register7")
			},
			login(){
				this.$router.push("/login")
			},
			next(){
				
			if($(".nc").val()==""){
				$(".tsxx").show();
				$(".tsxx").text("请输入昵称")
			}
		
				
				
				
				
				
				
				
				
				
//				this.$router.push("/register9")
			}
		}
	}
	
</script>

<style scoped="">
	
	#box{
		height:100vh;
		width: 100vw;
		background:url(/static/body.jpg);
		overflow: hidden;
	}
	#box1{
		height:292px;
		width:300px;
		background:url(/static/reg1.jpg);
		margin:20% auto 50px;
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
		margin-left:10px;
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
		margin-right:10px;
		margin-top:10px;
		float: right;
	}
	.getyzm{
		margin-top:90px;
		margin-left:50px;
	}
	.xx{
		height:24px;width:100%;margin-top:5px;background: #FFFFFF;
	}
	.tsxx{width:180px;height:18px;padding:3px;border-radius: 10px;
		color:#FFFFFF;font-size: 14px;margin:0 auto;background: #FFDC14;text-align: center;line-height: 18px;display: none;
	}
	.sjh{
		height:25px;
		width:210px;
		margin-bottom: 15px;
		margin-top:10px;
		border-bottom: 2px solid #FFDC14;
	}
	.sjh span{
		float: left;
		color:#FFDC14;
		font-size:20px;
		float: left;
	}
	.sjh input{
		border:none;
		width:160px;
		height:25px;
		color:#FFDC14;
		float: left;
		outline: none;
	}
	/*.sjh #next{
		border:none;
		height:20px;
		width:70px;
		background: #FFDC14;
		font-size:12px;
		border-radius: 12px;
		color:#FFFFFF;
	}*/
	.sjh .qc{
		border:none;
		float: left;
		color:#FFDC14;
		font-size:20px;
		float: left;
		background: #FFFFFF;
		
	}
	.next{
		height:40px;
		width:180px;
		background: #FFDC14;
		color:#FFFFFF;
		border:none;
		border-radius: 20px;
		margin-top: 10px;
		margin-left:60px;
		outline: none;
	}
	.hy{
		display: block;
		/*position: absolute;
		top:160px;
		left:90px;*/
		margin:40% auto 0;
		width:220px;
		height:40px;
		word-spacing: 10px;
		text-align: center;
		line-height: 40px;
		color:#FFFFFF;
		font-weight: 600;
	}
	
	
</style>