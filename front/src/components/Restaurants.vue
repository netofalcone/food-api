<template>

 
</template>

<script>
export default {

      name: "RestaurantList",
       data: function() {
       return {
        restaurants: []    

  }  ;
  },
  created: function() {
      axios 
      .get("http://localhost:3000/restaurants") 
       .then(response => {
        this.restaurants = response.data;    })  
         .catch(e => {  
         console.log("error");  
         }
        
         )
}
}
</script>

<style>

</style>
