<template>
    <div>
        <textarea v-if="type == 'description'" cols="30" rows="5" placeholder="Description" @input="updateValue($event.target.value)" class="modal-input-description"/>
        <div v-else class="modal-input-field">
            <label v-show="displayLabel" :for=id_class class="modal-input-field-label">{{ label }}</label>
            <input :type=type  :id=id_class class="modal-input-field-input" :name=id_class :placeholder=placeholder :value="valueInput" @input="updateValue($event.target.value)" :required="isRequired">
        </div>
    </div>
</template>

<script>
export default {
    name: "InputFieldModel",
    components: {},
    props: {
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        valueInput:{
            type: String,
            default: ""
        },
        isRequired: {
            type: Boolean,
            default: true
        },
        displayLabel: {
            type: Boolean,
            default: true
        },
        modelValue:{}
    },
    data() {
        return {
            value: ""
        }
    },
    computed: {
        id_class() {
            return `new-task-form-${this.label.toLowerCase().replace(' ', '-')}`
        }
    },
    methods: {
        updateValue(value){
            this.$emit("input",value);
        }
    }
}
</script>

<style>
    .modal-input-field {
        position: relative;

        display: flex;
        align-items: center;

        /* min-width: 300px; */
    }

    .modal-input-field-label {
        margin-right: 30px;
    }

    .modal-input-field-input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 16px;

        position: static;
        /* width: 100%; */
        height: 40px;
        left: 0px;
        top: 0px;

        background: #FAFBFC;

        border: 1px solid rgba(156, 176, 197, 0.5);
        box-sizing: border-box;

        box-shadow: inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2);
        border-radius: 8px;

        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 500px) {
        .modal-input-field > label {
            display: none;
        }
    }


    .modal-input-description {
        resize: none;
        width: 100%;
        height: 100px;

        background: #FAFBFC;
        /* line/faint - on light */

        border: 1px solid rgba(156, 176, 197, 0.5);
        box-sizing: border-box;
        /* level -1 */

        box-shadow: inset 0px 1px 2px 1px rgba(38, 39, 40, 0.2);
        border-radius: 8px;

        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        outline: none;
        padding: 10px 10px;
    }
</style>