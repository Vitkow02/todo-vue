<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to="/" exact>Home</router-link>
      <router-link class="router-link" to="/note" exact>Create Note</router-link>
    </nav>
    <hr/>
    <router-view/>
  </div>
  <div class="notes" v-for="notes in notes">
    <div>Название:{{notes.title}}</div>
    <div>Описание:{{notes.body}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: 
  linear-gradient(62deg, rgba(7,86,160,0.973) 13%, rgba(255, 122, 151, 0.5) 4%),
  linear-gradient(44deg, rgba(0, 43, 99, 0.079) 39%, rgba(242, 140, 143, 0.5) 18%),
  linear-gradient(118deg, rgba(84, 202, 242, 0.031) 40%, rgba(247, 155, 187, 0.5) 54%),
  linear-gradient(58deg, rgba(90, 90, 237, 0.161) 13%, rgba(249, 156, 142, 0.5) 23%);
  background-blend-mode: normal, lighten, multiply, hard-light;
  font-family: "DM Sans", sans-serif;
  overflow: hidden;
}
*{
  box-sizing: border-box;
}
ul{
  padding-inline-start: 0px;
  list-style-type: none;
}
#app{
  min-width: 480px;
  min-height: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 25px;
  overflow: auto;
  color: #222;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.router-link{
  text-decoration: none;
  color: rgb(80, 80, 80);
  font-size: 22px;
}
.router-link-active{
  color: rgb(170, 70, 153);
  text-shadow: 0 0 7px rgba(116, 13, 163, 0.5);
}
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(rgba(141, 86, 128, 0), rgba(143, 129, 129, 0.75));
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
@media screen and (max-width: 375px) {
  #app{
    padding: 15px 15px;
  }
}
</style>
