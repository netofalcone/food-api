<template>
    <aside class="menu"> </aside>
</template>

<script>
export default {
    name: 'Menu'

}
</script>

<style>
.menu {
    grid-area:menu;
    background: linear-gradient(to right, #c4c0bf, #ffffff);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>
