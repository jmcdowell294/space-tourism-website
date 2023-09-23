<template>
    <div class ="left">
        <h5>
            <span class ="num">01</span> Pick your destination
        </h5>
        <img :src="getImgUrl()" class="dest-img" alt="destination" />
    </div>
    <div class =right>
      <div class ="nav">
        <div class="nav-item" :class="{active: curDest == 0}" @click="this.changeDest(0)">MOON</div>
        <div class="nav-item" :class="{active: curDest == 1}" @click="this.changeDest(1)">MARS</div>
        <div class="nav-item" :class="{active: curDest == 2}" @click="this.changeDest(2)">EUROPA</div>
        <div class="nav-item" :class="{active: curDest == 3}" @click="this.changeDest(3)">TITAN</div>
      </div>
      
      <h2>{{ destinations[curDest] }}</h2>

      <div v-if="curDest == 0" class="textbody">
        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.
      </div>
      <div v-if="curDest == 1" class="textbody">
        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!
      </div>
      <div v-if="curDest == 2" class="textbody">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin.
      </div>
      <div v-if="curDest == 3" class="textbody">
        The only moon known to have a dense atmosphere other than Earth, Titan 
        is a home away from home (just a few hundred degrees colder!). As a 
        bonus, you get striking views of the Rings of Saturn.
      </div>
      
      <div class="bottom">
        <div class="distance">
          <div class ="sub2">AVG. DISTANCE</div>
          <div class="sub1">{{distances[curDest]}} KM</div>
        </div>
        <div class="travel">
          <div class ="sub2">EST. TRAVEL TIME</div>
          <div class="sub1">{{ travelTimes[curDest] }}</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
  
  data() {
    return {
      curDest: 0,
      destinations:['moon', 'mars', 'europa', 'titan'],
      distances:['384,400', '225 mil.', '628 mil.', '1.6 bil.'],
      travelTimes:['3 days', '9 months', '3 years', '7 years'],
    }
  },

  methods: {
    changeDest(num) {
      this.curDest = num;
    },
    getImgUrl(){
      if(this.curDest == 0){
        return new URL('../assets/destination/image-moon.png', import.meta.url).href;
      }else if(this.curDest == 1){
        return new URL('../assets/destination/image-mars.png', import.meta.url).href;
      }else if(this.curDest == 2){
        return new URL('../assets/destination/image-europa.png', import.meta.url).href;
      }else{
        return new URL('../assets/destination/image-titan.png', import.meta.url).href;
      }
    },

  },

}
</script>

<style scoped>
.left{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 18rem 1fr;
  grid-column: 1;
  grid-row: 1 / span 3;
  width: 90%;
  height: 100%;
  color: white;
}
h5{
  align-self: end;
  margin-left: 25%;
}

h2{
  grid-row: 2;
  justify-self: start;
  align-self: start;
}
.dest-img{
    height: 27rem;
    width: 27rem;
    justify-self: end;
    align-self: center;
    margin-right: 8rem;
}

.right{
  color: white;
  display: grid;
  grid-template-rows: 8rem 9rem 10rem 8rem;
  justify-content: center;
  margin-left: 2rem;
  justify-self: start;
  width: 30rem;
  height: 30rem;
}
.nav{
  display: flex;
  gap: 2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  align-self: end;
  height: 2rem;
}
.nav-item{
  cursor: pointer;
  color: rgb(208, 214, 249);
}
.nav-item:hover{
  border-bottom: 2px solid gray;
}
.bottom{
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid grey;
}
.distance{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.travel{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sub1{
  font-family: 'Bellefair', serif;
  font-size: 28px;
  text-transform: uppercase;
}

.sub2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.35px;
  display: flex;
  align-items: end;
  text-transform: uppercase;
  color: rgb(208, 214, 249);
}
.active{
  border-bottom: 2px solid white;
  color: white;
}
/*********

tablet


*/
@media (max-width: 768px){
  .dest-img{
    height: 18rem;
    width: 18rem;
    justify-self: center;
    margin-right: 0;
  }
  .left{
    grid-row: 2;
    grid-template-rows: 7vh 1fr;
  }
  .right{
    margin-left: 0;
    width: 38rem;
    grid-row: 3;
    grid-column: 1;
    justify-self: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1rem 9rem 10rem 8rem;
  }
  .nav{
    justify-self: center;
  }
  h5{
    align-self: end;
    margin-left: 0;
  }
  h2{
    justify-self: center;
  }
  .sub2{
    align-items: center;
    justify-content: center;
  }
  .bottom{
    height: 100%;
  }
  .distance{
    gap: .5rem;
  }
  .travel{
    gap: .5rem;
  }
  
}
/*********

mobile


*/
@media (max-width: 375px){
  .dest-img{
    width: 10rem;
    height: 10rem;
  }
  .right{
    width: 85%;
    grid-template-rows: 3rem 4rem 10rem;
  }
  .nav{
    font-size: 14px;
  }
  .bottom{
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;

  }
  
}
</style>