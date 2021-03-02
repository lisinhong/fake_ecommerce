<template>
  <header class="bg-custom-100 py-4 w-full">
    <div class="container flex items-center mx-auto">
      <NuxtLink class="text-custom-700" to="/product">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="30"
          height="30"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </NuxtLink>
      <div class="ml-auto text-custom-700 font-bold">
        <NuxtLink to="/product">HOME</NuxtLink>
        <NuxtLink class="ml-2" to="/category">CATEGORY</NuxtLink>
        <NuxtLink class="ml-2" to="/contact">CONTACT</NuxtLink>
        <NuxtLink class="ml-2" to="/about">ABOUT</NuxtLink>
      </div>
    </div>
  </header>
</template>
