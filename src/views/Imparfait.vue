<template>
  <div>
    <header>
      <router-link :to="$route.name !== 'imparfait' ? {name: 'imparfait'} : {name: 'index'}" class="back-link">Back</router-link>
      <router-link :to="{name: 'etre'}" class="link" active-class="link-active">Etre</router-link>
      <router-link :to="{name: 'avoir'}" class="link" active-class="link-active">Avoir</router-link>
      <router-link :to="{name: 'pacvoir'}" class="link" active-class="link-active">Pacvoir</router-link>
    </header>
    <section>
      <router-view/>
    </section>
  </div>  
  
</template>

<script>
export default {
  name: 'ImpPage'
}
</script>

<style scoped>
.back-link {
  position: absolute;
  left: 0;
  font-size: 14px;
  text-decoration: none;
}
</style>