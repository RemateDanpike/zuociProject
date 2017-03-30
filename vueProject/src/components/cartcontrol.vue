<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease icon-minus" v-show="food.count>0" @click="decreaseCart($event)"></div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-plus" @click="addCart($event)"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    /* eslint-disable */
    export default{
        props:{
            food:{
                type:Object
            }
        },
        methods:{
            addCart(event){
                if(!event._constructed){
                    return;
                }
                if(!this.food.count){
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count++;
                }
                this.$emit('drop',event.target)
            },
            decreaseCart(){
                if(!event._constructed){
                    return;
                }
                if(this.food.count){
                    this.food.count--;
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.move-enter-active,.move-leave-active
    transition all .3s
.move-leave-active
    opacity 0
    transform translate3D(24px,0,0)
.move-enter
    opacity 0
    transform translate3D(40px,0,0)
    //transform rotate(180deg)
.cartcontrol
    font-size 0
    .cart-decrease
        display inline-block
        padding 6px
        &.icon-minus
            &:before
                padding 3px
                content: "\ea0b";
                font-size 10px
                width: 10px
                height:10px
                color: #fff
                background rgb(0,160,220)
                border-radius 50%
    .cart-count
        display inline-block
        padding 3px 6px
        font-size 15px
        height:12px
        min-width 18px
        text-align center
        line-height 12px
        color: #000
        font-weight 400
    .cart-add
        display inline-block
        padding 6px
        &.icon-plus
            &:before
                padding 3px
                content: "\ea0a";
                font-size 10px
                width: 10px
                height:10px
                color: #fff
                background rgb(0,160,220)
                border-radius 50%
</style>
