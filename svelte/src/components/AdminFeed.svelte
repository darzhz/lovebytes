<script>
import AdminCard from './AdminCard.svelte';
import { onMount } from 'svelte';
import { fade,fly } from 'svelte/transition';
import { createEventDispatcher, onDestroy } from 'svelte';
let result = [];
onMount(async () => {
		const res = await fetch('/adminfeed');
		result = await res.json();
	});
</script>

<div class="scrollwindow" in:fly="{{ y: 100, duration: 300 }}" out:fly="{{ x: -100, duration: 300 }}">
<button class="button-86" >Log Out</button>
{#if result.length > 0}
    {#each result as data}
		    <AdminCard name={data.name} insta={data.id} date={data.time} confess={data.confession} post_id={data._id}/>
    {/each}
{/if}
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
