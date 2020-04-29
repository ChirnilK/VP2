export default {
    template: `
      <div >
        <button id=income @click="onIncomeClick" type="button">Tjäna</button>
        <button id=outcome @click="onOutcomeClick" type="button">Spendera</button>
        <button id=history @click="onHistoryClick" type="button">Historik</button>
    </div>
  
      `,

      methods:{
        onIncomeClick(){
          this.$router.push('/income');
        },
        onOutcomeClick(){
          this.$router.push('/outcome');
        },
        onHistoryClick(){
          this.$router.push('/history');
        }
      },

      computed:{
        user(){
            return this.$store.state.user
        }
      }
}