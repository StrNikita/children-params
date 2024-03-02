<template>
  <main>
    <ChooseGender />
    <h4>Входные данные</h4>
    <AppForm />
    <AppInfo />
    <AppTable />
  </main>
</template>

<script setup lang="ts">
import ChooseGender from "@/components/ChooseGender.vue";
import AppForm from "@/components/AppForm.vue";
import AppInfo from "@/components/AppInfo.vue";
import AppTable from "@/components/AppTable.vue";
</script>
