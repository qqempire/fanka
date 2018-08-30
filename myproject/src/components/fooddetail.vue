<template>
	<div id="fooddetail">
			<header>
					<div class="left">
						<router-link to='/dian'>
							<span class="iconfont icon-arrow_left_f"></span>								
						</router-link>
					</div>
					<div class="middle">菜品详情</div>
					<div class="right">
					<span class="iconfont icon-xin fr"></span>
							
					</div>
		  </header>
		
		<section>
			<br/><br/><br/>
			<div class="left">
					<span class="iconfont icon-dianpu"></span>
					<span>好吃的烧烤店</span>

			</div>
			
		 <h1 style="line-height: 40px;">多人餐</h1>
		 <p class="top_tit">
		 	<span class="new">新品</span>
		 	<span>随时退</span>|<span>免预约</span>|<span>过期自动退</span>
		 	<span class="fr">半年销量889</span>
		  </p>		
		 	
		 	<img src="../../static/fish.png" style="margin-top: 20px;"/>
		
				<h3>其他</h3>
			    <ul>
			    	<li>
			    		三元菜品<span>（8份）</span>
			    		<b class="fr">￥24</b>
			    	</li>
			    	<li>
			    		三元菜品<span>（8份）</span>
			    		<b class="fr">￥16</b>
			    		
			    	</li>
			    	<li>
			    		米饭<span>（4份）</span>
			    		<b class="fr">￥12</b>
			    		
			    	</li>
			    	<li>
			    		特色烧烤两盘<span>（2份）</span><i class="wy">网友推荐</i>
			    		<b class="fr">￥80</b>
			    		
			    	</li>
			    	
			    </ul>
			    <div class="bot">
			    	<h1 class="fl price">
			    		￥79
			    		<span>6折</span>
			    	   <p>门市最高价￥132</p>
			    	</h1>
			    	
			    	    <button class="buy fr">
			    	    	<router-link to='/ddxinxi'>
			    	    	立即抢购
			    	    	</router-link>
			    	    </button>
			    	
			    	
			    </div>
		</section>
                             
	</div>
</template>

<script>
	import $ from 'jquery'
	
	import {mapGetters,mapActions} from 'vuex';
	
	
	
	
	export default{
		name:'Fooddetail',
		data(){
			return{
				str:'菜品详情',
				msg:''
				
			}
		},
		mounted(){
            this.$emit("toparent",this.str)
        }
        
			
		
	}
</script>

<style scoped=''>
	header{height: 45px;width: 100%;background: #222222;display: flex;justify-content: space-between;position: fixed;top: 0;left: 0;z-index: 9999}
      header .left{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .middle{width: 60%;height: 45px;text-align: center;line-height: 45px;font-weight: bold;color: #fff;}
      header .right{width: 10%;height: 45px;text-align: center;line-height: 45px}
      header .left span{font-size: 26px;color: #fce452}
      header .right span{font-size: 20px;color: #fce452}
	body{color: #222;}
	*{margin: 0;padding: 0;font-family: "微软雅黑"}
      #home{padding:0 8px}
      img{display:block;width: 100%}
      .icon-dianpu{color: #999999;}
      .top_tit span{padding:0 3px; color: #999999;}
      .new{
      	width:75px;
      	height: 45px;
      	border:1px #ff9900 solid;
      	color: #ff9900;
      }
     .fr{float: right;}
     .fl{float: left;}
     h1,h2{font-weight: 900;}
     h3{margin-top: 30px;font-weight: 900;}
     ul li{line-height: 30px;}
     ul li span{font-size: 15px;color:#999999;}
     ul li b{font-weight: 100;}
     i{
     	font-style: normal;
     	border: 1px #ff9900 solid;
     	border-radius: 20px  20px  20px 5px;
     	color: #ff9900;
     	background: #fff9ed;
     	font-size: 12px;
     	padding: 3px;
     	}
     	.bot{
     		position: fixed;
     		bottom: 0;
     		width: 100%;
     		height: 90px;
     	}
     	.price{color: #ff9900;margin-top: 10px;}
     	.price span{border: 1px #ff9900 solid;padding:0 2px;font-size: 14px;margin-left: 5px;}
     	.price p{color: #999999;line-height: 40px;font-size: 15px;font-weight: 100;}
     	.buy{
     		width:130px;
     		height:50px;
     		color: white;
     		padding:5px 10px;
     		text-align: center;
     		line-height: 40px;
     		margin-top: 20px;
     		margin-left: 40px;
     		background: #ff9900;
     		border: 0;
     		font-size: 20px;
     		border-radius: 40px;
     		margin-bottom:50px;
     		}
</style>