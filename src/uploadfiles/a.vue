<template>

    <div class="bin-box">
        333
    </div>

</template>

<script setup lang='ts'>


</script>

<style scoped lang="scss">
@include b(box) {
    @include bfc;
    display: flex;
    @include e(right) {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 0;
    }
}
</style>