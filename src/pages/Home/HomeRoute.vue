<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Link></Link>
    <Floor></Floor>
    <Floor></Floor>
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
export default {
  name: "HomeRoute",
  components:{
    ListContainer,
    Recommend,
    Rank,
    Link,
    Floor, 
    Brand 
  }
};
</script>
<style>
</style>