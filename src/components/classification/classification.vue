<template>
	<div class="wrap">
		<mt-header fixed title="固定在顶部"></mt-header>
		<div class="container">{{ msg }}</div>
	</div>
</template>

<script>
	export default {
		name: 'classification',
	  	data () {
		    	return {
		      	msg: '分类'
		    	}
	  	}
	}
</script>

<style>
</style>