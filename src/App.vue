<template>
  <img v-bind:src="img" style="width: 200px; padding-bottom: 55px;" alt="">
  <!-- <Modal />  -->
  <stepperComponent/>
  <informationComponent @start="start" v-if="!start_quiz"/>
  <quizComponent v-if="start_quiz && !end_quiz" @end="end" />
  <resultsComponent v-if="end_quiz"/>
</template>

<script >
import Modal from './components/Modal.vue'
import stepperComponent from './components/stepperComponents.vue'
import quizComponent from './components/quizComponents.vue'
import resultsComponent from './components/resultsComponents.vue'
import informationComponent from './components/informationComponents.vue'

export default {
  name: 'vue',
  data() {
    return {
      start_quiz: false,
      end_quiz: false,
      img: './src/assets/aws.png',
    }
  },
  methods: {
    start(status) {
       this.start_quiz = status
    },
    end(status) {
       this.end_quiz = status
    }

  },
  components: {stepperComponent,quizComponent,Modal,resultsComponent,informationComponent}
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
h1{
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
