<template>
  <div class="container mx-auto min-h-screen flex justify-center items-center">
    <h1 class="text-6xl">This is the Category List page.</h1>
  </div>
</template>

<script>
export default {
  name: 'Category',
  head() {
    return {
      title: 'Category | Fake Ecommerce',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The category list of our products.',
        },
      ],
    }
  },
}
</script>
