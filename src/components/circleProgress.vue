<style>
.svg { transform: rotate(-90deg); }
</style>
<template>
   <div class="circle-progress" :style="{width: circleWidth+'px',height: circleWidth + 'px'}">
        <svg :width="circleWidth" :height='circleWidth' class='svg'>
            <circle cx="50%" cy="50%" :r="round"
                    stroke="#eaeef2" 
                    :stroke-width="ringWidth" 
                    fill="none" />
            <circle cx="50%" cy="50%" :r="round"
                    stroke-linecap="round" 
                    :stroke="strokeColor"
                    :stroke-width="ringWidth" 
                    fill="none" 
                    :stroke-dasharray='dashArrayWidth.end'>
                <animate attributeName="stroke-dasharray"
                         :from="dashArrayWidth.start" 
                         :to="dashArrayWidth.end" dur="1s"/>
            </circle>
        </svg>
        <span 
            class="circle-progress-text"
            :style="{fontSize: circleWidth*25/200 + 'px'}" 
            v-show="showText !== false && !status">{{ count + '%' }} </span>
         <span
            :style="{fontSize: circleWidth*25/200 + 'px'}" 
            class="circle-progress-text circle-progress-success" v-show="status==='success'"><i class="fa fa-check"></i> </span>
         <span
            :style="{fontSize: circleWidth*25/200 + 'px'}" 
            class="circle-progress-text circle-progress-fail" v-show="status==='exception'">
             <i class="fa fa-times"></i>
         </span>
   </div>
</template>
<script>
    export default {
        data(){
            return {
                count: 0,
                ringWidth: 10,
                round: 80,
                strokeColor: '#2d8cf0',
                circleWidth: 200,
            }
        },
        props:['percentage','strokeWidth','status','color','showText','width'],
        computed: {
            dashArrayWidth: function () {
                //计算周长
                var line = 2 * Math.PI * this.round;
                let status = this.status;
                let percentage = this.percentage;
                if(status === 'success'){
                    percentage = 100;
                }
                return {
                    //stork-dasharray有两个参数，第一个代表虚线的宽度，第二个代表虚线两两的间隔
                    start: '0,' + line,//开始状态
                    end: line * (percentage / 100) + ',' + line * ((100 - percentage) / 100)//结束状态
                }
            }
        },
        methods: {
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
           setConfig(){
                let color = this.color;
                let strokeWidth = this.strokeWidth;
                let ringWidth = strokeWidth ? strokeWidth : 6;
                let width = this.width ? this.width :  this.circleWidth;
                let initColor = '#2d8cf0';
                let status = this.status;
                    if(status === 'success'){
                        initColor = "#67c23a";
                    }else if(status === 'exception'){
                        initColor = "rgb(255, 73, 73)";
                    }
                this.strokeColor = color ? color : initColor;
                this.ringWidth = ringWidth;
                this.round = width/2 - ringWidth * 2 - 10;
                this.circleWidth = width;
           } 
        },
        mounted(){
           this.getAnimationProgress();
           this.setConfig();
        }
    }
</script>

<style lang="less">
    .circle-progress {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
        .circle-progress-text {
          font-size: 20px;
          position: absolute;
          left: 40%;
          top: 45%;
        }
        .circle-progress-success {
            color: #67c23a;
            font-weight: 100;
            left: 45%;
            font-size: 25px;
        }
        .circle-progress-fail {
            color: rgb(255, 73, 73);
            font-weight: 100;
            top: 42%;
            left: 47%;
            font-size: 25px;
        }
    }

</style>

