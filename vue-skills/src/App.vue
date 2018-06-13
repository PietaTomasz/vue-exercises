<template>
  <div id="app">
    <nav>
      <router-link to='/home'>Home</router-link>
      <router-link to='/skills'>Skills</router-link>
      <router-link to='/about'>About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import Skills from './components/Skills.vue'

// export default {
//   name: 'app',
//   components: {
//     Skills
//   }
// }
</script>

<style src="./App.css"></style>
