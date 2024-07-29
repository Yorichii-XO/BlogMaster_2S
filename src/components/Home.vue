<template>
 <div class="bg-white pb-6 sm:pb-8 lg:pb-12 z-10">
  

  <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-8 flex flex-wrap justify-between md:mb-16">
      <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
  <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
    Welcome<br />to Our Blog
  </h1>

  <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">
    Discover insightful articles, tips, and stories on our blog. Dive into a world of knowledge and inspiration tailored just for you.
  </p>
</div>


      <div class="mb-22 flex w-full md:mb-16 lg:w-2/3 mt-10 ">
        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 h-96">
          <img src="https://www.adfontessoftware.nl/wp-content/uploads/2021/12/security-event-manager-solarwinds-adfontes-software.jpg" loading="lazy" alt="Photo by Kaung Htet" class="h-96 w-80 object-cover object-center" />
        </div>

        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg h-96 ">
          <img src="https://dz03nossv7tsm.cloudfront.net/media/filer_public_thumbnails/filer_public/0a/5a/0a5a5bd5-acac-4114-b153-ca2512a4d56e/visuel_articl_management_vie_de_lentreprise_v1-950px.png__776x3104_q85_replace_alpha-%23FFFFFF_subsampling-2.jpg" loading="lazy" alt="Photo by Manny Moreno" class="h-96 w-80 object-cover object-center" />
        </div>
      </div>
    </div>

   
  </section>
</div>
<main-router />
</template>

<script>
import Main from './Main.vue';

export default {
  name: 'home-app',
  components: {
    'main-router':Main
  },
};
</script>
