<script setup>
import { RouterLink, RouterView, useRouter} from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template v-if="backgrounds[3] == 'technology'">
  <div class = "wrapper" :class="backgrounds[curBackground]">
    <NavBar @changeNav="changeBackground($event)"/>
    <RouterView />
  </div>
</template>

<script>
  export default {
  
  data() {
    return {
      curBackground: 0,
      backgrounds:['home', 'destination', 'crew', 'technology']
    }
  },
  created(){
    this.backgrounds =['home', 'destination', 'crew', 'technology']
    console.log(this.backgrounds)
  },

  methods: {
    changeBackground(num) {
      this.curBackground = num;
    },
    getBackground(){
      if(this.currentRouteName == 'destination'){
        this.curBackground = 1;
      }else if(this.currentRouteName == 'crew'){
        this.curBackground = 2;
      }else if(this.currentRouteName == 'technology'){
        this.curBackground = 3;
      }
    }
  },

  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  async mounted() {
    const router = useRouter();
    await router.isReady()
    this.getBackground();
  }
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 12rem 1fr 10rem;
  place-items: center;
  overflow-x: hidden;
}
.home{
  background-image: url(assets/home/background-home-desktop.jpg);
  background-size: cover;
}
.destination{
  background-image: url(assets/destination/background-destination-desktop.jpg);
  background-size: cover;
}
.crew{
  background-image: url(assets/crew/background-crew-desktop.jpg);
  background-size: cover;
}
.technology{
  background-image: url(assets/technology/background-technology-desktop.jpg);
  background-size: cover;
}
/*********

tablet


*/
@media (max-width: 768px){
  .wrapper{
    grid-template-columns: 1fr;
    grid-template-rows: 10vh 1fr 1fr;
  }
  .home{
    background-image: url(assets/home/background-home-tablet.jpg);
  }
  .destination{
    background-image: url(assets/destination/background-destination-tablet.jpg);
  }
  .crew{
    background-image: url(assets/crew/background-crew-tablet.jpg);
  }
  .technology{
    background-image: url(assets/technology/background-technology-tablet.jpg);
  }
}
@media (max-width: 375px){
  .home{
    background-image: url(assets/home/background-home-mobile.jpg);
  }
  .destination{
    background-image: url(assets/destination/background-destination-mobile.jpg);
  }
  .crew{
    background-image: url(assets/crew/background-crew-mobile.jpg);
  }
  .technology{
    background-image: url(assets/technology/background-technology-mobile.jpg);
  }
}

</style>
