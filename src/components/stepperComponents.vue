
<template>
    <div class="stepper_compenent">
      <!--stepper -->
  <div class="stepper">
          <ul id="prog">
              <li>
                  <i class="icon uil uil-user-exclamation"></i>
                  <div class="progress one active" >
                      <p class="number">1</p>
                      <i class="uil uil-check"></i>
                  </div>
                  <p class="step">Informations</p>
              </li>
              <li>
                  <i class="icon uil uil-file-question-alt"></i>
                  <div class="progress two" :class="{active:IamInQuestions}">
                      <p class="number">2</p>
                      <i class="uil uil-check"></i>
                  </div>
                  <p class="step">Quiz</p>
              </li>
              <li>
                  <i class="icon uil uil-trophy"></i>
                  <div class="progress three" :class="{active:IamInResults}">
                      <p class="number">3</p>
                      <i class="uil uil-check"></i>
                  </div>
                  <p class="step">Résultats</p>
              </li>
          </ul>
      </div>
  <!-- -->
  </div>
</template>
<script>
export default{

    data(){
        return{
            IamInQuestions:false,
            IamInResults:false,
        }
    },
    computed: {
        currentPage() {

            return this.$store.state.page;
        }
  },
    watch:{
        currentPage(){
            console.log("test")
            this.stepper()
        }
    },
    methods:{
        stepper(){
            if(this.currentPage == 2) this.IamInQuestions = true
            if(this.currentPage == 3) this.IamInResults = true
        }
    }

}
</script>
<style>

</style>