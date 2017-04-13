<template>
    <div class="nav-wrapper">
        <h2 class="nav-title">我的标签</h2>
        <ul class="tab-ul">
            <li v-for="tab in tabName" class="tab-li">
                <h2>{{tab.name}}</h2>
                <ul class="list-ul">
                    <li v-for="(items, index) in tab.list" class="list-li">
                        <router-link v-if="items.to" :to="items.to" class="item">{{items.name}}</router-link>
                        <div v-else>
                            <h2 class="item" @click="showlist($event)">{{items.name}}<i class="dot">+</i></h2>
                            <ul class="inner-ul">
                                <li v-for="listDetail in items.listDetail" class="listDetail">
                                    <router-link :to="listDetail.to" class="detail">{{listDetail.name}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    /* eslint-disable */
    export default{
        data(){
            return {
                tabName:{},
            }
        },
        methods:{
            showlist($event){
                if($event.target.className=='item listshow'){
                    $event.target.parentNode.getElementsByClassName('inner-ul')[0].className='inner-ul';
                    $event.target.className='item';
                    $event.target.parentNode.getElementsByClassName('dot')[0].innerHTML='+';
                } else {
                    $event.target.parentNode.getElementsByClassName('inner-ul')[0].className='inner-ul show';
                    $event.target.className='item listshow';
                    $event.target.parentNode.getElementsByClassName('dot')[0].innerHTML='-';
                }
                ;
            }
        },
        created(){
            this.$http.get('./static/api/seller.json').then((res) => {
                var response = res.body;
                this.tabName = response.tabName;
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
.nav-wrapper{
    width:205px;
    float: left;
    margin-top: -34px;
    .nav-title{
        font-size: 18px;
        color: #55626e;
        font-weight: bold;
        padding:10px 0 3px;
        text-align: center;
        /*border-bottom: 5px solid #e8eee4;*/
        margin-bottom: 10px;
    }
    .tab-ul{
        overflow: hidden;
        border-radius: 3px;
        /*border: 1px dotted #eee;*/
        .tab-li{
            h2{
                font-size: 18px;
                font-weight: 500;
                height:36px;
                line-height: 36px;
                color: #55626e;
                background: rgba(183, 175, 138, 0.31);
                padding-left: 5px;
            }
            .list-ul{
                .list-li{
                    overflow: hidden;
                    border-bottom: 1px dotted #d4cdad;
                }
                .item{
                    color: #555;
                    font-size: 14px;
                    display: block;
                    height:28px;
                    line-height: 28px;
                    background: #e8eee4;
                    padding-left: 5px;
                    &:hover{
                        background: #e4e6e2;
                    }
                    .dot{
                        float: right;
                        margin-right: 10px;
                    }
                }
                .listDetail{
                    background:  #eff3eb;
                    height:28px;
                    line-height: 28px;
                    &:hover{
                        background: #e4e6e2;
                    }
                    .detail{
                        display: block;
                        font-size: 13px;
                        color: #7d7676;
                        padding-left: 20px;
                    }
                }
                .inner-ul{
                    display: none;
                    &.show{
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
