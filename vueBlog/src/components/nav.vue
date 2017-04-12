<template>
    <div class="nav-wrapper">
        <h2 class="nav-title">我的标签</h2>
        <ul class="tab-ul">
            <li v-for="tab in tabName" :class="tab.className" class="tab-li">
                <h2>{{tab.name}}</h2>
                <ul class="list-ul">
                    <li v-for="items in tab.list" class="list-li">
                        <router-link :to="items.to" class="item">{{items.name}}</router-link>
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
                tabName:{}
            }
        },
        created(){
            this.$http.get('./static/api/seller.json').then((res) => {
                var response = res.body;
                this.tabName = response.tabName;
                console.log(this.tabName );
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
                }
            }
        }
    }
}
</style>
