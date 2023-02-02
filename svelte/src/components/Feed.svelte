<script>
import Card from './Card.svelte';
import { fade,fly } from 'svelte/transition';
import { createEventDispatcher, onDestroy } from 'svelte';
// onMount(async () => {
// 		const res = await fetch(`\info`);
// 		info = await res.json();
// 		console.log(info);
// 	});
const dispatch = createEventDispatcher();
const close = () => dispatch('close');
</script>

<div class="scrollwindow" in:fly="{{ y: 100, duration: 300 }}" out:fly="{{ x: -100, duration: 300 }}">
<button class="button-86" on:click={close}>Back</button>
		<Card/>
		<Card/>
</div>
<style>
button{
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
</style>
