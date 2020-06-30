<template>
  <div class="container">
    <Head />
    <Search />
    <PageOne />
    <logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Head from '~/components/Head'
import Search from '~/components/Search'
import PageOne from '~/components/PageOne'
export default {
  components: {
    Logo,
    Head,
    Search,
    PageOne
  }
}
</script>

<style>
</style>
