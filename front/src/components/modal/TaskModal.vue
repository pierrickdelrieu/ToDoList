<script>
import Modal from "@/components/modal/Modal";
import moment from 'moment'


export default {
    name: "TaskModal",
    components: { Modal },
    props: {
        task: {
            required: true
        },
        rubrics: {
            required: true
        },
        currentRubric: {
            required: true
        },
        members: {
            required: true
        }
        
    },
    data() {
        return {
            isRemoveTaskModal: false,

            name: {
                content: '',
                updated: false
            },
            description: {
                content: '',
                updated: false
            },
            date: {
                content: null,
                updated: false
            },
            priority: {
                content: null,
                updated: false
            },
            rubric: {
                content: null,
                updated: false
            },
            membersSelected: {
                content: [],
                updated: false
            }
        }
    },
    computed: {
        hasChanged() {
          
            for(let i in this._data){
                if(this._data[i].updated) {
                    return true
                }
            }
            return false
        }
    },
    methods: {
        close() {
            if(this.hasChanged) {
                if(this.dateConfirm()) {
                    this.updateTask()
                    this.$emit("close")
                }
            } else {
                this.$emit("close")
            }
            
        },
        updateName(e) {
            this.name.updated = true
            this.name.content = e
        },
        updateDate(e) {
            this.date.updated = true
            this.date.content = e
        },
        updateDescription(e) {
            this.description.updated = true
            this.description.content = e
        },
        updateRubric(rubric) {
            this.rubric.updated = true
            this.rubric.content = rubric
9        },
        updateTask() {
            // // call API
            // this.$router.go();
            /*eslint-disable*/
            let name = this.task.name
            let description = this.task.description
            let date = this.task.date
            let priority = this.task.priority
            let rubric = this.currentRubric
            let membersSelected = this.members

            // this.name.updated ? this.name.content : this.task.name
            // this.description.updated ? this.description.content : this.task.description, 
            // this.date.updated ? this.date.content : this.task.date, 
            // this.priority.updated ? this.priority.content : this.task.priority, 
            // this.rubric.updated ? this.rubric.content : this.currentRubric, 
            // this.membersSelected.updated ? this.membersSelected.content : this.members

            if(this.name.updated){
                name = this.name.content
            }
            if(this.description.updated){
                description = this.description.content
            }
        
            if(this.date.updated){
                date = this.task.date
            }
            if(this.priority.updated){
                priority = this.task.priority
            }
             if(this.rubric.updated){
                rubric = this.rubric.content
            }
            if(this.membersSelected.updated){
                membersSelected = this.membersSelected.content
            }
            
            this.$store.dispatch("updateTask",{
                id_task: this.task.id,
                name: name,
                description: description,
                date: date,
                priority: priority,
                rubric: rubric
            }).then(() => {
                
                this.$router.go()
               
            })
            
            

                        
        },
        updatePriority() {
            this.priority.updated = true

            if(this.priority.content == null) {
                if(this.task.priority) {
                    this.priority.content = this.task.priority + 1
                } else {
                    this.priority.content = 1
                }
            } else {
                this.priority.content ++;
            }

            if(this.priority.content > 3) {
                this.priority.content = 1;
            }
        },
        dateConfirm() {
            let input = moment(this.date);
            let dateInput = document.getElementById("taskModal-date");

            if (this.date.content != null) {
                if (!moment(input, "YYYYMMDD").isSameOrAfter(moment().format("YYYYMMDD"))) {
                    dateInput.setCustomValidity('Date less than today');
                    dateInput.reportValidity()
                    return false;
                }
            } 
            dateInput.setCustomValidity('');
            return true
        },
        toggleMember(id) {
            if (!this.membersSelected.updated) {
                for(let i in this.task.members) {
                    this.membersSelected.content.push(this.task.members[i].id)
                }
            }

            this.membersSelected.updated = true

            if(this.membersSelected.content.includes(id)) {
                this.membersSelected.content = this.membersSelected.content.filter(function(value){ 
                    return value != id; 
                });
            } else {
                this.membersSelected.content.push(id);
            }
            this.membersSelected.content.sort()
        },
        memberIsSelected(id) {
            if(!this.membersSelected.updated) {
                if(this.task) {
                    for(let i in this.task.members) {
                        if(this.task.members[i].id == id) {
                            return true
                        }
                    }
                }
            } else {
                if(this.membersSelected.content.includes(id)) {
                    return true
                }
            }
            return false
        },
        removeTask() {
            // CALL API
            
            this.$store.dispatch("removeTask",{
                id_task: this.task.id
            }).then(() => {
                if(localStorage.getItem("rubrics")){
                    localStorage.removeItem("rubrics")
                }
                
                this.$store.dispatch("getRubrics", {
                id_todolist: this.$route.params.id,
                id_user: JSON.parse(localStorage.getItem("user")).id_user,
                }).then(() => {
                    this.$router.go()
                }).then(() => {
                    this.$emit("close")
                })
            })
            
        }
    }
}
</script>



<template>
  <Modal @close="close">
    <template v-slot:header>
    </template>

    <template v-slot:content>
        <form id="taskModal-content" @submit.prevent="updateTask">
            
            <div id="taskModal-header">
                <input type="text" id="taskModal-name" name="taskModal-name" :value="task ? task.name : null" 
                @input="updateName($event.target.value)">

                <div id="taskModal-header-sub">
                    <input type="date" id="taskModal-date" name="taskModal-date" :value="task ? task.date : null" 
                    @input="updateDate($event.target.value)">

                    <img src="../../assets/bin.svg" alt="Bin" style="margin-right: 30px; cursor: pointer;" @click="removeTask" />
                </div>
            </div>


            <textarea id="taskModal-description" cols="30" rows="5" :value="task ? task.description : null" placeholder="Description"
            @input="updateDescription($event.target.value)"/>


            <div id="taskModal-footer">

                <div id="taskModal-members" v-if="members">
                    <img src="../../assets/team.svg" alt="Team icon"/>
                    <div>
                        <div v-for="member in members" :key="member.id">
                            <input type="checkbox" class="taskModalCheckbox" name="taskModalCheckbox" @click="toggleMember(member.id)"
                                :checked="memberIsSelected(member.id) ? true : false">
                            {{ member.firstname }}
                        </div>
                    </div>
                </div>


                <div id="taskModal-footer-left">
                    <select id="taskModal-rubrics" @change="updateRubric($event.target.value)">
                        <option v-for="rubric in rubrics" :key="rubric.id" :value="rubric.id" :selected="(rubric.id == currentRubric) ? true : false">{{ rubric.name }}</option>                
                    </select>

                    <div @click="updatePriority" 
                        :class="[ priority.content ? priority.content === 1 ? 'taskModal-lowPriority' : priority.content === 2 ? 'taskModal-mediumPriority' : priority.content === 3 ? 'taskModal-highPriority' : 'taskModal-emptyPriority'
                                            : task ? task.priority ? task.priority === 1 ? 'taskModal-lowPriority' : task.priority === 2 ? 'taskModal-mediumPriority' : task.priority === 3 ? 'taskModal-highPriority' : 'taskModal-emptyPriority' : 'taskModal-emptyPriority' : null 
                                            , 'taskModal-priority']">
                        Priority
                    </div>
                </div>
            </div>
        </form>
    </template>
    
    <template v-slot:footer></template>
  </Modal>
</template>


<style>
    

    #taskModal-description {
        border: none;
        outline: none;
        background-color: unset;
        resize: none;
        width: 100%;

        font-weight: 300;
        font-size: 14px;
        line-height: 140%;
    }


    #taskModal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* ******************** Header ******************** */
    #taskModal-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
    }

    #taskModal-name {
        border: none;

        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #212121;
    }

    @media screen and (max-width: 450px) {
        #taskModal-name {
            width: 100%;
            text-align: center;
        }
        #taskModal-header {
            flex-direction: column;
        }
    }

    #taskModal-date {
        border: none;

        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: #212121;

        margin-right: 30px;
    }

    /* ******************** Footer ******************** */
    #taskModal-footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    #taskModal-members {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    #taskModal-members > img {
        width: 24px;
        margin-right: 10px;
    }

    #taskModal-header-sub {
        display: flex;
        flex-direction: row;
    }




    #taskModal-footer-left {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    #taskModal-rubrics {
        font-size: 16px;
        width: 120%;

        /* border: none;
        background-color: unset; */

        border: 1px solid rgba(156, 176, 197, 0.5);
        box-sizing: border-box;

        box-shadow: inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2);
        border-radius: 8px;
    }




    .taskModal-priority {
        padding: 5px 10px;
        border-radius: 10px;
        margin-top: 20px;
        cursor: pointer;
        color: #3C3C43;
    }

    .taskModal-lowPriority {
        background-color: #DCFFDF;
    }

    .taskModal-mediumPriority {
        background-color: #FFEBDC;
    }

    .taskModal-highPriority {
        background-color: #FFDCE0;
    }

    .taskModal-emptyPriority {
        background-color: #F2F2F2;
    }
</style>