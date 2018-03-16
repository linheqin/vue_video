<template>
<div id="app">
	<router-view/>
	<mt-tabbar v-model="selected" fixed>
		<mt-tab-item id="首页">
			<router-link to="/">
				<div class="nav_font">
					<i class="fa fa-home"></i>
				</div>
				首页
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="订单">
			<router-link to="/order">
				<div class="nav_font">
					<i class="fa fa-list"></i>
				</div>
				订单
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="分类">
			<router-link to="/classification">
				<div class="nav_font">
					<i class="fa fa-th-large"></i>
				</div>
				分类
			</router-link>
		</mt-tab-item>
		<mt-tab-item id="我的">
			<router-link to="/me">
				<div class="nav_font">
					<i class="fa fa-user"></i>
				</div>
				我的
			</router-link>
		</mt-tab-item>
	</mt-tabbar>
</div>
</template>
<script>
	export default {
		name: 'App',
		data () {
		    return {
		      	selected: '首页'
		    }
	  	}
	}
</script>
<style>
	.mint-tabbar > .mint-tab-item a {
		display: block;
		text-decoration: none;
		color: #777;;
	}
	.mint-tabbar > .mint-tab-item.is-selected a {
		color: #26a2ff;
	}
	html,body,#app,.wrap {
		height: 100%;
		padding:  0;
		margin: 0;
		overflow: hidden;
	}
	.container {
		position: absolute;
		left: 0;
		top: 40px;
		bottom: 52px;
		right: 0;
	    overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
</style>