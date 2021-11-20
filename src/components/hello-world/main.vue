<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue';
import { getData } from '../../service/dataService';
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    // onMounted(() => {
    //   getData();
    // });
    const date: any = reactive({
      now: new Date(),
      nowString: computed(() => (date.now + '').toLocaleString())
    });
    const arrCount = ref(0);
    const arrData: any = reactive([
      { text: '這是第一段', color: true },
      { text: '第二段在這裡', color: false },
      { text: '中間是第三段', color: false },
      { text: '倒數第二是四段', color: false },
      { text: '五段最後尾', color: false }
    ]);

    let num = 1;

    window.setInterval(() => {
      date.now = new Date();
    }, 1000);
    function changeWord() {
      const arrLength = arrData.length;
      arrCount.value = arrCount.value + num;
      arrData[arrCount.value].color = !arrData[arrCount.value].color;
      if (arrCount.value === arrLength - 1 || arrCount.value === 0) {
        num = num * -1;
      }
      setTimeout(() => {
        arrData[arrCount.value - num].color = !arrData[arrCount.value].color;
      }, 0);
    }

    return {
      count: ref(0),
      arrCount,
      arrData,
      changeWord,
      date
    };
  }
});
</script>

<template>
  <img class="mx-auto my-10 mt-20" alt="Vue logo" src="@/assets/logo.png" />
  <div class="text-center">
    <h1>Hello Vue 3 + TypeScript + Vite</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank"
        >Vetur</a
      >
      or
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      (if using
      <code>&lt;script setup&gt;</code>)
    </p>

    <p>
      See
      <code>README.md</code> for more information.
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"
        >Vite Docs</a
      >
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
    <div class="buttons-text">
      <div class="count-div motion-block">
        <button class="button" @click="count++">count++</button>
        <button class="button" @click="count--">count--</button>
        {{ count }}
      </div>
      <div class="arr-div motion-block">
        <span>
          {{ arrData[arrCount].text }}
        </span>
        <button class="button" @click="changeWord">change</button>
        <span
          v-for="(item, index) in arrData"
          :key="index"
          :class="{ 'arrData-item': arrData[index].color }"
          >{{ item.text }}</span
        >
      </div>
      <div class="clock-div">
        {{ date.nowString }}
      </div>
    </div>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<!-- <style lang="postcss" scoped>
a {
  @apply text-green-600;
}

label {
  @apply mx-2 font-bold;
}

code {
  @apply p-1 mx-1 text-gray-600 rounded-md bg-true-gray-100;
}

button {
  @apply my-3 p-3 py-1 bg-true-gray-100 border-1 rounded-10xl ring-1 ring-true-gray-300 dark:(text-true-gray-800);

  &:active {
    @apply bg-true-gray-200 border-true-gray-300 dark:(bg-true-gray-300);
  }

  &:focus {
    @apply outline-none;
  }
}
</style> -->
<style lang="less">
.text-center {
  background-color: #000;
}
.button {
  box-sizing: border-box;
  border: 1px solid #fff;
  background-color: rgb(7, 68, 37);
}
.buttons-text {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.motion-block {
  display: grid;
}
.arrData-item {
  background-color: blue;
}
</style>
