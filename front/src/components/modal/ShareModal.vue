<template>
  <Modal @close="close">
        <template v-slot:header>
            <div id="shareModal-header">
                <h1>Sharing</h1>
                <img src="../../assets/team.svg" alt="Team icon"/>
            </div>
        </template>

        <template v-slot:content>
            <p id="shareModal-list">{{ list ? list.name : 'Undefined list' }}</p>

            <div v-if="list && list.members" id="shareModal-members">
                <p>Already sharing with :</p>
                <div id="shareModal-members-items">
                    <p v-for="member in list.members" :key="member.id">{{ member.mail }}</p>
                </div>
            </div>

            <p v-else id="shareModal-members-none">The list has 0 members</p>

            <form id="shareModal-form" @submit.prevent="share">
                <InputField label="Email" :displayLabel='false' v-model="email" placeholder="username@mail.com" type="email" />

                <ButtonModal id="shareModal-form-submit" content="Share"/>
            </form>
        </template>
        
        <template v-slot:footer></template>
    
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal";
import ButtonModal from "@/components/modal/ButtonModal";
import InputField from "@/components/modal/InputFieldModal";

export default {
    name: "ShareModal",
    components: { Modal, ButtonModal, InputField },
    data() {
        return {
            email: ""
        }
    },
    props: {
        list: {
            required: true
        }
    },
    methods: {
        close() {
            this.$emit("close")
        },
        share() {
            // call API
        }
    },

}
</script>

<style>
    #shareModal-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    #shareModal-header > h1 {
        margin: 0;
        font-weight: 500;
        font-size: 36px;

        color: #2A1E17;

        margin-right: 20px;
    }

    #shareModal-header > img {
        width: 24px;
    }


    #shareModal-list {
        margin: 0;
        font-weight: 500;
        font-size: 20px;

        display: flex;
        justify-content: center;
        color: #212121;

        margin-bottom: 20px;
    }



    /* ******************** Members ******************** */
    #shareModal-members {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
    }

    #shareModal-members > p {
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #212121;

        margin-right: 30px;
    }

    #shareModal-members-items {
        display: flex;
        flex-direction: column;
    }
    #shareModal-members-items > p {
        margin: 0;
    }

    #shareModal-members-none {
        text-align: center;
        margin: 0;
        margin-bottom: 30px;
    }


    /* ******************** Form ******************** */
    #shareModal-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #shareModal-form-submit {
        margin-top: 10px;
    }


    @media screen and (max-width: 460px) {
        #shareModal-members {
            display: none;
        }
    }

</style>