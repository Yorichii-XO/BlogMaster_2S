<template>
  <div class=" bg-white min-h-screen flex justify-center items-center mt-10">
    <div class=" form grid gap-8 h-auto w-1/2">
      <div id="back-div" class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
        <div class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 class="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">Log in</h1>
          <form @submit.prevent="login" class="space-y-4">
            <div>
              <label for="email" class="mb-2 dark:text-gray-400 text-lg">Email</label>
              <input
                v-model="email"
                id="email"
                class="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label for="password" class="mb-2 dark:text-gray-400 text-lg">Password</label>
              <input
                v-model="password"
                id="password"
                class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <a class="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
              <span class="bg-left-bottom ">
                Forget your password?
              </span>
            </a>
            <button
              class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div class="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 class="dark:text-gray-300">
              Don't have an account?
              <a class="group text-blue-400 transition-all duration-100 ease-in-out" href="#">
                <span class="bg-left-bottom">
                  Sign Up
                </span>
              </a>
            </h3>
          </div>
          <!-- Third Party Authentication Options -->
          <div id="third-party-auth" class="flex items-center justify-center mt-5 flex-wrap">
            <button class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 w-14">
              <img class="w-15" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
            </button>
            <button class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 w-14">
              <img class="w-15" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="Linkedin" />
            </button>
            <button class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 w-14">
              <img class="w-15 filter dark:invert" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="Github" />
            </button>
            <button class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 w-14">
              <img class="max-w-[5px]" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
            </button>
            <button class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 w-14">
              <img class="max-w-[5px] dark:gray-100" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" alt="twitter" />
            </button>
            <button class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 w-14">
              <img class="max-w-[5px]" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/" alt="apple" />
            </button>
          </div>
          <div class="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
            <p class="cursor-default">
              By signing in, you agree to our
              <a class="group text-gray-400 transition-all duration-100 ease-in-out" href="#">
                <span class="cursor-pointer bg-left-bottom transition-all duration-500 ease-out">
                  Terms
                </span>
              </a>
              and
              <a class="group text-gray-400 " href="#">
                <span class="cursor-pointer">
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login-app',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('http://localhost:3004/users', {
          params: {
         
            email: this.email,
            password: this.password
          }
        });

        const user = response.data[0];
        if (user) {
         
          const token = btoa(`${user.email}:${user.email}`);
          localStorage.setItem('token', token);
          this.$router.push('/');
          location.reload();
        
        } else {
          this.error = 'Invalid username or password';
        }
      } catch (err) {
        this.error = 'An error occurred';
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.form{
  width: 40%;
}
body {
  font-family: 'Poppins', sans-serif;
}
.login {
  max-width: 400px;
  margin: auto;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
form div {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.5em;
}
input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
button {
  padding: 0.5em 1em;
}
p {
  color: red;
}
</style>
