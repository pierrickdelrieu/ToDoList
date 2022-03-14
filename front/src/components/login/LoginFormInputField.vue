<template>
  <div class="login-form-field-item">
    <label :for=id_class class="login-form-label">{{ label }}</label><br>
    <input :type=type  :id=id_class class="login-form-input" :name=id_class :placeholder=placeholder :value="valueInput" @input="updateValue($event.target.value)" required>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "LoginInputField",
  components: {},
  props: {
    label: {
      type: String,
      default: ""
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
    modelValue:{}
  },
  data() {
    return {
      value: ""
    }
  },
  computed: {
    id_class() {
      return `login-form-${this.label.toLowerCase().replace(' ', '-')}`
    },
    /*
    inputValue:{
      get(value){
        this.$emit("input",value)
      },
      set(value){
        this.$emit('update:modelValue', value)
      }
    }
    */
  },
  methods: {
      updateValue(value){
          this.$emit("input",value);
      }
  }
}
</script>

<style>
  .login-form-field-item {
    margin: 10px 0;
    width: 100%;
  }

  .login-form-label {
    font-weight: normal;
    font-size: 1em;
  }

  .login-form-input {
    padding: 15px;
    margin-top: 10px;
    font-size: 1em;

    width: 90%;

    background: #FFFFFF;
    border-radius: 5px;
    border: unset;
  }

  .login-form-input:invalid {
    border: 1px solid #F25019;
  }
</style>