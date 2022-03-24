<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
import NewListModal from "@/components/modal/NewListModal";
import ConfirmModal from "@/components/modal/ConfirmModal";
import ShareModal from "@/components/modal/ShareModal";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {DashboardContent, NewListModal, ConfirmModal, ShareModal},
  data() {
    return {
      isNewListModal: false,
      isConfirmFavoriteModal: false,
      isConfirmRemoveModal: false,
      isShareModal: false,
      listEvent: null,
      todolists: null,
      numberTaskGlobal: 0
      
    }
  },
  mounted(){
    console.log("localStorage : " + localStorage.getItem("todolists"))
    if(JSON.parse(localStorage.getItem("todolists"))){
        this.todolists = JSON.parse(localStorage.getItem("todolists")).todolist
        for(let item = 0;item<this.todolists.length;item+=1){
          this.numberTaskGlobal+=this.todolists[item].numberTasks
          
        }
    }
  },
  computed: {
    numberTotalOfTask() {
      let sum = 0
      this.lists.forEach((item) => {
        sum += item.number_of_task
      })
      return sum
    },
    numberTotalOfList() {
      return this.lists.length
    }
  },
  methods: {
    toggleNewListModal() {
      this.isNewListModal = !this.isNewListModal;
    },
    toggleConfirmFavoriteModal(list) {
      this.isConfirmFavoriteModal = !this.isConfirmFavoriteModal;
      this.listEvent = list;
    },
    toggleConfirmRemoveModal(list) {
      this.isConfirmRemoveModal = !this.isConfirmRemoveModal;
      this.listEvent = list;
    },
    toggleShareModal(list) {
      this.isShareModal = !this.isShareModal;


      if(list) {
        this.listEvent = {
            id: list.id, 
            name: list.name,
            members: list.members
          };
      } else {
        this.listEvent = list
      }
    },
    addToFavorite() {
      this.isConfirmFavoriteModal = !this.isConfirmFavoriteModal;
      this.listEvent.is_favorite = !this.listEvent.is_favorite
      // update database with api call
      console.log("is_favorite : " + this.listEvent.is_favorite)
      this.$store.dispatch("updateFavorite", {
        id_todolist: this.listEvent.id_todolist,
        is_favorite: this.listEvent.is_favorite
      }).then(() => {
          this.$store.dispatch("dashboardLists",{
            id_user: JSON.parse(localStorage.getItem("user")).id_user
          }).then(() => {
          this.$router.go()
        })
      })
    },
    
    removeTask() {
      this.isConfirmRemoveModal = !this.isConfirmRemoveModal;
      // update database with api call
      this.$store.dispatch("deleteTodolist", {
        id_todolist: this.listEvent.id_todolist
      }).then(() => {
        this.$store.dispatch("dashboardLists", {
          id_user: JSON.parse(localStorage.getItem("user")).id_user
        }).then(() => {
          this.$router.go()
        })
      })
    }
  },
}
</script>


<template>
  <div>
    <NewListModal v-show="isNewListModal" @close="toggleNewListModal"/>

    <ConfirmModal v-show="isConfirmFavoriteModal" 
    :content="this.listEvent ? this.listEvent.is_favorite ? 'Are you sure you want to remove the ' + this.listEvent.name + ' list from your favorites?' : 'Are you sure you want to add the ' + this.listEvent.name + ' list to your favorites ?' : 'Error Retry'"
    @cancel="toggleConfirmFavoriteModal(null)" @confirm="addToFavorite"/>

    <ConfirmModal v-show="isConfirmRemoveModal" 
    :content="this.listEvent ? 'Are you sure you want to delete the ' + this.listEvent.name + ' list permanently?' : 'Error Retry'"
    @cancel="toggleConfirmRemoveModal(null)" @confirm="removeTask"/>

    <ShareModal v-show="isShareModal" @close="toggleShareModal(null)" :list="listEvent"/>


    <DashboardContent>
      <template v-slot:title>My ToDo lists</template>

      <template v-slot:logo>
        <img src="../assets/plus-circle.svg" alt="Plus circle" @click="toggleNewListModal" style="cursor: pointer;">
      </template>

      <template v-slot:info>
        <div class="dashboard-content-header-info-item"><h1>Number of lists</h1><p>{{ todolists.length }}</p></div>
        <div class="dashboard-content-header-info-item"><h1>Number of tasks</h1><p>{{ numberTaskGlobal }}</p></div>
      </template>

      <template v-slot:main>
        <table id="dashboard-table">
          <tr id="dashboard-table-header">
            <th>Name</th>
            <th>Tasks</th>
            <th>Members</th>
            <th></th>
          </tr>
          <tr v-for="list in todolists" :key="list.id_todolist" class="dashboard-table-row">
            <td>
              <router-link :to="{ name: 'list', params: { id: list.id_todolist}}" class="dashboard-table-row-name">
                {{ list.name }}
              </router-link></td>
            <td>{{ list.numberTasks }}</td>
            <td><div v-for="(member, index) in list.members" :key="index" class="dashboard-table-members">
              <p>{{ member.firstname[0].toUpperCase() }}{{ member.lastname[0].toUpperCase() }}</p>
            </div></td>
            <td style="width: 130px">
              <img v-if="list.is_favorite" src="../assets/favorite_checked.svg" alt="Favorite checked icon" @click="toggleConfirmFavoriteModal(list)" style="cursor: pointer;">
              <img v-else src="../assets/favorite.svg" alt="Favorite icon" @click="toggleConfirmFavoriteModal(list)" style="cursor: pointer;">
              <img src="../assets/share.svg" alt="Share icon" @click="toggleShareModal(list)" style="cursor: pointer;">
              <img src="../assets/bin.svg" alt="Delete icon " @click="toggleConfirmRemoveModal(list)" style="cursor: pointer;">
            </td>
          </tr>
        </table>
      </template>
    </DashboardContent>
  </div>
</template>



<style>
  #dashboard-table {
    border-spacing: 0;
    width: 90%;
  }
  #dashboard-table img{
    width: 20px;
    margin: 0 10px;
    cursor: pointer;
  }
  #dashboard-table tr {
    height: 45px;
  }
  #dashboard-table th {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    text-align: left;
    color: #212121;
  }
  #dashboard-table td {
    border-bottom: 2px solid #E0E4EA;
    padding: 10px;
  }
  #dashboard-table-header th {
    border-bottom: 1px solid #2E82FF;
    border-top: 1px solid #2E82FF;
    background: #CFE2FD;
  }
  .dashboard-table-members {
    display: inline-block;
  }
  .dashboard-table-members > p {
    margin: 0 3px;
  }
  .dashboard-table-row-name {
    color: #212121;
    text-decoration: unset;
  }
  .dashboard-table-row-name:hover {
    color: #F25019;
  }
</style>