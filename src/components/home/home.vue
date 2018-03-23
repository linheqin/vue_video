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
			<div class="video_item_tit">{{msg}}</div>

			<allLists @upup="change" :msgs="msgs"></allLists>
			<flLists @blur="change" :msgs1="msgs1"></flLists>
		</div>
	</div>
</template>

<script>
 	import allLists from './all-list/all-list';
 	import flLists from './fl-list/fl-list';

	export default {
		name: 'home',
		components:{ allLists,flLists },
	  	data () {
	    	return {
	      		msg: '首页',
	      		msgs: "我就是从父级来的！",
	      		msgs1: "子组件",
	      		isVip: true
	    	}
	  	},
	  	mounted: function () {
	  		console.log(this.commonJs);
			this.$ajax.get(this.apiUrl.userInfo).then(function (response) {
			    console.log(response);
			}).catch(function (response) {
			    console.log(response);
			});
	    },
	  	methods:{
            parent(){
                this.$.refs.child.childFn()
            },
            change(msg) {
		        this.msg = msg;
		        this.msgs1 = "我是从兄弟来的";
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