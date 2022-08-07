<script context="module" lang="ts" sheetworker>
	import { initTabs } from '../lib/Tabs/TabsWorker';
	initTabs();
	on('change:level', () => {
		getAttrs(['level'], (attrs) => {
			const level = +attrs.level;
			if (isNaN(level)) return;
			setAttrs({
				hp_max: level * 2,
				mana_max: Math.floor(level * 1.5)
			});
		});
	});
</script>

<script>
	import { Tab, TabView } from '$lib/Tabs';
	import ExamplePage1 from './Example/ExamplePage1.svelte';
	import ExamplePage2 from './Example/ExamplePage2.svelte';
	import About from './Example/About.svelte';
</script>

<div>
	<div>
		<TabView tabs={['Character info', 'Notes', 'About']}>
			<Tab>
				<ExamplePage1 />
			</Tab>
			<Tab>
				<ExamplePage2 />
			</Tab>
			<Tab>
				<About />
			</Tab>
		</TabView>
	</div>
</div>

<style lang="scss">
	div {
		width: 100%;
		div {
			min-width: 790px;
		}
	}
</style>
