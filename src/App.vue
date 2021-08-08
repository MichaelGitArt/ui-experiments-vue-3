<template>
  <div class="wrap">
  <ABtn> Goood </ABtn>
  <hr class="my-4" />
  <ABtn border> Outlined </ABtn>
  <hr class="my-4" />
  <ABtn color="secondary"> Goood </ABtn>
  <hr class="my-4" />
  <ABtn color="gray" size="large"> Goood </ABtn>
  <hr class="my-4" />
  <ABtn size="small" border> Goood </ABtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import ABtn from '@UI/components/ABtn/index';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ABtn,
  },
});
</script>

<style>
.wrap {
  padding: 20px;
}  
</style>