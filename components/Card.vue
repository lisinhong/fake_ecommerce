<template>
  <NuxtLink :to="`/product/${id.toString()}`">
    <div
      class="flex flex-col flex-grow-0 flex-shrink w-full bg-white rounded-md shadow-md overflow-hidden"
    >
      <div
        class="flex items-end justify-end w-full h-56 bg-cover bg-center"
        :style="{ backgroundImage: `url(${imgUrl})` }"
      >
        <button
          class="p-2 rounded-full bg-custom-500 text-white mx-5 -mb-4 hover:bg-custom-300 focus:outline-none focus:bg-custom-300 z-10"
        >
          <svg
            class="h-5 w-5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="px-5 py-3">
        <p class="text-md text-gray-700 font-bold truncate">{{ name }}</p>
        <p class="text-sm text-gray-500 mt-1">$ {{ price }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
