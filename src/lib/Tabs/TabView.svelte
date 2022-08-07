<script context="module" lang="ts">
	export const key = Symbol();

	export interface Context {
		getTabIndex: () => number;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	export let tabs: string[];

	let tabIndex = 0;

	let selectedIndex = '0';

	setContext<Context>(key, {
		getTabIndex: () => tabIndex++
	});
</script>

<div>
	<input type="hidden" class="tab-selector" name="attr_tabs_selected_index" value={selectedIndex} />
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
	:global(.charactersheet div.tabs_tab_panel) {
		display: none;
	}

	@for $i from -1 through 9 {
		:global(.charactersheet
				input.tab-selector[name='attr_tabs_selected_index'][value='#{$i}']
				~ div.tabs_tab_panel.tab_index_#{$i}) {
			display: block;
		}
	}
</style>
