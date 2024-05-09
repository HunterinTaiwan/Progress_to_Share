<!-- Directives are instructions for Vue
to do certain things.
They are placed on the HTML elements themselves -->
<script setup>
  import {ref} from "vue"
  const showModal = ref(false);
  const newNote = ref("");
  // This is two way binding, when we enter somethings in textarea of the modal, it is going to be stored in the newNote
  const errorMessage = ref("");
  const notes = ref([]);
  
  function randomDarkColor() {
    // search javascript generate random dark color
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }
  const addNote = () => {
    // if (newNote.value.trim().length > 9){
    if (newNote.value.length > 9){
      return errorMessage.value = "Note must be less than 10 characters";
    }
    notes.value.push({
      // notes.value.push({
      id: Math.floor(Math.random()*1000000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: randomDarkColor(),
    });
    showModal.value = false;
    newNote.value = "";
    errorMessage.value="";
  }
</script>

<template>
  <main>
    <!-- <div v-if="showModal" class="overlay"> -->
    <div v-if="showModal" class="overlay">
      <!-- v-if is one of the directives -->
      <!-- if v-if is true, show the modal
      if v-if is false, don't. -->
      <!-- v-show does the same thing -->
      <!-- v-if is to make the whole element disappeared from HTML, 
      while v-show is to add display:none to the element -->
      <!-- To chose which depends on the situtation
      if information in modal is good for SEO to promote website
      ,v-show is better. if not, we often stick with v-if, it is more common convetion-->  
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div class="card" v-for="note in notes"
        :keys="note.id" 
        :style="{backgroundColor: note.backgroundColor}">
          <p class="main-text">{{ note.text }}</p>
          <!-- <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p> -->
          <!-- <p class="date">{{ note.date.toLocaleString({timeZone:"Asis/Taipei", hour12: false}) }}</p> -->
          <p class="date">{{ note.date.toLocaleString("zh-TW",{hour12: false}) }}</p>
          <!-- The zh-TW is one of laguage tags, and can be found http://www.lingoes.net/en/translator/langcode.htm -->
        </div>
      </div>
    </div>    
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
    /* background-color: #F5F5F5 */
  }
  .container {
    max-width: 1000px;
    padding: 10px;
    margin:0 auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center; /*to avoid the + button to tall*/
  }
  h1 {
    font-weight: bold;
    margin-bottom: 25px;  
    font-style: 75%;
  }
  header button{
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    /* background-color: rgb(21,20,20); */
    background-color: #fff;
    border-radius: 100%;
    /* color: white; */
    color: rgb(21,20,20);
    font-size: 20px;
  }
  .card {
    width:  225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .date{
    font-size: 12.5px;
    font-weight: bold;
  }
  .cards-container{
    display:flex;
    flex-wrap: wrap;
  }
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.77); */
    z-index:10;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .modal{
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding:30px;
    position:relative;
    display:flex;
    flex-direction: column;
  }
  .modal button{
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border:none;
    color:white;
    cursor: pointer;
    margin-top: 15px;
  }
  .modal .close{
    background-color: red;
    margin-top: 7px;
  }
  .modal p{
    color: red;
  }
</style>
