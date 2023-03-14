

<template>
    <div class="card2">
            <div class="icon">
                <i class="bi bi-cloud">   Aws - Quiz</i>
            </div>

            <div class="title">
                <h1>Your wrong answers</h1>
            </div>
            <div id="result">
                <div class="resultSection" v-if="results" v-for="result in results" :key="result" > 
                    <h2>Question {{ result.id}} : {{result.question}}</h2> 
                    <!-- <p class="userch">${list[i]}</p> -->
                    <div class="correctAnswer">
                        <h4>The Correct Answer</h4>
                        <p >{{result.answers.correct}}</p> 
                    </div>
                    <div class="justify">
                        <h4>Justification</h4>
                        <br>
                       <p>{{result.answers.comment}}</p>  
                    </div>
                    <br> 
                    <hr>
                </div>
            </div>
            <div class="btnSubmit">
                <button type="submit" id="submit">
                     Next
                </button>
            </div>
    
        </div>
</template>

<script>
export default {
    data(){
        return{
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
            "correct": "Amazon EC2 instances can be launched on demand when needed.",
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
            "correct": "AWS Database Migration Service (AWS DMS)",
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
            "correct": "AWS Marketplace",
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
            "correct": "Amazon Virtual Private Cloud (Amazon VPC)",
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
            "correct": "AWS Acceptable Use Policy",
            "comment": "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. "
          }
        }
        ],
        results:[]
        }
    },
 mounted() {
   this.testresults()
 },
 methods:{
    testresults(){
        this.questions.forEach(question => {
            if(this.$store.state.wrongAnswers.includes(question.id)){
                this.results.push(question)
            }
        });
    }
 }
}
</script>

<style>

</style>