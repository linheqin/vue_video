<template>
	<div class="wrap">
		<mt-header fixed title="固定在顶部"></mt-header>
		<div class="container">{{ msg }}</div>
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

</style>