<script setup>
  // To define state and handler, we use Composition API.
  // Options API is an old way of doing things. In the future, it is going to be replaced by Composition API.
  // To use Composition API, WE need a "setup". 

  // let count = 0;
  // The last line is not state. It is just a regular js variable. Vue does not see it as a piece of state.
  import {ref} from "vue"
  // To define it as state, we're going to import sth from vue library.
  // The sth is ref.
  const count = ref(0);
</script>
<!-- 
  The normal getElementbyId in JS is not working there.
  we need to use vue ref.
 -->
<!-- <script>
  export default {
    data(){
      return {
        count: 0
      }
    },
    methods:{
      addt(){
        console.log("hello");
        this.count = this.count+1  
      },
    }
  }
</script> -->
<!-- THe last script is how Options API works, not like the normal JS.
But with the Composition API, we don't have to write sth like this,
we can just write js-like things. -->


<template>
  <main>
    <div>
      <h4>
        The Current count is...
      </h4>
      <h1>{{ count }}</h1>
      <!-- The state is the thing there.
      The state is like when count is 0. is 1. is 2. 
      When count is changing, the vue will re-render the new html with the new state. -->
      <!-- But too much re-rendering on the HTML can actually slow down our app. It's not great for performance. -->
      <!-- So Vue is smart. Vue is like it is going to re-render the HTML whenever some sorts of states within our applicated is updated
      Anything occurs in the javascript. That's not what vue going to re-render. -->
      <button @click="count--">-</button>
      <!-- "@" is a listener. It is an event handler.
      Things that puts in the quote is actually javascript. 
      So it is also legal tht you put a function like add() in there.
      The function will also work. -->
      <!-- <button @click="count++">+</button> -->
      <button @click="addt()">+</button>
    </div>
  </main>
</template>
<!-- this template section is technically not an html. it is a vue template. it would be converted into javascript, which
allows us to create element within our client. -->
<!-- The tmeplate tag was completely removed. -->

<style scoped>
/*To prevent wierd styling appears, 
we go to main.css to delement or comment out 
all the styles below the first line there */
/* In bigger projects, we will work with multiple different .vue files.
If no "scoped", it will affect all .vue files and defined as a global style.
"scoped" is to make it only affect this .vue file.*/
  main {
    background-color: aliceblue;
    height: 100vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  div{
    text-align: center;
  }
</style>