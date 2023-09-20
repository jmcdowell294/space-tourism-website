<template>
  <div class="left">
    <h5>So, you want to travel to</h5>
    <h1>Space</h1>
    <div class="textbody">
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
    </div>
  </div>
  <div class ="explore">
      <h4>EXPLORE</h4>
  </div>
</template>

<style scoped>
.left{
  display: flex;
  flex-direction: column;
  width: 60%;
  color: rgb(208, 214, 249);
  align-self: end;
}
h1{
  color: white;
}
.explore{
  grid-column: 2;
  color: rgb(11,13,23);
  background-color: white;
  border-radius: 50%;
  width: 17rem;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
}
.explore:hover{
  cursor: pointer;
  transition: .2s;
  box-shadow: 0 0 0 50px rgba(11,13,23, .5);

}
/*********

tablet


*/
@media (max-width: 768px){
  .explore{
    grid-column: 1;
    height: 15rem;
    width: 15rem;
    align-self: center;
  }
  .left{
    margin-top: 5vh;
    width: 65%;
    text-align: center;
    align-self: start;
  }
}
@media (max-width: 375px){
  h1{
    font-size: 80px;
  }
  h5{
    font-size: 16px;
  }
  .left{
    margin-top: 3vh;
    width: 85%;
    grid-row: 2;
    grid-column: 1;
  }
  .explore{
    width: 10rem;
    height: 10rem;
    grid-row: 3;
    grid-column: 1;
  }
}


</style>