<template>
    <transition name="move">
        <div v-show="showFlag" class="food" ref="foodscroll">
            <div class="food-content">
                <div class="image-header">
                    <img :src="food.image">
                    <i class="left-back" @click="hide"><</i>
                </div>
                <div class="content">
                    <h1 class="title">{{food.name}}</h1>
                    <div class="detail">
                        <span class="sell-count">月售{{food.sellCount}}份</span>
                        <span class="rating">好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                        <span class="now">￥{{food.price}}</span>
                        <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                        <v-cartcontrol :food="food" v-show="food.count>0"></v-cartcontrol>
                    </div>
                    <div @click="addFirst($event)" class="buy" v-show="!food.count | food.count===0">加入购物车</div>
                </div>
                <v-split v-show="food.info"></v-split>
                <div class="info" v-show="food.info">
                    <h1 class="title">商品信息</h1>
                    <p class="text">{{food.info}}</p>
                </div>
                <v-split></v-split>
                <div class="rating">
                    <h1 class="title">商品评价</h1>
                    <v-ratingselect @ratingSelectType="ratingSelectType" @contentToggle="contentToggle" :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings"></v-ratingselect>
                    <div class="rating-wrapper">
                        <ul v-show="food.ratings && food.ratings.length">
                            <li v-show="needShow(rating.rateType,rating.text)" class="rating-item" v-for="rating in food.ratings">
                                <div class="user">
                                    <span class="name">{{rating.username}}</span>
                                    <img class="avatar" width="12" height="12" :src="rating.avatar">
                                </div>
                                <div class="time">{{rating.rateTime | formatDate}}</div>
                                <p class="text">
                                    <span :class="{'icon-smile':rating.rateType===0,'icon-sad':rating.rateType===1}">{{rating.text}}</span>
                                </p>
                            </li>
                        </ul>
                        <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    /* eslint-disable */
    import Vue from 'vue';
    import BScroll from "better-scroll";
    import cartcontrol from './cartcontrol.vue';
    import split from './split.vue';
    import ratingselect from './ratingselect.vue';

    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2;
    export default{
        props:{
            food:{
                type:Object
            }
        },
        data(){
            return {
                showFlag:false,
                selectType:ALL,
                onlyContent:true,
                desc:{
                    all:'全部',
                    positive:'推荐',
                    negative:'吐槽'
                }
            }
        },
        filters:{
            formatDate(time,a){
                var date = new Date(time);
                return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            }
        },
        methods:{
            show() {
                this.showFlag = true;
                this.selectType = ALL;
                this.onlyContent = false;
                this.$nextTick(()=>{
                    if(!this.scroll){
                        this.scroll = new BScroll(this.$refs.foodscroll,{
                            click:true
                        })
                    } else {
                        this.scroll.refresh();
                    }
                })
            },
            hide(){
                this.showFlag = false;
            },
            addFirst(event){
                if(!event._constructed){
                    return;
                }
                Vue.set(this.food,'count',1)
            },
            needShow(type,text){
                if(this.onlyContent &&!text){
                    return false;
                }
                if(this.selectType === ALL){
                    return true;
                } else {
                    return type === this.selectType;
                }
            },
            ratingSelectType(type){
                this.selectType = type;
                this.$nextTick(()=>{
                    this.scroll.refresh();
                });
            },
            contentToggle(onlyContent){
                this.onlyContent = onlyContent;
                this.$nextTick(()=>{
                    this.scroll.refresh();
                });
            }
        },
        components:{
            'v-cartcontrol':cartcontrol,
            'v-split':split,
            'v-ratingselect':ratingselect
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../static/border_1px.styl"
.food
    position fixed
    top:0
    left:0
    bottom: 48px
    width:100%
    z-index 30
    background #fff
    &.move-transition
        transition all .2s linear
        transform translate3d(0,0,0)
    &.move-enter,&.move-leave-active
        transform translate3d(100%,0,0)
    .image-header
        position relative
        width: 100%
        height: 0
        padding-top 100%
        .left-back
            position absolute
            left: 5px
            top: 5px
            width: 30px
            height: 30px
            text-align center
            line-height 26px
            font-size 20px
            color: #fff
            font-weight 700
            border: 1px solid #eee
            background #000
            border-radius 100%
        img
            position absolute
            max-height 100%
            width:auto
            max-width 100%
            top:0
            left:0
            bottom 0
            right:0
            margin:auto
    .content
        position relative
        padding:18px
        .title
            font-size 14px
            font-weight 700
            margin-bottom 8px
            line-height 14px
            color: rgb(7,17,27)
        .detail
            margin-bottom 18px
            line-height 10px
            font-size 0
            height:10px
            .sell-count,.rating
                font-size 10px
                color: rgb(147,153,159)
            .sell-count
                margin-right 12px
        .price
            font-weight 700
            line-height 24px
            .now
                margin-right 8px
                font-size 14px
                color rgb(240,20,20)
            .old
                text-decoration line-through
                font-size 10px
                color: rgb(147,153,159)

    .cartcontrol-wrapper
        position absolute
        right 12px
        bottom:12px
    .buy
        position absolute
        right 18px
        bottom:18px
        z-index 10
        height:24px
        line-height 24px
        padding:0 12px
        box-sizing border-box
        border-radius 12px
        font-size 12px
        color: #fff
        background rgb(0,160,220)
    .info
        padding: 18px
        .title
            line-height 14px
            margin-bottom 6px
            font-size 14px
            color: rgb(7,17,27)
        .text
            line-height 24px
            font-size 12px
            color: rgb(77,85,93)
            padding:0 8px
    .rating
        padding-top 18px
        .title
            line-height 14px
            margin-left 18px
            font-size 14px
            color: rgb(7,17,27)
        .rating-wrapper
            padding:0 18px
            .rating-item
                position relative
                padding:16px 0
                border-1px(rgba(7,17,27,.1))
                .user
                    position absolute
                    right:0
                    top:16px
                    line-height 12px
                    font-size 0
                    .name
                        display inline-block
                        vertical-align top
                        margin-right 6px
                        font-size 10px
                        color: rgb(147,153,159)
                    .avatar
                        border-radius 50%
                .time
                    margin-bottom 6px
                    line-height 12px
                    font-size 10px
                    color: rgb(147,153,159)
                .text
                    line-height 16px
                    color:rgb(7,17,27)
                    font-size 12px
                    .icon-smile:before
                        content: "\e9e1";
                        font-size 12px
                        margin-right 4px
                        line-height 16px
                        color: rgb(0,160,220)
                    .icon-sad:before
                        content: "\e9e5";
                        font-size 12px
                        margin-right 4px
                        line-height 16px
                        color: rgb(147,153,159)
            .no-rating
                padding:16px 0
                font-size 12px
                color: rgb(147,153,159)
</style>
