<template>
	<div>
		<div class="main">
			<ul>
				<li>
					<input type="radio" name="tabs" id="tab1" checked>
					<label for="tab1">语文</label>
					<div>床前明月光</div>
				</li>
				<li>
					<input type="radio" name="tabs" id="tab2">
					<label for="tab2">数学</label>
					<div>疑是地上霜</div>
				</li>
				<li>
					<input type="radio" name="tabs" id="tab3">
					<label for="tab3">英语</label>
					<div>举头望明月</div>
				</li>
				<li>
					<input type="radio" name="tabs" id="tab4">
					<label for="tab4">政治</label>
					<div>低头思故乡</div>
				</li>
			</ul>
		</div>
		
		<br />
		<br />
		<br />
		<br />
		<h1>{{ gettersMsg }}</h1>
		
		
		
	</div>
</template>

<script>
	import $ from 'jquery'
	import {mapGetters} from 'vuex';
  	//引入mapGetters
	
	export default {
		data() {
			return {

			}
		},
		mounted() {
			
			$(".main ul").on("click","li",function() {
				console.log($(this).index())
			})
			
		},
		computed: {...mapGetters(['gettersMsg'])}
    	//使用mapGetters 辅助函数
	}
</script>

<style scoped="scoped" lang="scss">
	.main {
		position: relative;
		width: 100%;
		height: 1.6rem;
		color:#000;
		input {
			display: none
		}
		label {
			display: block;
			height: 0.32rem;
			cursor: pointer;
			text-align: center;
		}
		ul{
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100%;
		}
	}
	.main li {
		float: left;
		margin-right: 0.4rem;
		width: 25%;
		height: 0.4rem;
		background: #CCCCCC;
		line-height: 0.24rem;
	}
	
	.main div {
		position: absolute;
		top: 0.6rem;
		left: 0;
		display: none;
		width: 100%;
		height: 1.26rem;
		padding: 1rem;
	}
	
	.main div,
	.main input:checked~label {
		background: #999
	}
	
	.main input:checked~div {
		display: block
	}
</style>