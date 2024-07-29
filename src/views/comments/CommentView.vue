<template>
  <div class=" overflow-y-auto h-32 ">
    <h3 class="mr-30 font-bold mt-2">Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="flex items-center justify-between mb-2">
        <div class="flex-1">
          <p v-if="!comment.editing">{{ comment.body }}</p>
          <input v-else v-model="comment.body" @keyup.enter="saveComment(comment)" @blur="cancelEdit(comment)" class="w-full p-2 border rounded"/>
        </div>
        <div class="flex gap-2">
          <button @click="editComment(comment)" v-if="!comment.editing" class="px-2 py-1 text-blue-500 rounded">
            <!-- Edit icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 512 512">
              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
            </svg>
          </button>
          <button @click="saveComment(comment)" v-if="comment.editing" class="px-2 py-1 text-green-500 rounded">
            <!-- Save icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 512 512">
              <path d="M173.898 439.404l-166.4-166.4c-12.497-12.497-12.497-32.758 0-45.255l22.628-22.628c12.497-12.497 32.758-12.497 45.255 0L192 312.172l300.517-300.517c12.497-12.497 32.758-12.497 45.255 0l22.628 22.628c12.497 12.497 12.497 32.758 0 45.255L219.172 439.404c-12.497 12.497-32.758 12.497-45.255 0z"/>
            </svg>
          </button>
          <button @click="deleteComment(comment.id)" class="px-2 py-1 text-red-500 rounded">
            <!-- Delete icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 448 512">
              <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'CommentsAll',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(`http://localhost:3003/comments?postId=${this.postId}`);
        this.comments = response.data.map(comment => ({ ...comment, editing: false }));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
    async deleteComment(commentId) {
      try {
        await axios.delete(`http://localhost:3003/comments/${commentId}`);
        this.comments = this.comments.filter(comment => comment.id !== commentId);
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    },
    editComment(comment) {
      comment.editing = true;
    },
    cancelEdit(comment) {
      comment.editing = false;
      this.fetchComments(); 
    },
    async saveComment(comment) {
      try {
        await axios.put(`http://localhost:3003/comments/${comment.id}`, comment);
        comment.editing = false;
      } catch (error) {
        console.error('Error saving comment:', error);
      }
    }
  }
};
</script>
