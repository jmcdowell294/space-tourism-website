<template>
    <div class ="left">
        <h5><span class ="num">02</span> Meet your crew</h5>
        <div class ="info">
            <h4>{{crewPosition[curCrew]}}</h4>
            <h3>{{crewNames[[curCrew]]}}</h3>
            <div v-if="curCrew == 0" class="textbody">   
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                and former NASA astronaut. He launched into space for the third time as 
                commander of Crew Dragon Demo-2.
            </div>
            <div v-if="curCrew == 1" class="textbody">   
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                African to travel to space as a space tourist.
            </div>
            <div v-if="curCrew == 2" class="textbody">   
                Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                International Space Station. Glover is a commander in the U.S. Navy where 
                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                station systems flight engineer.
            </div>
            <div v-if="curCrew == 3" class="textbody">   
                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                fly to the ISS, and the first Iranian in space. 
            </div>
            <div class="nav">
                <div class="nav-circle" :class="{active: curCrew == 0}" @click="changeCrew(0)"></div>
                <div class="nav-circle" :class="{active: curCrew == 1}" @click="changeCrew(1)"></div>
                <div class="nav-circle" :class="{active: curCrew == 2}" @click="changeCrew(2)"></div>
                <div class="nav-circle" :class="{active: curCrew == 3}" @click="changeCrew(3)"></div>
            </div>
        </div>
    </div>
    <div class ="right">
        <img :src=getImgUrl() class="crew-img" alt="Crew Member" />
    </div>
</template>

<script>
  export default {
  
  data() {
    return {
      curCrew: 0,
      crewNames:['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'],
      crewPosition:['commander', 'mission specialist', 'pilot', 'flight engineer'],
    }
  },

  methods: {
    changeCrew(num) {
      this.curCrew = num;
    },
    getImgUrl(){
        if(this.curCrew == 0){
            return new URL('../assets/crew/image-douglas-hurley.png', import.meta.url).href; 
        }else if(this.curCrew == 1){
            return new URL('../assets/crew/image-mark-shuttleworth.png', import.meta.url).href;
        }else if(this.curCrew == 2){
            return new URL('../assets/crew/image-victor-glover.png', import.meta.url).href;
        }else{
            return new URL('../assets/crew/image-anousheh-ansari.png', import.meta.url).href;
        }
      
    }
  },

}
</script>
<style scoped>
.left{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 18rem 30rem 1fr;
  grid-column: 1;
  grid-row: 1 / span 3;
  width: 90%;
  height: 100%;
  color: white;
}
.right{
  display: flex;
  grid-column: 2;
  grid-row: 1 / span 3;
  height: 100%;
  align-items: end;
  justify-self: start;
}
.crew-img{
  height: 70%;
  margin-left: 5rem;
}
h5{
  align-self: end;
  margin-left: 25%;
}

h4{
  color: gray;
  align-self: end; 
}
h2{
  grid-row: 2;
  justify-self: start;
  align-self: start;
}
.textbody{
  width: 75%;
}

.info{
    display: grid;
    grid-template-rows: 8rem 6rem 10rem 8rem;
    justify-content: center;
    margin-left: 25%;
}
.nav{
    display: flex;
    gap: 2rem;
    align-self: center;
}
.nav-circle{
    background-color: gray;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
}
.nav-circle:hover{
    cursor: pointer;
    background-color: lightgray;
}
.active{
    background-color: white;
}
/*********

tablet


*/
@media (max-width: 768px){
  .left{
    grid-row: 2;
    grid-template-rows: 7vh 1fr;
    text-align: center;
  }
  .right{
    grid-column: 1;
    grid-row: 2 / span 2;
    width: 100%;
    height: 100%;
    align-self: end;
    align-items: end;
    justify-content: center;
    z-index: 1;
  }
  .crew-img{
    margin-left: 0;
    height: 45%;
  }
  h5{
    margin-left: 0;
    justify-self: start;
  }
  .info{
    margin-left: 0;
  }
  .textbody{
    justify-self: center;
  }
  .nav{
    justify-self: center;
    align-self: start;
    z-index: 2;
  }
}
/*********

mobile


*/
@media (max-width: 375px){
  .textbody{
    width: 100%;
  }
  .left{
    grid-template-rows: 4vh 1fr 1fr;
    grid-row: 2 / span 2;
  }
  h5{
    justify-self: center;
  }
  .info{
    grid-template-rows: 2rem 2rem 3rem 9rem;
    grid-row: 3;
  }
  .nav{
    grid-row: 1;
    gap: 1.1rem;
    align-self: center;
  }
  .nav-circle{
    height: .6rem;
    width: .6rem;
  }
  .right{
    width: 90%;
    border-bottom: 1px solid gray;
    justify-self: center;
    grid-row: 1 / span 2;
  }
  .crew-img{
    height: 65%;
  }
}
</style>