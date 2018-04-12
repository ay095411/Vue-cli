<template>
	<div id="footer" class="linkStyle">
		<router-link to="/home" tag="a" router-link-active="active" exact>首页</router-link>
		<router-link to="/news" tag="a" router-link-active="active">新闻</router-link>
		<router-link to="/mine" tag="a" router-link-active="active">我的</router-link>
	</div>
</template>
 <!--v-if="!{path:'/home'}"-->
<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#footer{
		width: 100%;
		height: 0.56rem;
		background: #666;
		display: flex;
		a{
			box-sizing: border-box;
			width: 33.3%;
			height: 100%;
			color: #FFF;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #ccc;
		}
	}
	.active{
		color: blue;
		background: green;
	}
	
</style>