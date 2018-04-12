<template>
	<div>
		<div id="swiper">
			<v-swiper></v-swiper>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import Swiper from '@/components/swiper'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			"v-swiper": Swiper
		},
	}
</script>

<style scoped="scoped" lang="scss">

</style>