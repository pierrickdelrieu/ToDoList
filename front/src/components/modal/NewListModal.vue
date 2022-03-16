<template>
  <Modal @close="close">
    <template v-slot:header>
        <div id="newListModal-header">
            <h1 id="newListModal-title">New list</h1>
            <img src="../../assets/list.svg" alt="List icon"/>
        </div>
    </template>

    <template v-slot:content>
            <form id="newListModal-form" @submit.prevent="addList">
                <div id="newListModal-form-field">
                    <InputField label="Name" v-model="name" placeholder="List name" type="text" />
                    <div id="newListModal-form-checkbox">
                        <input type="checkbox" id="myCheckbox1" v-model="isFavorite"/>
                        <label for="myCheckbox1"></label>
                    </div>
                </div>

                <input type="submit" id="newListModal-submit" value="Create">
            </form>
    </template>
    
    <template v-slot:footer></template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import InputField from './InputFieldModal.vue';

export default {
    name: "NewListModal",
    components: { Modal, InputField },
    data() {
        return {
            name: "",
            isFavorite: false
        }
    },
    methods: {
        close() {
            this.$emit("close")
        },
        addList() {
            console.log(this.isFavorite)
        }
    },

}
</script>

<style>
    #newListModal-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        /* background-color: aliceblue; */
        margin-bottom: 30px;
    }

    #newListModal-header > h1 {
        margin: 0;
        font-weight: 500;
        font-size: 36px;
        display: flex;
        align-items: center;

        color: #2E82FF;
        margin-right: 20px;
    }



    #newListModal-form {
        width: 400px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #newListModal-form-field {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #newListModal-form-field > img {
        width: 20px;
        cursor: pointer;

        margin-left: 30px;
    }

    @media  screen and (max-width: 500px) {
        #newListModal-form {
            width: 70vw;
        }
    }


    #newListModal-submit {
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

    #newListModal-submit:hover{
        background: rgba(242, 80, 25, 0.8);
    }



    #newListModal-form-checkbox {
        margin-left: 30px;
    }

    #newListModal-form-checkbox > input[type="checkbox"] {
        display: none;
    }

    #newListModal-form-checkbox > input + label {
        display: inline-block;	
        width: 20px;
        height: 20px;
        cursor: pointer;	
        background-image: url(../../assets/favorite.svg);
        background-size: 100%;
    }

    #newListModal-form-checkbox > input[type="checkbox"]:checked + label {
        background-image: url(../../assets/favorite_checked.svg);
        background-size: 100%;
    }
</style>