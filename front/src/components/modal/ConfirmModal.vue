<template>
  <Modal @close="cancel" :displayCloseIcon=false>
    <template v-slot:header>
        <p id="confirmModal-message">{{ content }}</p>
    </template>

    <template v-slot:content>
        <div id="confirmModal-content">
            <div id="confirmModal-cancel" class="confirmModal-item" @click="cancel">Cancel</div> 
            <div id="confirmModal-ok" class="confirmModal-item" @click="confirm">Ok</div>
        </div>
    </template>
    
    <template v-slot:footer></template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";

export default {
    name: "ConfirmModal",
    components: { Modal },
    props: {
        content: {
            type: String,
            default: ""
        }
    },
    // created() {
    //     // window.addEventListener('keyup', (e) => {
    //     // if (e.key == 'Enter') {
    //     //     // console.log("ok")
    //     //     this.$emit("confirm")
    //     // }
    //     // });
    //     console.log("created")
    // },
    // mounted() {
    //     console.log("mounted")
    // },
    // unmounted() {
    //     console.log("unmounted")
    // },
    // destroyed() {
    //     console.log("destroyed")
    // },

    // updated() {
    //     console.log("updated")
    // },
    // beforeUpdate() {
    //     window.removeEventListener('keydown')
    // },
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
            console.log("ok2")
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

    .confirmModal-item {
        margin: 0 10px;
        width: 100px;
        height: 35px;

        font-weight: 600;
        font-size: 15px;
        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: space-around;

        border-radius: 10px;
        cursor: pointer;
    }

    #confirmModal-ok {
        background: #F25019;
    }

    #confirmModal-ok:hover{
        background: rgba(242, 80, 25, 0.8);
    }


    #confirmModal-cancel {
        background: #A5A5A5;
    }

    #confirmModal-cancel:hover{
        background: #BFBFBF;
    }
</style>