<template>
	<div>
		<h1 class="loading"></h1>
		
		
		<router-link to="/mine/right/rightChildren" tag="a">点我跳到新页面</router-link>
		
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@-webkit-keyframes gogogo {
	    0%{
	        
	        -webkit-transform: rotate(0deg);
	       	border:5px solid red;
	    
	    }
	    50%{
	        -webkit-transform: rotate(180deg);
	        background:black;
	       	border:5px solid yellow;
	    }
	    100%{
	        -webkit-transform: rotate(360deg);
	        background:white;
	       	border:5px solid red;
	    }
	}
	.loading{
		width: 88px;
	    height: 88px;
	   	border:5px solid black;
	    border-radius:50%;
	    margin:1.5rem auto; 
	   -webkit-animation:gogogo 2s infinite linear ;
	}
	a{
		color: #007AFF;
		text-decoration: underline;
	}
</style>