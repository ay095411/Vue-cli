<template>
	<div>
		<div class="swiper-container lb" style="border-bottom: 1px dashed #CCCCCC;">
			<ul class="swiper-wrapper">
				<li class="swiper-slide">11111111111111</li>
				<li class="swiper-slide">2222222222222</li>
				<li class="swiper-slide">33333333333</li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>
		<br /><br />
		<button @click="changeMsg">点我改变数据</button>
		<p>gettersMsg数据目前是: {{ gettersMsg }}</p>
		
		<br /><br /><br /><br />
		<input type="text" placeholder="输入您想说的话" v-model="name"/><br /><br />
		<p style="color: red;">这里会显现你要说的话 -----{{name}}</p>
	</div>
</template>

<script>
	import $ from 'jquery'
	import { mapGetters, mapActions } from 'vuex';
	export default {
		data() {
			return {
				name:""
			}
		},
		mounted() {
			
		},
		computed: { 
			...mapGetters(['gettersMsg'])
		},
		//对应getters.技术中的gettersMsg
		methods: {
			...mapActions(['changeMsg']),
			}
		}
		//对应 Actions中changeMsg方法|| 映射this.changeMsg() 为 this.$store.dispatch('changeMsg')
</script>

<style scoped="scoped" lang="scss">
	.swiper-container {
		width: 100%;
		height: 3rem;
		.swiper-slide {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 0.6rem;
		}
	}
</style>