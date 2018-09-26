<template>
	<div class="line-progress"
		 :style="{height: lineProgressHeight + 'px',lineHeight: lineProgressHeight + 'px',width: lineProgressWidth}">
		<div class="line-progress-bar" :class="status+'-progress'">
			<p  class="line-finish-progress" 
				:style="{width: percentage +'%'}">
				<span class="cline-finish-progress"
					:style="{background: color}">
					{{textInside ? count + '%' : ''}}
				</span>
			</p>
		</div>
		<span class="show-progress-text" v-show="showText !== false && !textInside">{{ count + '%'}}</span>
	</div>
</template>
<script>
	export default {
		name: "lineProgress",
		data(){
			return {
				lineProgressHeight: 6,
				lineProgressWidth: 300,
				count: 0
			}
		},
		methods: {
			setLineConfig(){
				let strokeWidth = this.strokeWidth;
				let textInside = this.textInside;
				let lineWidth = this.width;
				console.log(strokeWidth);
				if(textInside){
					strokeWidth = strokeWidth && strokeWidth > 16 ? strokeWidth : 20;
				}
				if(typeof lineWidth === "number"){
					lineWidth = lineWidth + 'px'
				}else if(lineWidth === 'auto'){
					lineWidth = '100%';
				}
				this.lineProgressHeight = strokeWidth ? strokeWidth : 6;
				this.lineProgressWidth = lineWidth ? lineWidth : '300px';
			},
			 getAnimationProgress(){
                let duration = 1000/this.percentage;
                let timer = setInterval(()=>{
                    if(this.count < this.percentage){
                        this.count++
                    }else {
                        clearInterval(timer);
                    }
                },duration)
           },
		},
		mounted(){
			this.setLineConfig();
			this.getAnimationProgress();
		},
		props:['percentage','strokeWidth','status','color','showText','width','textInside']
	}
	
</script>
<style lang="less" >
	.line-progress {
		position: relative;
		padding-right: 30px;
		box-sizing: border-box;
		height: 6px;
		line-height: 6px;
		.success-progress{
			.cline-finish-progress{
				background: #67c23a;
			}
		}
		.show-progress-text {
			position: absolute;
			right: 0;
			top: 0;
			font-size: 12px;
			vertical-align: middle;
		}
		.line-progress-bar {
			width: 100%;
			height: 100%;
			border-radius: 100px;
			background: #ebeef5;
		}
		@keyframes lineMove {
			from{
				opacity: 0.5;
				width: 0%;
			}
			to{
				opacity: 1;
				width: inherit;
			}

		}
		.line-finish-progress {
			height: 100%;
	
		}
		.cline-finish-progress {
			width: 100%;
			height: 100%;
			display: block;
			animation: lineMove 1s ease;
			border-radius: 100px;
			background: #409eff;
			text-align: right;
			color: #fff;
			padding-right: 10px;					
		}
		
	}

	
</style>