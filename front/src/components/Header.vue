<template>

<header class="header"> 
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
        <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">

            {{title}}

        </h1>
</header>
    
</template>

<script>
export default {
    name: 'Header',
    props:{
        title: String,
        hideToggle: Boolean
    },
    computed:{
        icon() {
            return "fa-angle-left"
        }    
    }, 
    methods: {
        toggleMenu(){
          
        }
    }
}

</script>

<style>

    .header {
      grid-area:header;
      background: linear-gradient(to right, #f84c17,  #f8b117);

      display: flex;
      justify-content: center;
      align-items: center;
    }


    .title {
        font-size: 1.2em;
        color:lavender;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

</style>

