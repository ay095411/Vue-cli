<template>
	<div>
		
		<ul>
			<router-link to="/mine/left" tag="li">左边</router-link>
			<router-link to="/mine/right" tag="li">右边</router-link>
		</ul>
		<router-view></router-view>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	ul{
		width: 100%;
		height: 0.6rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		li{
			width: 50%;
			height: 100%;
			text-align: center;
			line-height: 0.6rem;
			border: 1px dotted #666;
		}
	}
</style>