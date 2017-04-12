<template>
    <div>closure</div>
</template>

<script type="text/ecmascript-6">
    /* eslint-disable */
    export default{
        created(){
            this.$http.get('./static/api/seller.json').then((res) => {
                console.log(1)
            })
        }
    }
</script>

