<script>
import Modal from "@/components/modal/Modal";
import InputField from "@/components/modal/InputFieldModal";
import moment from 'moment'


export default {
    
    name: "NewTaskModal",
    components: { Modal, InputField },
    props: {
        members: {
            type: Array,
            default: null
        },
        rubric: {
            required: true
        }
    },
    data() {
        return {
            name: null,
            description: null,
            date: null,
            priority: 1, // Default Low
            membersSelected: []
        }
    },
    methods: {
        close() {
            this.$emit("close")
        },
        addTask() {
            // call API
            console.log(this.name, this.description, this.date, this.priority, this.membersSelected)
        },
        updatePriority() {
            this.priority ++;

            if(this.priority > 3) {
                this.priority = 1;
            }
        },
        toggleMember(id) {
            if(this.membersSelected.includes(id)) {
                this.membersSelected = this.membersSelected.filter(function(value){ 
                    return value != id; 
                });
            } else {
                this.membersSelected.push(id);
            }
            this.membersSelected.sort()
        },
        dateConfirm() {
            let input = moment(this.date);
            // console.log(moment().format("YYYY MM DD"), moment().toDate().getTime())
            // console.log(input.format("YYYY MM DD"), input.toDate().getTime())
            // console.log(moment(input, "YYYYMMDD").isSameOrAfter(moment().format("YYYYMMDD")))

            let dateInput = document.getElementById("new-task-form-date");

            if (this.date != null) {
                if (!moment(input, "YYYYMMDD").isSameOrAfter(moment().format("YYYYMMDD"))) {
                    dateInput.setCustomValidity('Date less than today');
                } 
                else {
                    dateInput.setCustomValidity('');
                }
            } 
            else {
                dateInput.setCustomValidity('');
            }
        },
    }
}
</script>

<template>
    <Modal @close="close">
        <template v-slot:header>
            <div id="newTaskModal-header">
                <h1>New Task</h1>
                <p>in {{ rubric.name }}</p>
            </div>
        </template>


        <template v-slot:content>
            <form id="newTaskModal-form" @submit.prevent="addTask">
                <InputField label="Name" v-model="name" placeholder="Task name" type="text" class="newTaskModal-form-item"/>
                <InputField label="" v-model="description" placeholder="Description" type="description" class="newTaskModal-form-item"/>

                <div id="newTaskModal-form-footer" class="newTaskModal-form-item">
                    <div id="newTaskModal-form-members">
                        <img src="../../assets/team.svg" alt="Team icon"/>
                        <div>
                            <div v-for="member in members" :key="member.id">
                                <input type="checkbox" class="newTaskFormCheckbox" name="newTaskFormCheckbox" @click="toggleMember(member.id)">
                                {{ member.firstname }}
                            </div>
                        </div>
                    </div>

                    <div id="newTaskModal-form-footer-left" class="newTaskModal-form-item">
                        <InputField id="newTaskModal-form-date" label="Date" :displayLabel='false' v-model="date" type="date" :isRequired='false' @input="dateConfirm"/>
                        <div @click="updatePriority" 
                            :class="[ priority === 1 ? 'newTaskModal-form-lowPriority' : priority === 2 ? 'newTaskModal-form-mediumPriority' : 'newTaskModal-form-highPriority', 'newTaskModal-form-priority']">
                            Priority
                        </div>
                    </div>
                </div>


                <input type="submit" id="newTaskModal-submit" value="Create" class="newTaskModal-form-item">
            </form>
        </template>
    
    </Modal>
</template>



<style>
    #newTaskModal-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
    }

    #newTaskModal-header {
        margin-bottom: 20px;
    }
    
    #newTaskModal-header > h1 {
        margin: 0;
        text-align: center;

        font-weight: 500;
        font-size: 36px;

        color: #2A1E17;
    }

    #newTaskModal-header > p {
        text-align: center;
        margin: 0;
    }

    .newTaskModal-form-item {
        margin: 10px 0;
    }
    /* ******************** Footer ******************** */
    #newTaskModal-form-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    
    #newTaskModal-form-members {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    #newTaskModal-form-members > img {
        width: 24px;
        margin-right: 10px;
    }

    #newTaskModal-form-footer-left {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .newTaskModal-form-priority {
        padding: 5px 10px;
        border-radius: 10px;
        margin-top: 20px;
        cursor: pointer;
        color: #3C3C43;
    }

    .newTaskModal-form-lowPriority {
        background-color: #DCFFDF;
    }

    .newTaskModal-form-mediumPriority {
        background-color: #FFEBDC;
    }

    .newTaskModal-form-highPriority {
        background-color: #FFDCE0;
    }


    /* ******************** Submit ******************** */
    #newTaskModal-submit {
        margin: 0 10px;
        width: 100px;
        height: 35px;

        font-weight: 600;
        font-size: 15px;
        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: space-around;
        border: unset;

        border-radius: 10px;
        cursor: pointer;

        background: #F25019;

        margin-top: 20px;
    }

    #newTaskModal-submit:hover{
        background: rgba(242, 80, 25, 0.8);
    }



    @media screen and (max-width: 500px) {
        #newTaskModal-form {
            width: 60vw;
        }
        #newTaskModal-form-members > img {
            display: none;
        }
    }
    @media screen and (max-width: 350px) {
        #newTaskModal-form-footer {
            flex-direction: column;
        }
    }
</style>