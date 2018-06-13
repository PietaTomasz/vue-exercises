<template>
  <div>
    <form @submit.prevent="addSkill">
      <input type="text" placeholder="Enter a skill you have" v-model="skill">
    </form>
    <ul>
      <li v-for="(data, index) in skills" :key='index'>#{{ index }}: {{ data.skill }}</li>
        <p v-if="skills.length >=3">
        You have more than 3 skills</p>
        <p v-else>You have less than 3 skills</p>
    </ul>
    <div v-bind:class="{ alert: showAlert, border: showClass }"></div>
    <!-- <div v-bind:class="alertObject"></div> -->
    <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight, border: border }"></div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skill: '',
      skills: [
        { "skill" : "vue.js" },
        { "skill" : "react.js" },
        { "skill" : "angular" }
      ],
      showAlert: true, showClass: true,
      // alertObject: { alert: true, border: true }
      bgColor: 'red',
      bgWidth: '80vw',
      bgHeight: '10vh',
      border: '2px solid black'
    }
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill })
      this.skill = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./Skills.css' scoped></style>
