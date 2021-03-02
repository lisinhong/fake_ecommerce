<template>
  <div class="min-h-screen py-8">
    <div class="grid gap-12 grid-cols-1 sm:grid-cols-2 px-16 mx-auto container">
      <section>
        <img
          :src="product.imgUrl"
          :alt="product.name"
          class="w-full h-full object-cover rounded-md"
        />
      </section>
      <section class="flex flex-col">
        <h3 class="text-xl text-gray-700 font-bold">{{ product.name }}</h3>
        <p class="text-sm text-gray-500 mt-1">$ {{ product.price }}</p>
        <hr class="my-4 border-gray-300" />
        <p class="text-base text-gray-600">{{ product.description }}</p>
        <div class="flex items-center my-4 mt-auto">
          <span class="text-custom-700 mr-2">Count:</span>
          <button
            class="mr-2 rounded-full border-custom-500 focus:border-custom-700 text-custom-500 focus:text-custom-700 border-solid border-2 w-5 h-5 focus:outline-none"
            @click="minusCount"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <span class="text-custom-700">{{ count }}</span>
          <button
            class="ml-2 rounded-full border-custom-500 focus:border-custom-700 text-custom-500 focus:text-custom-700 border-solid border-2 w-5 h-5 focus:outline-none"
            @click="addCount"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-stretch">
          <button
            class="px-5 py-2 bg-custom-700 text-white rounded-md focus:outline-none hover:opacity-75"
          >
            Order Now
          </button>
          <button
            class="p-2 rounded-md text-custom-500 ml-4 focus:outline-none border-solid border-2 border-custom-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
    <div class="mt-10 mx-auto container">
      <h1 class="text-xl text-custom-700 font-bold mb-2">More Products</h1>
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <Card
          v-for="product in otherProductList"
          :id="product.id"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :img-url="product.imgUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  async asyncData({ app, params }) {
    const { id } = params
    let product = {}

    await app.$fire.database
      .ref('products')
      .orderByChild('id')
      .equalTo(parseInt(id))
      .once('value', (snapshot) => {
        snapshot.forEach((item) => {
          product = item.val()
        })
      })

    let otherProductList = []
    await app.$fire.database
      .ref('products')
      .limitToLast(5)
      .once('value', (snapshot) => {
        snapshot.forEach((item) => {
          if (item.val().id !== parseInt(id)) otherProductList.push(item.val())
        })
      })
    otherProductList = otherProductList.slice(0, 4)

    return { product, otherProductList }
  },
  data() {
    return {
      count: 1,
    }
  },
  head() {
    return {
      title: `${this.product.name} | Fake Ecommerce`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.product.imgUrl,
        },
      ],
    }
  },
  methods: {
    addCount() {
      this.count += 1
    },
    minusCount() {
      if (this.count > 0) this.count -= 1
    },
  },
}
</script>
