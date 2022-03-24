<template>
  <Modal @close="cancel" :displayCloseIcon=false>
    <template v-slot:header>
        <p id="confirmModal-message">{{ content }}</p>
    </template>

    <template v-slot:content>
        <div id="confirmModal-content">
            <ButtonModal content="Cancel" color='grey' @click="cancel"/>
            <ButtonModal content="Ok" color='red' @click="confirm"/>
        </div>
    </template>
    
    <template v-slot:footer></template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import ButtonModal from "@/components/modal/ButtonModal";

export default {
    name: "ConfirmModal",
    components: { Modal, ButtonModal },
    props: {
        content: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            name: "",
            isFavorite: false
        }
    },
    methods: {
        cancel() {
            this.$emit("cancel")
        },
        confirm() {
            this.$emit("confirm")
        }
    },
    // beforeCreate() {
    //     window.addEventListener('keyup', function(e) {
    //         if(e.key == 'Enter') {
    //             this.$emit("confirm")
    //             // this.confirm()
    //         }
    //     })
    // }
}
</script>

<style>
    #confirmModal-message {
        margin: 0;
        margin-bottom: 15px;
        text-align: center;
        line-height: 150%;

        max-width: 500px;
    }

    #confirmModal-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>