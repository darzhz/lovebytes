<script>
  import { fade,fly } from 'svelte/transition';
  import html2canvas from 'html2canvas';
  export let confess = "unable to fetch data from server"
  export let name = null;
  export let insta;
  export let date;
  export let approved = false;
  let post;
  let last_updated = new Date(date);
  let now  = Date.now();
  function calcTimeDiff(current,previous){
    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;
    let elapsed = current - previous;
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' hours ago';
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + ' days ago';
    } else if (elapsed < msPerYear) {
      return  Math.round(elapsed / msPerMonth) + ' months ago';
    } else {
      return  Math.round(elapsed / msPerYear) + ' years ago';
    }
}
let link = null;
function capture(){
html2canvas(post,{
  scale:2,
  windowWidth:414,
  windowHeight:896
}).then(function(canvas) {
    link = canvas.toDataURL();
});
}

</script>
<div class="container" bind:this="{post}">
  <div class="card" in:fly="{{ y: 100, duration: 300 }}" out:fade="{{ duration: 300 }}">
    <div class="card-header">
      <!-- <img src="bannerwhite.png" alt="banner" /> -->
    </div>
    <div class="card-body">
      <h4>
        To {name}
      </h4>
      <p>
        {confess}
      </p>
      <div class="user">
        <img src="favicon.png" alt="user" />
        <div class="user-info">
          {#if insta} 
            <h5>Confessed to @{insta}</h5>
          {/if}
          {#if !approved}
          <span class="tag tag-pink">Approval pending</span>
          {:else}
          <span class="tag tag-teal">Approved</span>
          {/if}
          <small>{calcTimeDiff(now,last_updated.getTime())}</small>
          {#if link == null}
          <span class="tag tag-teal" data-html2canvas-ignore="true" on:click="{capture}" out:fade="{{ duration: 300 }}">Download</span>
          {:else}
          <a class="tag tag-green" href="{link}" in:fade="{{duration: 300 }}" download>Download Now</a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}
.container{
	display: flex;
	justify-content: center;
}
.card {
  margin: 10px;
  background-color: #fffffff2;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 90vw;
}
.card-header {
  width: 100%;
  height: 100px;
  background-image: url('/bannerwhite.png');
  background-size: cover;
  background-position: center;
/*  object-fit: cover;*/
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 100px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-pink {
  background-color: var(--pri);
}
.tag-green {
  background-color: limegreen;
}
.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: var(--pri);
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>
