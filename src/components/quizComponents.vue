<template>
    <div class="card">
                   <div class="icon">
                       <i class="bi bi-cloud">   Aws - Quiz</i>
                   </div>
                   <div id="question" >
                    <div v-if="qst">
                        <div class="quiz" >
                            <h3>Question {{ currentNumber }} /{{ qstLength }}</h3>
                        </div>
                        <div class="quiz-area">
                            <h2>Question #{{ currentNumber }}: {{ randomQuestions[questionIndex].question }}</h2>
                        </div>
                

                                <div class="answers-area">
                                    <div class="answer" v-for="option in randomQuestions[questionIndex].options" :key="option.id" @click="selectOption(option.id)" :class="{ 'active': selectedOption === option.id }">
                                        <label for="answers"  >{{ option.content }}</label> 
                                    </div>
                                </div>
                                
                    </div>
                    <div v-else>
                        Stana xwi binma yjiw l2as2ila
                    </div>                   
                   </div>
           
           <div class="btnSubmit" >
               <button  id="submit" @click="next" v-on:click="nextNumber" v-if="selectedOption">
                   Next
               </button>
              
           </div>
           
       </div>
</template>

<script>
  

export default {
data() {
    return{
        questionIndex: 0,
        currentNumber: 1,
        questions: [
        {
            "id": 1,
          "question": "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
          "options": [
            {
              "id": 1,
              "content": "Amazon EC2 costs are billed on a monthly basis"
            },
            {
              "id": 2,
              "content": "Users retain full administrative access to their Amazon EC2 instances"
            },
            {
              "id": 3,
              "content": "Amazon EC2 instances can be launched on demand when needed."
            },
            {
              "id": 4,
              "content": "Users can permanently run enough instances to handle peak workloads"
            }
          ],
          "answers": {
            "correct": 3,
            "comment": "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
          }
        },
        {
          "id": 2,
          "question": "Which AWS service would simplify the migration of a database to AWS ?",
          "options": [
            {
              "id": 1,
              "content": "AWS Storage Gateway"
            },
            {
              "id": 2,
              "content": "AWS Database Migration Service (AWS DMS)"
            },
            {
              "id": 3,
              "content": "Amazon EC2."
            },
            {
              "id": 4,
              "content": "Amazon AppStream 2.0"
            }
          ],
          "answers": {
            "correct": 2,
            "comment": "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases"
          }
        },
        {
          "id": 3,
          "question": "Which AWS offering enables users to find, buy, and immediately start using software solutions in theirAWS environment?",
          "options": [
            {
              "id": 1,
              "content": "AWS Config"
            },
            {
              "id": 2,
              "content": "AWS OpsWorks"
            },
            {
              "id": 3,
              "content": "AWS SDK"
            },
            {
              "id": 4,
              "content": "AWS Marketplace"
            }
          ],
          "answers": {
            "correct": 4,
            "comment": "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases"
          }
        },
        {
          "id": 4,
          "question": "Which AWS networking service enables a company to create a virtual network within AWS?",
          "options": [
            {
              "id": 1,
              "content": "AWS Config"
            },
            {
              "id": 2,
              "content": "Amazon Route 53"
            },
            {
              "id": 3,
              "content": "AWS Direct Connect"
            },
            {
              "id": 4,
              "content": "Amazon Virtual Private Cloud (Amazon VPC)"
            }
          ],
          "answers": {
            "correct": 4,
            "comment": "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define."
          }
        },
        {
          "id": 5,
          "question": " Where can a user find information about prohibited actions on the AWS infrastructure?",
          "options": [
            {
              "id": 1,
              "content": "AWS Trusted Advisor"
            },
            {
              "id": 2,
              "content": "AWS Identity and Access Management (IAM)"
            },
            {
              "id": 3,
              "content": "AWS Billing Console"
            },
            {
              "id": 4,
              "content": "AWS Acceptable Use Policy"
            }
          ],
          "answers": {
            "correct": 4,
            "comment": "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. "
          }
        }
    ],
    qst: [],
    wrongAnswers: [],
    randomQ:[],
    selectedOption: null,
    }
  },
  mounted() {
    this.selectq()
    // this.randomQuestions();
  },

methods: {
    next() {
        this.verification()
        this.selectedOption= null
        this.questionIndex++;
        this.selectq()

        if(this.questionIndex==this.questions.length){
            this.end_q()
        }
    },
    selectq() {
        this.qst=this.questions[this.questionIndex]
    },
    end_q() {
        console.log('test');
            this.$emit('end',true)
            this.$store.commit("changePage", 3);
            this.$store.commit("PassWrongAnswers",this.wrongAnswers );    
        },
    selectOption(id) {
        this.selectedOption=id
    },
    verification() {
        //  console.log(id);
        if(this.selectedOption!=this.qst.answers.correct)
        {

            this.wrongAnswers.push(this.qst.id)
        }
        console.log(this.wrongAnswers);
    },
    nextNumber() {
      this.currentNumber += 1;
    }
    
    },
   
computed: {
  qstLength() {
    return this.questions.length;
  },
  randomQuestions() {
        this.randomQ=this.questions.sort(()=>Math.random() - 0.5)
        return this.randomQ
    }

}
}
</script>


<style>

</style>