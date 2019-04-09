<template>
<div class="Customer-info">

    <span class="customer-name">{{name}}</span>
     <span class="customer-name">{{email}}</span>
</div>

    
</template>

<script>
export default {

    name: 'Customer',
    props: ['name', 'email']

}
</script>

<style>

</style>
