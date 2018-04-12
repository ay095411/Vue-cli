<template>
  <div id="app">
  	<router-view></router-view>
  	<div id="footer">
  		<v-footer></v-footer>
  	</div>
  	
  	
  </div>
</template>

<script>
	import Footer from '@/components/footer'
	import {mapGetters} from 'vuex';
export default {
  data(){
  	return{
  		
  	}
  },
  components:{
  	"v-footer":Footer
  },
  computed:{...mapGetters(['gettersMsg'])}
}
</script>

<style scoped="scoped" lang="scss">
	#footer{
		position: fixed;
		left: 0 !important;
		bottom: 0 !important;
		width: 100%;
		height: 0.46rem;
	}
</style>