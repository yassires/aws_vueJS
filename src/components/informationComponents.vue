<script>
export default {
 
 methods: {
    start_quiz() {
        this.$store.commit("changePage", 2);
        this.$emit('start',true)
    }
 }

}
</script>

<template>
    <div class="card3">
            <div class="icon">
                <i class="bi bi-cloud">   Aws - Quiz</i>
            </div>
                <div class="button-container">
                    <div class="pd">
                        <div id="note" class="container col-md-6 shadow p-3 mb-5 bg-white rounded">
                            <h1>AWS Cloud Practitioner Knowledge Test</h1>
                            <h5>Try to answer the following questions in given time limit<br/>
                            Keep in mind that incorrect answer will penalize time/score
                            </h5>
                        </div>
                        <div id="start">
                            <input type="text" id="yn" placeholder="Enter your name" />
                        </div>
                        <div id="start" >
                            <button class="start" @click="start_quiz">Let's Goo</button>
                        </div>
                    </div>
                  
                  
                  <!-- <a href="" id="start">Let's Goo</a> -->
                </div>
        </div>
</template>

<style>

</style>