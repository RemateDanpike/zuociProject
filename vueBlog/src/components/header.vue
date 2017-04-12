<template>
<div>
    <header>
        <h2>RemateDanpike</h2>
        <ul class="nav">
            <li><a href="">博客</a></li>
            <li><a href="https://remate.github.io/myresume/">首页</a></li>
            <li><a href="
https://github.com/remate">github</a></li>
            <li></li>
        </ul>
    </header>
</div>
</template>

<script type="text/ecmascript-6">
    /* eslint-disable */
    export default{}
</script>

<style lang="scss" rel="stylesheet/scss">
header {
    height: 280px;
    background: url("../../src/images/top.jpg") no-repeat;
    background-size: 100%;
    overflow: hidden;
    h2 {
        font-size: 36px;
        font-family: '微软雅黑,幼圆,微软雅黑,微软雅黑';
        margin-top: 180px;
    }
    .nav{
        margin-left: 50px;
        margin-top: 10px;
        li{
            float: left;
            margin-right: 30px;
            font-size: 14px;
            color: #555;
            a{
                display: inline-block;
                color: #555;
                padding:5px 10px;
            }
        }
    }
}
</style>
