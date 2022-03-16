<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
import NewListModal from "@/components/modal/NewListModal";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {DashboardContent, NewListModal},
  data() {
    return {
      isNewListModal: false,
      lists: [
        {
          id: 1,
          name: "Kanban model",
          is_favorite: true,
          member: null,
          number_of_task: 6
        },
        {
          id: 2,
          name: "Education",
          is_favorite: false,
          member: ["KZ"],
          number_of_task: 6
        },
        {
          id: 3,
          name: "Travel",
          is_favorite: true,
          member: ["PD", "MC", "GD"],
          number_of_task: 6
        }
      ]
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
    showModal() {
      this.isNewListModal = true;
    },
    closeModal() {
      this.isNewListModal = false;
    }
  },
}
</script>


<template>
  <div>
    <NewListModal v-show="isNewListModal" @close="closeModal"/>

    <DashboardContent>
      <template v-slot:title>My ToDo lists</template>

      <template v-slot:logo>
        <img src="../assets/plus-circle.svg" alt="Plus circle" @click="showModal" style="cursor: pointer;">
      </template>

      <template v-slot:info>
        <div class="dashboard-content-header-info-item"><h1>Number of lists</h1><p>{{ numberTotalOfList }}</p></div>
        <div class="dashboard-content-header-info-item"><h1>Number of tasks</h1><p>{{ numberTotalOfTask }}</p></div>
      </template>

      <template v-slot:main>
        <table id="dashboard-table">
          <tr id="dashboard-table-header">
            <th>Name</th>
            <th>Tasks</th>
            <th>Members</th>
            <th></th>
          </tr>
          <tr v-for="list in lists" :key="list.id" class="dashboard-table-row">
            <td>
              <router-link :to="{ name: 'list', params: { id: list.id }}" class="dashboard-table-row-name">
                {{ list.name }}
              </router-link></td>
            <td>{{ list.number_of_task }}</td>
            <td><div v-for="(member, index) in list.member" :key="index" class="dashboard-table-members">
              <p>{{ member }}</p>
            </div></td>
            <td style="width: 130px">
              <img v-if="list.is_favorite" src="../assets/favorite_checked.svg" alt="Favorite checked icon">
              <img v-else src="../assets/favorite.svg" alt="Favorite icon">
              <img src="../assets/share.svg" alt="Share icon">
              <img src="../assets/bin.svg" alt="Delete icon ">
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