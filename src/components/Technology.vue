<template>
    <div class ="left">
        <h5><span class ="num">03</span> Space Launch 101</h5>
        <div class="nav">
          <div class="nav-item" :class="{active: curTech == 0}" @click="changeTech(0)"><h4>1</h4></div>
          <div class="nav-item" :class="{active: curTech == 1}" @click="changeTech(1)"><h4>2</h4></div>
          <div class="nav-item" :class="{active: curTech == 2}" @click="changeTech(2)"><h4>3</h4></div>
        </div>
        <div class="info">  
          <div class="term">The terminology...</div>
          <h3>{{techTerms[curTech]}}</h3>
          <div v-if="curTech == 0" class="textbody">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
              payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
              WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
              it's quite an awe-inspiring sight on the launch pad!
          </div>
          <div v-if="curTech == 1" class="textbody">
              A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
              by analogy to the seaport for ships or airport for aircraft. Based in the 
              famous Cape Canaveral, our spaceport is ideally situated to take advantage 
              of the Earth’s rotation for launch.<br><br>
          </div>    
          <div v-if="curTech == 2" class="textbody">
              A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
              capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
              you'll spend your time during the flight. It includes a space gym, cinema, 
              and plenty of other activities to keep you entertained.
          </div>
        </div>
    </div>
    <div class ="right">
        <img :src=getImgUrl() class="tech-img" alt="Technology" />
    </div>
</template>
<script>
export default {
  
  data() {
    return {
      curTech: 0,
      techTerms:['Launch Vehicle', 'Spaceport', 'Space Capsule'],
      screenWidth: 0,
    }
  },

  methods: {
    changeTech(num) {
      this.curTech = num;
    },
    getImgUrl(){
      if(this.screenWidth <= 768){
        if(this.curTech == 0){
            return new URL('../assets/technology/image-launch-vehicle-landscape.jpg', import.meta.url).href; 
        }else if(this.curTech == 1){
            return new URL('../assets/technology/image-spaceport-landscape.jpg', import.meta.url).href;
        }else if(this.curTech == 2){
            return new URL('../assets/technology/image-space-capsule-landscape.jpg', import.meta.url).href;
        }
      }else{
        if(this.curTech == 0){
            return new URL('../assets/technology/image-launch-vehicle-portrait.jpg', import.meta.url).href; 
        }else if(this.curTech == 1){
            return new URL('../assets/technology/image-spaceport-portrait.jpg', import.meta.url).href;
        }else if(this.curTech == 2){
            return new URL('../assets/technology/image-space-capsule-portrait.jpg', import.meta.url).href;
        }
      }
    },
    getWidth(){
      this.screenWidth = screen.width;
    }
  },
  mounted() {
   this.getWidth(); 
  }

}
</script>
<style scoped>
.left{
  grid-column: 1;
  grid-row: 1 / span 3;
  justify-self: start;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 18rem 30rem 1fr;
  grid-template-columns: 25rem 1fr;
  color: white;
}
h5{
  align-self: end;
  justify-self: center;
  grid-column: 1 / span 2;
  margin-right: 8.7rem;
}

h2{
  grid-row: 2;
  justify-self: start;
  align-self: start;
}
.term{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  grid-column: 2;
  color: rgb(208, 214, 249);
}
.nav{
    grid-column: 1;
    grid-row: 2;
    justify-self: end;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-right: 3.7rem;;
}
.nav-item{
  background-color: rgb(11, 13, 23);
  border-radius: 50%;
  border: 1px solid gray;
  height: 4.75rem;
  width: 4.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item:hover{
  cursor: pointer;
  border: 1px solid white;
}
.info{
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
}
.active{
  background-color: white;
  color: rgb(11, 13, 23);
}
.right{
  display: flex;
  grid-column: 2;
  grid-row: 2;
  height: 100%;
  align-items: end;
  justify-self: end;
}
.tech-img{
 height: 90%;
}

@media (max-width: 768px){
  .left{
    grid-row: 2 / span 2;
    grid-template-rows: 7vh 1fr 1fr;
    grid-template-columns: 1fr;
    text-align: center;
    width: 90%;
    justify-self: center;
  }
  .right{
    grid-column: 1;
    grid-row: 2;
    width: 100%;
    z-index: 1;
  }
  .info{
    grid-column: 1;
    width: 70%;
    justify-self: center;
    align-items: center;
  }
  .nav{
    margin-right: 0;
    flex-direction: row;
    justify-self: center;
    align-self: end;
    z-index: 2;
  }
  h5{
    margin-left: 0;
    justify-self: start;
  }
  .tech-img{
    width: 100%;
    height: 60%;
    align-self: center;
  }
}
/*********

mobile


*/
@media (max-width: 375px){
  .left{
    width: 85%;
  }
  h5{
    justify-self: center;
    margin-right: 0;
  }
  .textbody{
    width: 100%;
    margin-top: 1rem;
  }
  .info{
    width: 100%;
    gap: 0;
  }
  .nav-item{
    height: 3rem;
    width: 3rem;
  }
  .nav{
    margin-top: 1rem;
  }
}
</style>