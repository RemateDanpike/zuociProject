<template>
    <div class="wrap">
        <h3 class="title fadeLeft">深入理解javascript原型和闭包（1）——一切都是对象</h3>
        <h4  title="加粗小标题">“一切都是对象”这句话的重点在于如何去理解“对象”这个概念。</h4>
        <h5 title="正文">——当然，也不是所有的都是对象，值类型就不是对象。</h5>
        <h5 title="正文">首先咱们还是先看看javascript中一个常用的函数——typeof()。typeof应该算是咱们的老朋友，还有谁没用过它？<br>typeof函数输出的一共有几种类型，在此列出：</h5>
        <code>
            <img src="../../static/images/img1.png">
        </code>
        <h5>以上代码列出了typeof输出的集中类型标识，其中上面的四种（undefined, number, string, boolean）属于简单的值类型，不是对象。剩下的几种情况——函数、数组、对象、null、new Number(10)都是对象。他们都是引用类型。</h5>
        <h5>判断一个变量是不是对象非常简单。值类型的类型判断用typeof，引用类型的类型判断用instanceof。</h5>
    </div>
</template>

<script type="text/ecmascript-6">
    /* eslint-disable */
    export default{
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    *{
        font-family: 'PingFang SC','Helvetica Neue','Helvetica','Arial',sans-serif;
    }
    h3{
        /*大标题*/
        padding-bottom: 15px;
        border-bottom: 1px solid rgb(183, 175, 138);
        font-size: 18px;
        font-weight: 700;
        color: #565651;
        transition:all .6s ease-out;
        cursor: Default;
        &:hover{
            text-indent: 50px;
            color: #f60;
        }
    }
    h4{
        /*加粗小标题*/
        font-size: 14px;
        font-weight: 600;
        padding:15px 0;
    }
    h5{
        /*正文*/
        line-height: 25px;
        font-size: 14px;
        font-weight: 400;
    }
    code{
        border:1px solid #b7af8a;
        padding:10px;
        display: inline-block;
        max-width: 674px;
        margin:10px 0;
        overflow: hidden;
        background: #f5f5f5;
        img{
            max-width: 674px;
        }
    }


    .wrap{
        padding:15px;
    }
</style>

