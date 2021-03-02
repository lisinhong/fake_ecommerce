<template>
  <div class="container min-h-screen py-8 mx-auto flex flex-col">
    <client-only>
      <section
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-10"
      >
        <Card
          v-for="product in productList"
          :id="product.id"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :img-url="product.imgUrl"
        />
      </section>
      <section class="mt-auto mb-10 flex justify-center">
        <ul class="flex list-none rounded">
          <li
            class="leading-tight bg-white hover:bg-custom-100 border border-custom-300 text-custom-700 border-r-0 ml-0 rounded-l"
          >
            <button
              class="py-2 px-3 focus:outline-none"
              @click="navigateToFirst"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li
            v-for="n in totalPage"
            :key="`page-${n}`"
            class="leading-tight bg-white hover:bg-custom-100 border border-custom-300 text-custom-700 border-r-0"
            :class="{ ' bg-custom-100': n === page }"
          >
            <button class="py-2 px-3 focus:outline-none" @click="navigateTo(n)">
              {{ n }}
            </button>
          </li>
          <li
            class="leading-tight bg-white hover:bg-custom-100 border border-custom-300 text-custom-700 rounded-r"
          >
            <button
              class="py-2 px-3 focus:outline-none"
              @click="navigateToLast"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </section>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  async asyncData({ app, query }) {
    const page = query.page ? parseInt(query.page) : 1
    const startIndex = (page - 1) * 12 + 1
    const productList = []

    await app.$fire.database
      .ref('products')
      .orderByChild('id')
      .startAt(startIndex)
      .limitToFirst(12)
      .once('value', (snapshot) => {
        snapshot.forEach((item) => {
          productList.push(item.val())
        })
      })

    return { page, productList }
  },
  data() {
    return {
      totalPage: Math.floor(50 / 12) + 1,
    }
  },
  head() {
    return {
      title: 'Product List | Fake Ecommerce',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The product list in fake ecommerce.',
        },
      ],
    }
  },
  watchQuery: true,
  methods: {
    navigateTo(n) {
      this.$router.push({ path: 'product', query: { page: n } })
    },
    navigateToFirst() {
      if (this.page !== 1) this.navigateTo(this.page - 1)
    },
    navigateToLast() {
      if (this.page !== this.totalPage) this.navigateTo(this.page + 1)
    },
  },
}
</script>
