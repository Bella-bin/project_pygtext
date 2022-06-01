<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Link></Link>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Link from '@/pages/Home/Link'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name: "HomeRoute",
  components:{
    ListContainer,
    Recommend,
    Rank,
    Link,
    Floor, 
    Brand 
  },
  mounted() {
   this.$store.dispatch('Home/getFloorList');
  },
  computed:{
    ...mapState('Home',['floorList'])
  }
};
</script>
<style>
</style>