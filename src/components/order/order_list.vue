<template>
		<div class="wrap">
			<mt-header fixed title="固定在顶部"></mt-header>
			<div class="container">{{ msg }}</div>
		</div>
</template>

<script>
	export default {
		name: 'order',
	  	data () {
		    	return {
		      	msg: '订单列表'
		   	}
	  	}
	}
</script>
	
<style>
</style>