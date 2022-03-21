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
                        <input type="checkbox" id="favoriteCheckbox" v-model="isFavorite"/>
                        <label for="favoriteCheckbox"></label>
                    </div>
                </div>

                <ButtonModal id="newListModal-submit" content="Create"/>
            </form>
    </template>
    
    <template v-slot:footer></template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import InputField from "@/components/modal/InputFieldModal";
import ButtonModal from "@/components/modal/ButtonModal";


export default {
    name: "NewListModal",
    components: { Modal, InputField, ButtonModal },
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
            /* We create a new list*/
            this.$store.dispatch("createNewList",{
                name: this.name,
                isfavorite: this.isFavorite,
                id_user: JSON.parse(localStorage.getItem("user")).id_user
            }).then(() => {
                this.$store.dispatch("dashboardLists",{
                    id_user: JSON.parse(localStorage.getItem("user")).id_user
                }).then(() => {
                    this.$router.go()
                })
            })
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
        text-align: center;

        font-weight: 500;
        font-size: 36px;

        color: #2A1E17;
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