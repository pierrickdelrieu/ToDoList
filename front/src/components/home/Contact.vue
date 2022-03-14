<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data() {
    return {
      address: "Paris, France",
      emails: ["pierrick.delrieu@efrei.net",
            "kais.zeghdoud@efrei.net",
            "meric.chenu@efrei.net",
            "guillaume.dumas@efrei.net"]
    }
  }
}
</script>

<template>
  <div id="contact">
    <h1>Contact Us</h1>
      <div id="contact-content">
      <form id="contact-form">
        <input type="text" id="contact-form-name" class="contact-form-field-main" name="name" placeholder="Name *" required><br>
        <input type="email" id="contact-form-email" class="contact-form-field-main" name="email" placeholder="Email *" required><br>
        <input type="text" id="contact-form-subject" class="contact-form-field-main" name="subject" placeholder="Subject"><br>
        <textarea id="contact-form-message" cols="30" rows="5" placeholder="Message *" REQUIRED></textarea>
        <input type="submit" id="contact-form-submit" value="Submit">
      </form>

      <div id="contact-info">
        <div class="contact-info-item">
          <h3>Email</h3>
          <div>
            <a v-for="email in emails" :key="email" href="">{{email}}<br></a>
          </div>
        </div>
        <div class="contact-info-item">
          <h3>Based in</h3>
          <p>{{address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #contact {
    margin-top: 150px;
  }

  #contact h1 {
    position: relative;
    left: 100px;
    font-weight: normal;
    font-size: 2em;
  }

  #contact-content {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  /* ******************** Info ******************** */
  #contact-info {
    width: 223px;
    display: flex;
    flex-direction: column;
  }
  .contact-info-item {
    margin-bottom: 60px;
  }
  #contact-info a {
    color: #212121;
    line-height: 120%;
    text-decoration: unset;
  }
  #contact-info a:hover {
    color: #F25019;
  }


  /* ******************** Form ******************** */
  .contact-form-field-main {
    width: 500px;

    padding: 11px 0;

    color: black;

    background-color: unset;
    border-top: unset;
    border-left: unset;
    border-right: unset;
    border-bottom: 2px solid #737B7D;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }

  .contact-form-field-main:invalid {
    border-bottom: 2px solid #F25019;
  }

  #contact-form-message:invalid {
    border: 2px solid #F25019;
  }

  input:focus {
    outline: none;
  }

  #contact-form-message {
    font-size: 16px;
    /*margin-top: ;*/

    width: 460px;
    height: 110px;

    border-radius: 10px;

    border: unset;

    padding: 20px;
  }

  #contact-form-message:focus {
    outline: unset;
  }


  #contact-form-submit {
    width: 152px;
    height: 39px;
    left: calc(50% - 152px/2 - 87px);
    top: calc(50% - 39px/2 + 1589px);

    background: #F25019;
    border-radius: 30px;
    border: unset;

    cursor: pointer;

    font-size: 1.1em;
    font-weight: 500;
    color: #FFFFFF;

    margin-top: 30px;
  }
  #contact-form-submit:hover{
    background: rgba(242, 80, 25, 0.8);
  }

  #contact-form {
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }


  @media screen and (max-width: 900px) {
    #contact h1 {
      text-align: center;
      left: 0;
    }
    #contact-form {
      margin: 0;
    }

    #contact-content {
      flex-direction: column;
      align-items: center;
    }

    #contact-info {
      width: 100%;

      margin-top: 40px;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }

  @media screen and (max-width: 600px) {
    #contact-form {
      width: 90%;
    }
    .contact-form-field-main {
      width: 100%;
    }
    #contact-form-message {
      width: 90%;
    }
  }



</style>