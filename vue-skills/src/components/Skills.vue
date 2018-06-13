<template>
  <div>
  <form @submit.prevent="addSkill">
  <input type="text" placeholder="Enter a skill you have"
  v-model="skill" v-validate=" 'min:3' " name="skill">
  <input type="checkbox" id="checkbox" v-model="checked">
  <transition name="validate-in">
  <span class="validate" v-if="errors.has('skill')">
  {{ errors.first('skill') }}</span>
  </transition>
  </form>
    <ul>
      <li v-for="(data, index) in skills" :key='index'>
      #{{ index }}: {{ data.skill }}</li>
      <p v-if="skills.length >=3">
      You have more than 3 skills</p>
      <p v-else>
      You have less than 3 skills</p>
    </ul>
    <div v-bind:class="alertObject"></div>
    <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth,
    height: bgHeight, border: border }"></div>
    <!-- <div v-bind:class="{ alert: showAlert, border: showClass }"></div>-->
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      checked: false,
      skill: '',
      skills: [
        // { 'skill': 'vue.js' },
        { 'skill': 'react.js' },
        { 'skill': 'angular' }
      ],
      // showAlert: true, showClass: true,
      bgColor: 'red',
      bgWidth: '80vw',
      bgHeight: '10vh',
      border: '2px solid black',
      alertObject: { alert: true, border: true }
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then( result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = '';
          console.log('This checkbox value is: '+this.checked)
        } else {
          console.log('Not valid')
        }
      } )      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>
@import "http://cdn/jsdelivr.net/npm/animate.css@3.5.1";
</style>
