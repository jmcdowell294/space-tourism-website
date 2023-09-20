<template>
  <div class = "icon">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-center" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path fill="rgba( 11, 13, 23, 1)" d="M100 0c3.395 53.76 46.24 96.605 100 100-53.76 3.395-96.605 46.24-100 100-3.395-53.76-46.24-96.605-100-100C53.76 96.605 96.605 53.76 100 0Z"></path></svg>
  </div>
  <div class = "rectangle"></div>
  <input v-if="screenWidth <= 375" type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
  <label v-if="screenWidth <= 375" for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  <div class = "bar" id="sidebarMenu">
    <div class = "baritem" :class="{active: curNav == 0}" @click="$router.push('/'); this.changeNav(0)">
      <div class = "bold">00</div> HOME
    </div>
    <div class = "baritem" :class="{active: curNav == 1}" @click="$router.push('/destination'); this.changeNav(1)">
      <div class = "bold">01</div> DESTINATION
    </div>
    <div class = "baritem" :class="{active: curNav == 2}" @click="$router.push('/crew'); this.changeNav(2)">
      <div class = "bold">02</div> CREW
    </div>
    <div class = "baritem" :class="{active: curNav == 3}" @click="$router.push('/technology'); this.changeNav(3)">
      <div class = "bold">03</div> TECHNOLOGY
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
  export default {
  
  data() {
    return {
      curNav: 0,
      screenWidth: 0,
    }
  },

  methods: {
    changeNav(num) {
      this.curNav = num;
      this.$emit('changeNav', num);
    },
    getWidth(){
      this.screenWidth = screen.width;
    },
    getNav(){
      if(this.currentRouteName == 'destination'){
        this.curNav = 1;
      }else if(this.currentRouteName == 'crew'){
        this.curNav = 2;
      }else if(this.currentRouteName == 'technology'){
        this.curNav = 3;
      }
      console.log(this.curNav)
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },

  beforeMount() {
    this.getWidth();
  },
  async mounted() {
    console.log("LLLL")
    const router = useRouter();
    await router.isReady()
    this.getNav();
  }
}
</script>
<style scoped>
.icon{
  background-color: white;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  grid-row: 1;
  grid-column: 1;
  justify-self: start;
  margin-left: 3rem;
}
.icon-center{
  width: 4rem;
  height: 4rem;
}
.bar{
  grid-column: 1 / span 2;
  grid-row: 1;
  display: flex;
  gap: 3rem;
  align-items: center;
  backdrop-filter: blur(100px);
  width: 55%;
  height: 60%;
  justify-self: end;
  letter-spacing: 2.7px;
}

.rectangle{
  grid-column: 1 / span 2;
  grid-row: 1;
  background-color: darkgray;
  opacity: .3;
  height: 1px;
  width: 40%;
  position: relative;
  right: 22%;
  z-index: 1;
}
.baritem{
  font-size: 16px;
  opacity: 1;
  font-family: 'Barlow Condensed', sans-serif;
  color: white;
  display: flex;
  align-items: center;
  gap: .5rem;
  height: 98%;
}

.baritem:hover{
  border-bottom: 2px solid gray;
  cursor: pointer;
}
.baritem:first-of-type{
  margin-left: 8rem;
}

.active{
  border-bottom: 2px solid white;
}

.bold{
  font-weight: 700;
}
@media (max-width: 768px){
  .rectangle{
    background-color: transparent;
    grid-column: 1 / span 3;
  }
  .bar{
    width: 60vh;
    height: 100%;
  }
  .baritem:first-of-type{
    margin-left: 4rem;
  }
}
/*********

mobile


*/
@media (max-width: 375px){
  .bar{
    flex-direction: column;
    height: 100%;
    width: 65%;
    grid-column: 1;
    grid-row: 1 / span 3;
    gap: 1rem;
    align-items: start;
    z-index: 10;
    transform: translateX(+100%);
    transition: transform 250ms ease-in-out;
  }
  .active{
    border-bottom: 0px solid white;
  }
  .icon{
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 2rem;
  }
  .icon-center{
    height: 2.5rem;
    width: 2.5rem;
  }
  .baritem{
    margin-left: 2rem;
    height: 5%;
  }
  .baritem:first-of-type{
    margin-left: 2rem;
    margin-top: 15vh;
  } 
  input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
  }

  input[type=checkbox] {
      transition: all 0.3s;
      box-sizing: border-box;
      display: none;
  }
  .sidebarIconToggle {
      transition: all 0.3s;
      box-sizing: border-box;
      cursor: pointer;
      z-index: 99;
      grid-row: 1;
      grid-column: 1;
      justify-self: end;
      margin-right: 5vh;
      height: 40px;
      width: 30px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
  }
  .spinner {
      transition: all 0.3s;
      box-sizing: border-box;
      position: absolute;
      height: 3px;
      width: 100%;
      background-color: rgb(208, 214, 249);
  }
  .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      position: relative;
      float: left;
      margin-top: 3px;
  }
  .diagonal.part-1 {
      position: relative;
      transition: all 0.3s;
      box-sizing: border-box;
      float: left;
  }
  .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      position: relative;
      float: left;
      margin-top: 3px;
  }
  input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
      transition: all 0.3s;
      box-sizing: border-box;
      opacity: 0;
  }
  input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(135deg);
      margin-top: 8px;
  }
  input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
      transition: all 0.3s;
      box-sizing: border-box;
      transform: rotate(-135deg);
      margin-top: -19px;
  }
}
</style>
