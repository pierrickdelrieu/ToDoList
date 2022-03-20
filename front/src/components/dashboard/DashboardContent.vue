<template>
  <div id="dashboard">
    <SideBar />
    
    <div id="dashboard-content">
        
      <div id="dashboard-content-header">
        <h1><slot name="title"></slot></h1>
      

        <div id="dashboard-content-header-info" v-show="displayInfo">
          <slot name="info"></slot>
        </div>

        <div id="dashboard-content-header-logo">
          <slot name="logo"></slot>
        </div>
      </div>
    

      <div id="dashboard-content-main">
        <slot name="main"></slot>
      </div>

      <slot name="modal"></slot>

    </div>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar";


export default {
  name: "DashboardContent",
  props: {
    displayInfo: {
      type: Boolean,
      default: true
    }
  },
  components: { SideBar },
};
</script>

<style>
#dashboard {
  position: relative;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#dashboard-content {
  position: relative;
  margin: 0 50px;
  height: 90%;
  width: calc(100% - 250px);
  background-color: #ffffff;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
}
#dashboard-content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  position: relative;
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
#dashboard-content-header > h1 {
  font-weight: 500;
  font-size: 36px;
  margin: 0;
  color: #000000;
}
#dashboard-content-header-info {
  background: #ffebdc;
  border-radius: 15px;
  padding: 5px 10px;
}
.dashboard-content-header-info-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
}
.dashboard-content-header-info-item > h1 {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin: 0 20px 0 0;
}
.dashboard-content-header-info-item > p {
  margin: 0;
}

#dashboard-content-header-logo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#dashboard-content-header-logo > img {
  margin: 0 10px;
  width: 20px;
  height: 20px;
}
#dashboard-content-main {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
@media screen and (max-width: 1200px) {
  #dashboard-content-header-info {
    display: none;
  }
}
@media screen and (max-width: 1000px) {
  #dashboard {
    display: flex;
  }
  #dashboard-content {
    margin: 0;
    position: fixed;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    width: 95%;
    height: 95%;
  }
}
</style>