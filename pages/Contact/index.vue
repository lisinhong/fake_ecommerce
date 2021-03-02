<template>
  <div class="container mx-auto min-h-screen flex justify-center items-center">
    <h1 class="text-6xl">This is the Contact page.</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head() {
    return {
      title: 'Contact | Fake Ecommerce',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get connected with us.',
        },
      ],
    }
  },
}
</script>
