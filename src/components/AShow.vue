<template>
  <p>AShow: {{ content }}</p>
</template>
<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

