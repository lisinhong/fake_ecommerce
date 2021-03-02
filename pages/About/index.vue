<template>
  <div class="container mx-auto min-h-screen flex justify-center items-center">
    <h1 class="text-6xl">This is the About page.</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About | Fake Ecommerce',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The introduction of us.',
        },
      ],
    }
  },
}
</script>
