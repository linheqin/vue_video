<template>
	<div class="wrap">
		<mt-header fixed title="固定在顶部"></mt-header>
		<div class="container">
			<div class="isVip" v-if="isVip">
				<mt-cell title="标题文字">
					<img slot="icon" src="../../assets/logo.png" width="24" height="24">
				  	<span style="color: green"><mt-button type="primary">primary</mt-button></span>
				</mt-cell>
			</div>
			<div class="swriper_box">
				<mt-swipe :auto="4000">
				  	<mt-swipe-item>1</mt-swipe-item>
				  	<mt-swipe-item>2</mt-swipe-item>
				  	<mt-swipe-item>3</mt-swipe-item>
				</mt-swipe>	
			</div>
			<div class="video_item_tit">全部</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
	  	data () {
	    	return {
	      		msg: '首页',
	      		isVip: true
	    	}
	  	}
	}
</script>

<style>
	.nav_font {
		font-size:  16px;
		padding: 5px 0;
	}
	.swriper_box {
		 overflow: hidden;
    		position: relative;
		height: 160px;
		color: #fff;
		font-size: 30px;
		text-align: center;
		margin-bottom: 20px;
	}
	.mint-swipe-items-wrap>div:nth-child(1) {
		background-color: #0089dc;
    		color: #fff;
	}
	.mint-swipe-items-wrap>div:nth-child(2){
		background-color: #3489dc;
    		color: #fff;
	}
	.mint-swipe-items-wrap>div:nth-child(3) {
		background-color: #9989dc;
    		color: #fff;
	}

</style>