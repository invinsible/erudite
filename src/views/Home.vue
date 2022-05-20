<template>
  <div>
    <header>
      <router-link :to="{name: 'imparfait'}" class="link" active-class="link-active">Imparfait</router-link>
      <!-- <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Present</router-link>
      <router-link :to="{name: 'antonim'}" class="link" active-class="link-active">Passe compose</router-link> -->
    </header>
  </div>
</template>
<script>
export default {
  name: 'HomePage'
}
</script>