Vue.component('task', {
  template: `<li><slot></slot></li>`
});
Vue.component('task-list', {
  template: `<div><task v-for="task in tasks">{{task.task}}</task></div>`,
  data(){
    return{
      tasks: [
        {description: 'buy milk', completed: true},
        {description: 'buy water', completed: true},
        {description: 'buy salmon', completed: false},
        {description: 'buy chicken', completed: false},
        {description: 'buy tomato', completed: true},
      ]
    }
  }
})
new Vue({
  el: '#root'
})