<template>
	<div>
		<div class="oDiv">
			<button @click="showToggle" v-text="btnText"></button>
			<h1 v-show="isShow">我是right跳转后的页面！</h1>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:true,
				btnText:"隐藏"
			}
		},
		methods:{
			showToggle:function(){
				this.isShow = !this.isShow
				if(this.isShow){
					this.btnText = "隐藏"
				}else{
					this.btnText = "显示"
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.oDiv{
		width:100%;
		margin-top: 2rem !important;
		text-align: center;
	}
</style>