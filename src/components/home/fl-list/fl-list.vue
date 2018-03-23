<template>
	<div class="fl-list">{{msg}} --- {{ msgs1 }}</div>
</template>

<script>
	export default {
		name: 'fl-list',
		props: {
		    msgs1: {
		        type: String,
		        default: "" //这样可以指定默认的值
		    }
		},
		mounted() {

		  	this.$on('blur', (msgs) => { 
		  		console.log(msgs);
		        this.msgs = msgs; // 接收数据
		    });
		},
	  	data () {
	    	return {
	      		msg: '我是分类的'
	    	}
	  	}
	}
</script>

<style>


</style>	