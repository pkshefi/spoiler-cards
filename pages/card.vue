<template>
  <div class="p-4 ">
    
    <div class="max-w-xs w-auto rounded-lg overflow-hidden shadow-xl mb-4 ">
      <img
        class="w-full"
        src="https://cdn-products.eneba.com/resized-products/TNVA57HERJBpx6HwHU5cxpXnp0upLCUEXFUBdYSyfvA_350x200_2x-0.jpeg"
        alt="Farcry 6 releases soon"
      >
      <div class="px-6 py-4 pb-6 bg-gray-900">
        <div class="mb-2 text-gray-600 -m-px">Trailer
          <span class="text-yellow-200">NEW</span>
        </div>
        <div class="font-bold text-gray-400 mb-2">FarCry 6</div>
        <span class="mb-2 text-gray-600 -m-px">Release at 12/09/21</span>
      </div>
     
    </div>
    <NuxtLink to="./wide-card">
      <TButton>Button</TButton>
    </NuxtLink>
  </div>




  
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>