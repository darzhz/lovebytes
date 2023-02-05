<script >
	import AdminFeed from './components/AdminFeed.svelte';
</script>

	<svelte:head>
	<meta charset="UTF-8">
	<title>LoveBytes</title>
	<meta name="description" content="A">
	<meta name="theme-color" content="#fd4772">
	<meta name="keywords" content="NONE">
	<meta name="author" content="Darsh">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</svelte:head>
	<div id="welcome">
			<h1>Hello,admin!</h1>
	</div>
	<AdminFeed/>
<div id="logo">
			<img src="tnp.png" width="200px" alt='logo'>
		</div>
	<div id="navi">
		<ul>
			<li><a href="#">Logout</a></li>
			<li><a href="#">Log</a></li>
			<li><a href="#">Statistics</a></li>
		</ul>
	</div>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
	/*reseting default*/
	:root{
	font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
	--pri:#FD136C;
	--sec:#FF3334;
	--tri:#d54e4ebf;
	--quad:#fd4772;
	}
*,*::before,*::after{
	box-sizing:border-box;
}
*,h1{
	margin:0;
	padding:0;
	font:inherit;
}
:global(body){
	min-height:100dvh;
	margin: 0;
	padding: 0;
	background-color: black;
	background-position: center;
	background-size: cover;
	display: grid;
	grid-template-rows: 1fr 0.07fr;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: "hero"
  											"nav";
}
/*end reset*/

ul{

	  list-style-type: none;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
}
ul li{
	padding: 10px;
}
a{
	color: white;
}
#logo{
	position: fixed;
	top: -4%;
	right: 26vw;
}
#navi{
/*	grid-area: nav;*/
	background: var(--quad);
	box-shadow: 0px -1px 14px 0px #d54e4ed9;
	border-radius: 15px;
	width: 95%;
	/*margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;*/
	top: 93svh;
	left: 2.5vw;
	position: fixed;
}
/* CSS */
.button-86 {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
/*  background: #28282d;*/
/* Created with https://www.css-gradient.com */
/*background: #D24CDC;
background: -webkit-radial-gradient(bottom left, #D24CDC, #DD3D3D);
background: -moz-radial-gradient(bottom left, #D24CDC, #DD3D3D);
background: radial-gradient(to top right, #D24CDC, #DD3D3D);;*/
	background: var(--quad);
  border-radius: 10px;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-86:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}

#calltoact {
	display: flex;
  justify-content: center;
  gap: 10%;
  margin-top: 10%;
}

@media screen and (max-width: 991px) {
  .button-75 {
    font-size: 15px;
    height: 50px;
  }
}
	
@media only screen and (min-width: 768px) {
	#logo{
		display: block;
	}
	#navi{
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	}

	}
</style>
