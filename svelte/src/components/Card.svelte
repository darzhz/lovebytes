<script>
  import { fade,fly } from 'svelte/transition';
  export let confess = "unable to fetch data from server"
  export let name = null;
  export let insta = 'contact dev @oru_pavam_pyyan';
</script>
<div class="container">
  <div class="card" in:fly="{{ y: 100, duration: 300 }}" out:fade="{{ duration: 300 }}">
    <div class="card-header">
      <img src="bannerwhite.png" alt="banner" />
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
          <h5>{insta}</h5>
          <span class="tag tag-pink">Date</span>
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
.card-header img {
  width: 100%;
  height: 100px;
  object-fit: cover;
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
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: var(--pri);
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
