<template>
    <div class="seller" ref="sellerscroll">
        <div class="seller-content">
            <div class="overview">
                <h1 class="title">{{seller.name}}</h1>
                <div class="desc border_1px">
                    <v-star class="star" :size="36" :score='seller.score' :percent="2"></v-star>
                    <span class="text">({{seller.ratingCount}})</span>
                    <span class="text">月售{{seller.sellCount}}单</span>
                </div>
                <ul class="remark">
                    <li class="block">
                        <h2>起送价</h2>
                        <div class="content">
                            <span class="stress">{{seller.minPrice}}</span>元
                        </div>
                    </li>
                    <li class="block">
                        <h2>商家配送</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryPrice}}</span>元
                        </div>
                    </li>
                    <li class="block">
                        <h2>平均配送时间</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryTime}}</span>分钟
                        </div>
                    </li>
                </ul>
            </div>
            <v-split></v-split>
            <div class="bulletin">
                <h1 class="title">公告与活动</h1>
                <div class="content-wrapper border-1px">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
            </div>
            <ul v-if="seller.supports" class="supports">
                <li class="support-item" v-for="(item,i) in seller.supports">
                    <span class="icon" :class="">{{iconMap[i]}}</span>
                    <span class="text">{{item.description}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    /* eslint-disable */
    import BScroll from "better-scroll";
    import star from './star.vue';
    import split from './split.vue';
    export default {
        data() {
            return {
                iconMap:['减','付','评']
            }
        },
        props:{
            seller:{
                type:Object
            }
        },
        watch:{
            'seller':function(){
                setTimeout(this._initScroll,100)
//                this._initScroll();
            }
        },
        mounted(){
//            console.log(this.seller)
            this._initScroll();
        },
        methods:{
            _initScroll(){
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.sellerscroll,{
                        click:true
                    })
                } else {
                    this.scroll.refresh();
                }
            }
        },
        components:{
            'v-star':star,
            'v-split':split
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../static/border_1px.styl"
.seller
    position absolute
    top: 174px
    bottom:0
    left: 0
    width:100%
    overflow hidden
    .overview
        padding 18px
        .title
            font-size 14px
            margin-bottom 8px
            line-height 14px
            color: rgb(7,17,27)
        .desc
            line-height 18px
            font-size 0
            border-1px(rgba(7,17,27,.1))
            padding 14px 0
            .star
                display inline-block
                vertical-align top
                margin-right:8px
                margin-left -6px
                .icon-star-full
                    &:before
                        font-size 18px
                        padding 0 2px
                        line-height 15px
            .text
                margin-right 12px
                vertical-align top
                display inline-block
                font-size 10px
                color: rgb(77,85,93)
        .remark
            display flex
            padding-top 18px
            .block
                flex 1
                text-align center
                border-right 1px solid rgba(7,17,27,.1)
                &:last-child
                    border none
                h2
                    font-size 10px
                    color: rgb(147,153,159)
                    margin-bottom 4px
                    line-height 10px
                .content
                    line-height 24px
                    font-size 10px
                    color: rgb(7,17,27)
                    .stress
                        font-size 24px
    .bulletin
        padding 18px 18px 0 18px
        .title
            font-size 14px
            margin-bottom 8px
            line-height 14px
            color: rgb(7,17,27)
        .content-wrapper
            padding:0 12px 16px 12px
            border-1px(rgba(7,17,27,.1))
            .content
                line-height 24px
                font-size 12px
                color: rgb(7,17,27)
    .supports
        margin:18px 10px
        padding-bottom 18px
        .support-item
            padding:6px 12px
            margin-bottom 12px
            font-size 12px
            &:last-child
                margin-bottom 0
                .icon
                    background red
            &:nth-child(1)
                .icon
                    background #1B9BD8
            .icon
                text-align center
                display inline-block
                line-height 14px
                width: 14px
                height: 14px
                color: #fff
                margin-right 6px
                background green
</style>
