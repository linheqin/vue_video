<template>
	<div class="wrap">
		<mt-header fixed title="固定在顶部"></mt-header>
		<div class="container">
			<div class="swriper_box">
				<mt-swipe :auto="4000">
				  	<mt-swipe-item>1</mt-swipe-item>
				  	<mt-swipe-item>2</mt-swipe-item>
				  	<mt-swipe-item>3</mt-swipe-item>
				</mt-swipe>	
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
	  	data () {
		    	return {
		      	msg: '首页'
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