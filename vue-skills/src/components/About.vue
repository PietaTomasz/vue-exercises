<template>
<div>
    <h1>
        Hello {{ thename }}
    </h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      thename: this.$route.params.name
    }
  }
}
</script>