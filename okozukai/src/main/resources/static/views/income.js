export default {
    template: `
      <div >

        <div class="income-page">
          <div class="income-form">
            <div class="income-header">
              <h2>Tjäna</h2><br>
              <h3>Var snäll och fill i alla fälten. <br> Du får trycka Månads knappen en gång i månaden då bestämmer datorn din månadspeng. Lycka till!</h3>
            </div>

            <form class="income">

              Action :<input v-model="what" required type="what" placeholder="Vad gjorde du?"><br>
              Cost :<input v-model="cost" required type="cost" placeholder="Hur mycket tjänar du?"><br>
          
              <button @click="onAddTaskClick" id="add" type="button">Add</button>
              <!-- <button @click="onClearTaskClick" id="clean" type="button">Reset</button>
              <button @click="onStartClick" id="back" type="button">Back</button>
              <button @click="onHistoryClick" id="send" type="button">Historik</button>
              <button @click="onMånadPengClick" id="lön" type="button">Månad</button> -->
            </form>
          </div>
        </div>  
      </div>
  
      `,
data() {
  return {
    what: '',
    cost: ''
  }
},

methods:{

  async onAddTaskClick() {
    let m = moment();
    let currentTime = m.format("YYYY-MM-DD HH:mm:ss");
    let inout = {
      what: this.what,
      cost: this.cost,
      user: this.user.user_id, //get id of current user
      time: currentTime, //get current time
    };

    let result = await fetch("/rest/inouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inout)
    });

    console.log(result)
    result = await result.json();
    this.$store.commit("appendInout", result);

  },

  computed:{
    user() {
      return this.$store.state.user;
    }
  }

}
}
