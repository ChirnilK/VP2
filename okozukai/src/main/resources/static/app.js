export default {
    template: `
      <div id="app">
        <header>
          <font color="orange" size="6" face="Comic Sans MS">e-Plånbok</font><br/>
          <nav id="meny-rad">
              <router-link to="/login">Login </router-link>
              <router-link to="/choice">Choice </router-link>
              <router-link to="/myPage" v-if="user"><i class="fas fa-user"></i></i></router-link> -->
              <a @click="doLogout" v-if="user"><i class="fas fa-door-open"></i></a>
          </nav>
        </header>
        <main>
          <router-view />
        </main>
        <footer></footer>
      </div>
    `,
     methods: {
      doLogout() {
        fetch('/logout')
        console.log('Successfully logged out')
        this.$store.commit('setUser', null)
        alert("Successfully logged out!")
        this.$router.push('/login').catch((err) => {
          throw new Error(`Problem handling something: ${err}.`);
        })
      },

      computed: {
         user() {
           return this.$store.state.user
         } ,
         userAdmin() {
           let user = this.$store.state.user 
           console.log(user.admin)
           return user.admin
         } 
       }
     , 
       async created() {
         let user = await fetch("/auth/whoami");
         
         try {
           user = await user.json()
           this.$store.commit('setUser', user)
           console.log('Login user :', user.username);
         } catch{
           console.log('Client not authenticated');
         }

         let users = await fetch("/rest/users");
         users = await users.json();
         this.$store.commit("setUsers", users);
    }
  }
}