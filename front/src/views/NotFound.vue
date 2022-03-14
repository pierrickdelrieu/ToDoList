<template>
    <div>
    <Header/>
    <div id="not-found">
        <div id="not-found-content">
        <h1>Ooops...</h1>
        <h2>Page not found</h2>

        <p>This url cannot be found, please direct to the home page or contact us</p>

        <router-link id="not-found-content-btn" to="/">Go Home</router-link>

        </div>

        <img src="../assets/404.png" alt="Error 404">

    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "NotFound",
  components: {Header}
}
</script>

<style>
  #not-found-content {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  #not-found-content > h1 {
    font-weight: bold;
    font-size: 2.5em;
    letter-spacing: 0.02em;

    color: #212121;
    margin: 0;
  }
  #not-found-content > h2 {
    font-weight: normal;
    font-size: 2em;
    letter-spacing: 0.02em;

    color: #212121;
    margin: 0;
  }

  #not-found-content > p {
    font-weight: 300;
    font-size: 1.5em;
    line-height: 130%;
  }

  #not-found-content-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 1.2em;
    color: #FFFFFF;
    text-decoration: unset;

    width: 150px;
    height: 40px;

    background: #F25019;
    border-radius: 15px;
  }

  #not-found-content-btn:hover {
    background: rgba(242, 80, 25, 0.8);
  }

  #not-found > img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 1100px) {
    #not-found-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 90%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    #not-found > img {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      /* Filtre */
      -webkit-filter : opacity(25%); /* Chrome, Safari, Opera */
      filter : opacity(25%);
    }
  }
</style>