<template>
  <div class="relative bg-dark bg-opacity-75 w-80 h-10 p-5 pb-0 mr-16 rounded-xl shadow-lg ml-4">
    <div class="flex items-center justify-center h-full"> <!-- Center items horizontally and vertically -->
        <svg class="h-9 w-9 fill-current text-gray-500 mr-2 pb-4" viewBox="0 0 24 24">
            <path
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input type="text" placeholder="Search Twitter" class="bg-transparent text-white placeholder-gray-500 focus:outline-none pb-4"> <!-- Center placeholder text -->
    </div>
</div>

  </template>
  
  <script>
  export default {
    name: 'SearchApp'
  };
  </script>
  
  <style scoped>
  .bg-dark {

    margin-top: 10px; /* Adjust top margin for spacing */
    background-color: rgba(48, 48, 48, 0.75); /* Dark background with 75% opacity */
  }
  </style>
  