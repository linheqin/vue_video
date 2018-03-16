<template>
	<div class="wrap">
		<mt-header fixed title="我的订单"></mt-header>
		<div class="container">
			<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange"  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
					<ul class="page-loadmore-list">
						<li v-for="item in list" class="page-loadmore-listitem">
							<div class="card facebook-card">
							    <div class="card-header no-border">
							      	标题
							    	</div>
							    	<div class="card-content"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="100%"></div>
							    	<div class="card-footer no-border">
							      	<a href="#" class="link">赞</a>
							      	<a href="#" class="link">评论</a>
							      	<a href="#" class="link">分享</a>
							    	</div>
							</div>
						</li>
					</ul>
					<div slot="top" class="mint-loadmore-top">
						<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
						<span v-show="topStatus === 'loading'">
						<mt-spinner type="snake"></mt-spinner>
						</span>
					</div>
					<div slot="bottom" class="mint-loadmore-bottom">
				          	<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
				          	<span v-show="bottomStatus === 'loading'">
				            	<mt-spinner type="snake"></mt-spinner>
				          	</span>
				       </div>
				</mt-loadmore>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    	data() {
	      return {
	        	list: [],
	        	topStatus: '',
	        	wrapperHeight: 0,
	        	translate: 0,
	        	moveTranslate: 0,
	        	allLoaded: false,
        		bottomStatus: '',
	      };
    	},
    	methods: {
	      handleTopChange(status) {
	        	this.moveTranslate = 1;
	        	this.topStatus = status;
	      },
	      translateChange(translate) {
	        	const translateNum = +translate;
	        	this.translate = translateNum.toFixed(2);
	        	this.moveTranslate = (1 + translateNum / 70).toFixed(2);
	      },
	      loadTop() {
	      	setTimeout(() => {
		          	let firstValue = this.list[0];
		          	console.log(firstValue);
		          	for (let i = 1; i <= 3; i++) {
		            	this.list.unshift(firstValue - i);
		          	}
	          		this.$refs.loadmore.onTopLoaded();
	          		console.log("向上刷新代码成功！");
	        	}, 1500);
	      },
	      handleBottomChange(status) {
	        	this.bottomStatus = status;
	      },
	      loadBottom() {
	        	setTimeout(() => {
		          	let lastValue = this.list[this.list.length - 1];
		          	if (lastValue < 40) {
			            for (let i = 1; i <= 3; i++) {
			              	this.list.push(lastValue + i);
			            }
		          	} else {
		            	this.allLoaded = true;
		          	}
		          	this.$refs.loadmore.onBottomLoaded();
		          	console.log("向下刷新代码成功！");
	        	}, 1500);
	      }
    	},
    	created() {
	      for (let i = 1; i <= 2; i++) {
	        	this.list.push(i);
	        	console.log("初始订单列表");
	      }
    	},
    	mounted() {
      	this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    	}
  };
</script>
	
<style>
	
	@component-namespace page {
	    	@component loadmore {
		      width: 100%;
		      overflow-x: hidden;
		
		      @descendent desc {
		        	text-align: center;
		        	color: #666;
		        	padding-bottom: 5px;
		       	 &:last-of-type {
		          		border-bottom: solid 1px #eee;
		        	}
		      }
		
		      @descendent listitem {
		        	height: 50px;
		        	line-height: 50px;
		        	border-bottom: solid 1px #eee;
		        	text-align: center;
		        	&:first-child {
			          	border-top: solid 1px #eee;
			        }
		      }
		
		      @descendent wrapper {
		        	margin-top: -1px;
		        	overflow: scroll;
		      }
		
		      .mint-spinner {
		       	display: inline-block;
		       	vertical-align: middle;
		      }
	    	}
	  }
  	@component loading-background{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		transition: .2s linear;
  	}
  	@component mint-loadmore-top {
	    	span {
			display: inline-block;
			transition: .2s linear;
			vertical-align: middle;
	
		      @when rotate {
		        	transform: rotate(180deg);
		      }
    		}
  	}
  	@component mint-loadmore-bottom {
	    	span {
		      display: inline-block;
		      transition: .2s linear;
		      vertical-align: middle;
		
		      @when rotate {
		       	 transform: rotate(180deg);
		      }
	    	}
    	}
  	.card {
  		margin: 0;
  		margin-bottom: 10px;
  	}
</style>