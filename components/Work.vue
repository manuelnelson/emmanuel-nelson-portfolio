<template>
  <section class="work" id="work">
      <work-tile v-for="work in works" :key="work._id" :work="work"></work-tile>
  </section>

</template>
<script>
import works from "~/assets/data/work.json"
import WorkTile from "~/components/WorkTile.vue"
export default {
  data(){
    return {
      works:works 
    }
  },
  components:{
    WorkTile    
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables'
.work
  display: flex;
  flex-wrap: wrap;

  // @include bp-max($bp-tablet){
  //     .work-tile{
  //         width:50%;
  //         opacity: 1;
  //         .lead-content{
  //             z-index: 100;
  //             bottom:0;
  // }
  // .view{
  // a{
  //   visibility: visible;
  //   opacity:1;
  // }
  // }
  
  //         }
  //         .view{
  //             a{
  //                 visibility: visible;
  //                 opacity:1;
  //             }
  //         }

  //     }
  // }
  // @include bp-max($bp-between){
  //     .work-tile{
  //         width:100%;
  //         opacity: 1;
  //         overflow:visible;
  //     }
  // }


</style>
