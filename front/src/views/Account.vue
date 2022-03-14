<template>
  <DashboardContent>
    <template v-slot:title>Account</template>
  </DashboardContent>
</template>

<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Account",
  components: {DashboardContent}
}
</script>

<style scoped>

</style>