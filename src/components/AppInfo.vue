<template>
	<div class="result-section section-block">
        <div id="boy_base_data_area">
          <p>Возраст: <span class="base-data" id="age_base_data"></span></p>
          <p>Рост: <span class="base-data" id="height_base_data"></span></p>
          <p>
            Обхват груди: <span class="base-data" id="bust_base_data"></span>
          </p>
          <p>
            Обхват талии: <span class="base-data" id="waist_base_data"></span>
          </p>
          <p>
            Масса тела: <span class="base-data" id="weight_base_data"></span>
          </p>
          <p>
            Индекс массы тела:
            <span class="base-data" id="imb_base_data"></span>
          </p>
          <p>
            Степень ожирения:
            <span class="base-data" id="imb_perc_base_data"></span>
          </p>
        </div>

        <div class="result-info">
          <div>
            <p>Тип: <span id="result-info-name"></span></p>
            <p>Описание: <span id="result-info-description"></span></p>
          </div>
          <div>
            <img id="result-info-img" class="result_img" />
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">

</script>