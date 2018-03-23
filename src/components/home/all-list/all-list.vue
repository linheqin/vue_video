<template>
	<div class="all-list">{{msg}} --- {{ msgs }} <button @click="childFn">点击</button></div>
</template>

<script>
	export default {
		name: 'all-list',
		props: {
		    msgs: {
		        type: String,
		        default: "" //这样可以指定默认的值
		    }
		},
	  	data () {
	    	return {
	      		msg: '我是所有的'
	    	}
	  	},
        methods:{
            childFn(){
            	 this.$emit('blur','dadasd'); //触发事件
                 this.$emit('upup','我点击了子组件，父组件要改变吗？');
            }
        }
	}
</script>

<style>


</style>	