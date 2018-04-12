<template>
	<div>
	  	<br />
	  	<br />
		<p> 我是App.vue中的p， gettersMsg 的值是----- {{gettersMsg}}</p>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
        data () {
            return {}
        },
        computed:{...mapGetters(['gettersMsg'])}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>