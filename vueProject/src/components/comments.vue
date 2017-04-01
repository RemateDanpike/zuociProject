<template>
   <div class="ratings" ref="ratingscroll">
       <div class="ratings-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview-right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <v-star :size="36" :score="seller.serviceScore" :percent="2"></v-star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">商品评分</span>
                        <v-star :size="36" :score="seller.foodScore" :percent="2"></v-star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="delivery">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
           <v-split></v-split>
           <v-ratingselect @ratingSelectType="ratingSelectType" @contentToggle="contentToggle" :selectType="selectType" :onlyContent="onlyContent" :ratings="ratings"></v-ratingselect>
           <div class="rating-wrapper">
               <ul  v-show="ratings && ratings.length">
                   <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in ratings" class="rating-item border-1px">
                       <div class="avatar">
                           <img width="28" height="28" :src="rating.avatar">
                       </div>
                       <div class="content">
                           <h1 class="name">{{rating.username}}</h1>
                           <div class="star-wrapper">
                               <v-star :size="36" :score='rating.score' :percent="2"></v-star>
                           </div>
                           <p class="text">{{rating.text}}</p>
                           <!--<div class="recommend"></div>-->
                           <div class="time">{{rating.rateTime | formatDate}}</div>
                       </div>
                   </li>
               </ul>
               <div class="no-rating" v-show="!ratings || !ratings.length">暂无评价</div>
           </div>
       </div>
   </div>
</template>
<script>
    /* eslint-disable */
    import BScroll from "better-scroll";
    import star from './star.vue';
    import split from './split.vue';
    import ratingselect from './ratingselect.vue';
    const POSITIVE = 0;
    const NEGATIVE = 1;
    const ALL = 2;
    export default {
        props:{
            seller:{
                type:Object
            }
        },
        methods:{
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
        filters:{
            formatDate(time,a){
                var date = new Date(time);
                return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
            }
        },
        data(){
            return {
                ratings:[],
                selectType:ALL,
                onlyContent:true
            }
        },
        created() {
            this.$http.get('/static/api/seller.json').then((res) => {
                var response = res.body;
                this.ratings = response.ratings;
                this.$nextTick(() => {
                    this.ratingScroll = new BScroll(this.$refs.ratingscroll,{
                        click:true
                    })
                })
            })
        },
        components:{
            'v-star':star,
            'v-split':split,
            'v-ratingselect':ratingselect
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../static/border_1px.styl"
.ratings
    position absolute
    top: 174px
    bottom:0
    left: 0
    width:100%
    overflow hidden
    .overview
        display flex
        padding:18px 0
        .overview-left
            flex 0 0 137px
            padding 6px 0
            width:137px
            text-align center
            border-right 1px solid rgba(7,17,27,.2)
            @media screen and (max-width: 320px){
                flex 0 0 120px
                width:120px
            }
            .score
                line-height 28px
                margin-bottom 6px
                font-size 24px
                color: orangered
            .title
                line-height 12px
                font-size 12px
                margin-bottom 8px
                color: rgb(7,17,27)
            .rank
                font-size 10px
                line-height: 10px
                color: rgb(147,153,159)
        .overview-right
            flex:1
            padding 6px 0 6px 24px
            @media screen and (max-width: 320px){
                padding 6px 0 6px 6px
            }
            .score-wrapper
                margin-bottom 8px
                line-height 18px
                font-size 0
                .title
                    display inline-block
                    vertical-align top
                    line-height 18px
                    font-size 12px
                    color: rgb(7,17,27)
                .star
                    display inline-block
                    vertical-align top
                    margin:0 12px
                    .icon-star-full
                        &:before
                            font-size 12px
                            padding 0 2px
                            line-height 18px
                .score
                    display inline-block
                    vertical-align top
                    line-height 18px
                    font-size 12px
                    color: rgb(255,153,0)
            .delivery-wrapper
                font-size 0
                .title
                    line-height 18px
                    font-size 12px
                    color: rgb(7,17,27)
                .delivery
                    font-size 12px
                margin-left 17px
    .rating-wrapper
        padding:0 18px
        .no-rating
            padding:16px 0
            font-size 12px
            color: rgb(147,153,159)
        .rating-item
            display flex
            padding:18px 0
            border-1px(rgba(7,17,27,.1))
            .avatar
                flex 0 0 28px
                width:28px
                margin-right 12px
                img
                    border-radius 50%
            .content
                position relative
                flex:1
                .name
                    margin-bottom 4px
                    line-height 12px
                    font-size 10px
                    color: rgb(7,17,27)
                .star-wrapper
                    margin-bottom 6px
                    font-size 0
                    .star
                        display inline-block
                        margin-right 6px
                        vertical-align top
                        .icon-star-full
                            &:before
                                font-size 12px
                                padding 5px
                                margin-left -5px
                                line-height 12px


                .text
                    line-height 18px
                    color: rgb(7,17,27)
                    font-size 12px
                    margin-bottom 5px
                .time
                    font-size 12px
                    line-height 18px
</style>
