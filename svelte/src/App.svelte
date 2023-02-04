<script >
	import Modal from './components/Modal.svelte';
	import Feed from './components/Feed.svelte';
	var circ = document.querySelectorAll('div');
var newq;
let h,w,nh,nw,s; 
let heart = [...Array(10).keys()];
$: showMod = false;
$: showHero = true;
$:feed = false;
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
	<video autoplay muted loop id="myVideo">
  <source src="back2.mp4" type="video/mp4">
	</video>
{#if showMod}
			<Modal on:close="{() => showMod = false}"/>
{/if}
{#if showHero}
			<svg class="heart" style="--num:{heart};--wi:300px;" viewBox="0 0 32 29.6">
  			<path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
			</svg> 
	<div id="hero">
		<div id="text">
			<h1>Happy</h1>
			<h1>Valentine's</h1> 
			<h1>week</h1>
			<p>-Let them anonymously Know that your heart beats out of control for them-</p>
		</div>
		<div id="calltoact">
			<button class="button-86" on:click="{() => showMod = true}"><span class="text">Confess</span></button>
			<button class="button-86" on:click="{() =>{feed = true;showHero=false}}"><span class="text">Feed</span></button>
		</div>
		<div id="illustration">
			
		</div>
	</div>
{/if}
{#if feed}
	<Feed on:close="{() =>{ feed = false;showHero = true}}"/>
{/if}
<div id="logo">
			<img src="tnp.png" width="200px" alt='logo'>
		</div>
	<div id="navi">
		<ul>
			<li><a href="#" on:click="{() =>{feed = true;showHero=false}}">Explore</a></li>
			<li><a href="#" on:click="{() => showMod = true}">Confess</a></li>
			<li><a href="#">My Match</a></li>
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
	background-color: transparent;
/*	background-image: url('../background.gif');*/
	background-position: center;
	background-size: cover;
	display: grid;
	grid-template-rows: 1fr 0.07fr;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: "hero"
  											"nav";
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
}
/*img,picture,svg,video{
	display:block;
	max-width:100%;
}*/
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
#hero{
	grid-area: hero;
	display: grid;
  align-content: center;
  justify-content: center;
  align-items: stretch;
  justify-items: stretch;
}
#hero h1{
	font-size: 5em;
	color: white;
	font-family: 'Pacifico', cursive;
	text-align: center;
	line-height: 1;
}
#hero p{
	color: lightgrey;
	font-family: 'Pacifico';
	text-align: center;
	text-shadow: 0px 0px 2px #d7444470;
  font-size: 1.2rem;
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
.heart {
	fill: var(--quad);
	opacity: 0.8;
  z-index: -1;
  position: fixed;
  user-select: none;
  /*top: calc(var(--num) * 100px);
  left: 5px;*/
  width: var(--wi);
  top: calc(50vh - calc(var(--wi) / 1.3));
  left: calc(50vw - calc(var(--wi) / 2));
  animation: pulse 1s ease infinite;
/*  animation-delay: calc(var(--num)*250ms);*/
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { 
  	transform: scale(1.5);
  						 }
  100% { transform: scale(1); }
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
