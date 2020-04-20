export default {
    template: `
      <div class="login-page">
      <div class="form">
        <div class="login-header">
          <h3>LOGIN</h3><br>
          <h4>Please enter your credentials to login.</h4>
        </div>
        <form class="login" @submit.prevent="performLogin">
          <input v-model="username" required type="username" placeholder="Username"><br>
          
          <input v-model="password" required type="password" placeholder="Password"><br>
          <button>Login</button><br>
          <p v-if="errorLogin" :style="{color: 'red'}">Wrong username or password</p>
        </form>
      </div>
    </div>
  
      `,
    data() {
      return {
        username: '',
        password: '',
        errorLogin: false
      }
    },
    methods: {
      async performLogin() {
  
        const credentials = 'username=' +
          encodeURIComponent(this.username)
          + '&password=' +
          encodeURIComponent(this.password)
  
        let response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: credentials
        });
  
          if(response.url.includes('error')) {
            console.log('Wrong name/password');
            this.errorLogin = true
          }
          else {
        
            
            let user = await fetch('/auth/whoami')
            user = await user.json()
            this.$store.commit('setUser', user)
            console.log('Successfully logged in:', user)
  
            this.$router.push('/mypage');
          }
      },