<template>
  <div class="register">
    <nuxt />
    <register-form />
  </div>
</template>

<script>
import RegisterForm from '~/components/RegisterForm'
export default {
  layout: 'registerHead',
  components: {
    RegisterForm
  }
}
</script>

<style scoped lang='less'>
.register {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>