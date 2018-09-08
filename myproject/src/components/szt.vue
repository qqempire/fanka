<template>
	<div>
		<div class="main">
			<div class="top">
				<header>
					 <span @click="tap()"  class="iconfont icon-203"></span>
				     <div>{{tit}}</div>
				     <span class=" gd iconfont icon-gengduo"></span>	
				</header>
			</div>	
			<div id="detail">
				<div id="detail-left"><img src="static/yisheng.jpg"/></div>
				<div id="detail-right">
					<p><b>病症：</b>声音嘶哑又称声嘶，是喉部（特别是声带）病变的主要症状，多由喉部病变所致，也可因全身性疾病所引起。</p>
				</div>
			</div>
			<div class="zl">  
				<div class="yinshi">
					<span class="iconfont icon-yingyang"></span>
					<h4>饮食疗法</h4>
				</div>
				<div class="yundong">
					<span class="iconfont icon-sousuo"></span>
					<h4>运动疗法</h4>
				</div>
			</div>
		</div>	
		<div class="menu">
			<div class="list">
				<div class="list-left"><img src="static/btxl.jpg"/></div>
				<div class="list-right">
					
					<h4>鸡蛋冰糖汤</h4><span class="iconfont icon-hot-full">98</span>
					<p>鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤</p>
					<b class="iconfont icon-yanjing">2828</b>
					<b class="iconfont icon-xinxi">986</b>
				</div>
			</div>
			
			<div class="list">
				<div class="list-left"><img src="static/btxl.jpg"/></div>
				<div class="list-right">
					
					<h4>鸡蛋冰糖汤</h4><span class="iconfont icon-hot-full">98</span>
					<p>鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤</p>
					<b class="iconfont icon-yanjing">2828</b>
					<b class="iconfont icon-xinxi">986</b>
				</div>
			</div>
			
			
			<div class="list">
				<div class="list-left"><img src="static/btxl.jpg"/></div>
				<div class="list-right">
					
					<h4>鸡蛋冰糖汤</h4><span class="iconfont icon-hot-full">98</span>
					<p>鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤</p>
					<b class="iconfont icon-yanjing">2828</b>
					<b class="iconfont icon-xinxi">986</b>
				</div>
			</div>
			
			<div class="list">
				<div class="list-left"><img src="static/btxl.jpg"/></div>
				<div class="list-right">
					
					<h4>鸡蛋冰糖汤</h4><span class="iconfont icon-hot-full">98</span>
					<p>鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤</p>
					<b class="iconfont icon-yanjing">2828</b>
					<b class="iconfont icon-xinxi">986</b>
				</div>
			</div>
			
			
			<div class="list">
				<div class="list-left"><img src="static/btxl.jpg"/></div>
				<div class="list-right">
					
					<h4>鸡蛋冰糖汤</h4><span class="iconfont icon-hot-full">98</span>
					<p>鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤鸡蛋冰糖汤</p>
					<b class="iconfont icon-yanjing">2828</b>
					<b class="iconfont icon-xinxi">986</b>
				</div>
			</div>			
		</div>	
			
			
			
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:"Szt",
		data:function(){
			return{
				tit:"突发嗓子疼"
			}
		},
		methods:{
			tap(){
				this.$router.push("/ying")
			}
		}
	}
	
	
</script>

<style scoped="">
	.main{
		position: fixed;top:0;background: #FFFFFF;padding-bottom: 20px;width:100%;
	}
	.top{
		height:120px;
		width:100%;
		background: url(/static/szt.jpg) ;
		background-position-y: -50px;
		background-size: cover;
	}

	header{
		position:fixed;top:0;height:45px;width:90%;display: flex;justify-content:space-between;
	}
	header span{
		height:25px;width:25px;background: #FFDC14;border-radius: 12px;margin-top:10px;text-align: center;line-height: 25px;color:#FFFFFF;
	}
	header span:nth-child(1){
		margin-left:10px;
	}
	.gd{
		margin-right:10px;
	}
	header div{
		color:#FFFFFF;line-height: 45px;
	}
	#detail{
		width:90%;border:2px solid #E8E6E6;border-radius: 40px;
		margin:-30px auto 0; background: #FFFFFF;overflow: hidden;display: flex;justify-content: space-around;
	}
	#detail-left img{
		display: block;width:38px;height:60px;
	}
	#detail-right p{
		float: left;width:90%;height:70px;font-size:14px;color:#D5D1D1;padding:8px;overflow: hidden;
		
	}
	.zl{
		margin:20px auto 0;overflow: hidden;width:90%;height:30px;display: flex;justify-content: space-around;
	}
	.yinshi{
		height:30px;width:150px;background:#FFDC14;border-radius: 5px;
		margin-left: 0px;float: left;
	}
	.yinshi span{
		display: block;height:18px;width:18px;background: #FFFFFF;border-radius: 50%;margin-left:20px;text-align: center;line-height: 18px;margin-top:5px;float: left;color:orange;
	}
	.yinshi h4{
		color:#FFFFFF;text-align: center;line-height: 30px;
	}
	.yundong{
		height:30px;width:150px;background:orangered;border-radius: 5px;
		margin-left: 20px;float: left;
	}
	.yundong span{
		display: block;height:18px;width:18px;background: #FFFFFF;border-radius: 50%;margin-left:20px;text-align: center;line-height: 18px;margin-top:5px;float: left;color:orange;
	}
	.yundong  h4{
		color:#FFFFFF;text-align: center;line-height: 30px;
	}
	.menu{
		width:90%;height:auto;margin:250px auto 0;
	}
	.menu .list{
		width:100%;height:auto;border:1px solid #D5D1D1;border-radius: 10px;margin-bottom: 20px;display: flex;
	}
	.list-left{float: left;}
	img{
		display: block;width:73px;height:73px;margin-top:10px;margin-left:10px;float: left;
	}
	.list-right{
		float: left;margin-left:10px;width:90%;
	}
	.list-right h4{
		float: left;margin-top:5px;font-size:14px;
	}
	.list-right span{
		float:right;margin-right: 20px;margin-top:5px;color:orangered;
	}
	.list p{
		width:90%;font-size:14px;color:#D5D1D1;border-bottom: 1px solid #D5D1D1;margin-top:30px;
	}
	.list b{
		font-weight: normal;color:#D5D1D1;margin-right:20px;
	}
</style>