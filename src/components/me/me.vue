<template>
	<div class="wrap">
		<mt-header fixed title="固定在顶部"></mt-header>
		<div class="container">{{ msg }}</div>
	</div>
</template>

<script>
	export default {
		name: 'me',
	  	data () {
		    	return {
		      	msg: '我的'
		    	}
	  	}
	}
</script>

<style>
</style>