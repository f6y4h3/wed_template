<template>
  <div>
    <input v-bind="$attrs"/>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
import { useAttrs ,onMounted} from "vue";
const attrs = useAttrs()
defineEmits(['input'])
onMounted(()=>{
  console.log(attrs);
})
// const inputEven = (val) => {
//   $emit('input', val)
// }
</script>