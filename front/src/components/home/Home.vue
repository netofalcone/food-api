<template>

<div > 
<Customer name ="Nome" :value="customer.name" />
<Customer email ="email" :value="customer.email" />

</div>

    
</template>

<script>

import Customer from './Customer'
import axios from 'axios'
import {baseApiURL} from '@global'

export default {

    name: 'Home',
    components: {Customer},
    data: function(){
        return {
           customer: {} 
        }
    }, 
    methods: {
        getCustomers() {
            axios.get(`${baseApiURL}/customers`).then(res => this.customer = res.data)
        }
    },

    mounted() {
        this.getCustomers()
    }

}
</script>

<style>

</style>
