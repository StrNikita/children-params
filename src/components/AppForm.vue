<template>
  <div class="section-block">
    <form @submit.prevent="calculate">
      <input
        v-model.number="age"
        type="number"
        placeholder="Возраст"
        class="base-input"
      />
      <input
        v-model.number="height"
        type="number"
        placeholder="Рост"
        class="base-input"
      />
      <input
        v-model.number="weight"
        type="number"
        placeholder="Масса тела"
        class="base-input"
      />
      <input
        v-model.number="bust"
        type="number"
        placeholder="Обхват груди"
        class="base-input"
      />
      <input
        v-model.number="waist"
        type="number"
        placeholder="Обхват талии"
        class="base-input"
      />
      <br />
      <button type="submit" class="btn btn-primary">Рассчитать</button>
      <button type="button" @click="print" class="btn btn-primary">
        Распечатать
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const age = ref<string>();
const height = ref<string>();
const weight = ref<string>();
const bust = ref<string>();
const waist = ref<string>();

const calculate = () => {};
const print = () => {
  window.print();
};
</script>
