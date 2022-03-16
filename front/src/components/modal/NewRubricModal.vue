<template>
  <Modal @close="close">
    <template v-slot:header>
        <div id="newRubricModal-header">
            <h1 id="newRubricModal-title">New Rubric</h1>
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* background-color: aliceblue; */
        margin-bottom: 30px;
    }

    #newRubricModal-header > h1 {
        margin: 0;
        font-weight: 500;
        font-size: 36px;
        display: flex;
        align-items: center;

        color: #2E82FF;
        margin-right: 20px;
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
        margin-top: 20px;

        width: 120px;
        height: 40px;

        background: #F25019;
        border-radius: 10px;
        border: unset;
        cursor: pointer;


        font-weight: 700;
        font-size: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
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