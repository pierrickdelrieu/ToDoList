<template>
  <Modal @close="close">
    <template v-slot:header>
        <div id="newRubricModal-header">
            <h1>New Rubric</h1>
            <p>in {{ list.name }}</p>
        </div>
    </template>

    <template v-slot:content>
            <form id="newRubricModal-form" @submit.prevent="addRubic">
                <InputField label="Name" v-model="name" placeholder="Rubric name" type="text" /> 
                <input type="submit" id="newRubricModal-submit" value="Create">
            </form>
    </template>
    
    <template v-slot:footer></template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import InputField from './InputFieldModal.vue';

export default {
    name: "NewRubricModal",
    components: { Modal, InputField },
    props: {
        list: {
            required: true
        }
    },
    data() {
        return {
            name: "",
        }
    },
    methods: {
        close() {
            this.$emit("close")
        },
        addRubic() {
        }
    },

}
</script>

<style>
    #newRubricModal-header {
        margin-bottom: 30px;
    }

    #newRubricModal-header > h1 {        
        margin: 0;
        text-align: center;

        font-weight: 500;
        font-size: 36px;

        color: #2A1E17;
    }

    #newRubricModal-header > p {
        text-align: center;
        margin: 0;
    }



    #newRubricModal-form {
        width: 400px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #newRubricModal-form-field {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #newRubricModal-form-field > img {
        width: 20px;
        cursor: pointer;

        margin-left: 30px;
    }

    @media  screen and (max-width: 500px) {
        #newRubricModal-form {
            width: 70vw;
        }
    }


    #newRubricModal-submit {
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

    #newRubricModal-submit:hover{
        background: rgba(242, 80, 25, 0.8);
    }



    #newRubricModal-form-checkbox {
        margin-left: 30px;
    }

    #newRubricModal-form-checkbox > input[type="checkbox"] {
        display: none;
    }

    #newRubricModal-form-checkbox > input + label {
        display: inline-block;	
        width: 20px;
        height: 20px;
        cursor: pointer;	
        background-image: url(../../assets/favorite.svg);
        background-size: 100%;
    }

    #newRubricModal-form-checkbox > input[type="checkbox"]:checked + label {
        background-image: url(../../assets/favorite_checked.svg);
        background-size: 100%;
    }
</style>