<script context="module" lang="ts">
	export const key = Symbol();

	export interface Context {
		getTabIndex: () => number;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import TabLogic from './TabLogic.svelte';

	export let tabs: string[];

	let tabIndex = 0;

	let selectedIndex = '0';

	setContext<Context>(key, {
		getTabIndex: () => tabIndex++
	});
</script>

<div>
	<TabLogic {selectedIndex} />
	{#each tabs as tab, index}
		<button
			type="action"
			name="act_tabs_switch_button"
			value={index}
			on:click={() => (selectedIndex = String(index))}>{tab}</button
		>
	{/each}

	<slot />
</div>

<style lang="scss">
	div {
		width: 100%;
	}
</style>
