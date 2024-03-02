<template>
  <div>
    <h1>Антропометрические параметры подростков</h1>
    <div class="sex-area">
      <button
        class="btn sex-option"
        :class="gender === Gender.girl ? 'btn-success' : 'btn-outline-success'"
        @click="chooseGirl"
      >
        Девочка
      </button>
      <button
        class="btn sex-option"
        :class="gender === Gender.boy ? 'btn-success' : 'btn-outline-success'"
        @click="chooseBoy"
      >
        Мальчик
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

enum Gender {
  girl = "girl",
  boy = "boy",
}

const gender = ref<Gender>(Gender.girl);
const age = ref<string>();
const height = ref<string>();
const weight = ref<string>();
const bust = ref<string>();
const waist = ref<string>();

const chooseGirl = () => {
  gender.value = Gender.girl;
  resetInputs();
};

const chooseBoy = () => {
  gender.value = Gender.boy;
  resetInputs();
};

const resetInputs = () => {
  age.value = "";
  height.value = "";
  weight.value = "";
  bust.value = "";
  waist.value = "";
};
</script>
