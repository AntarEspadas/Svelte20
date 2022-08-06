<script context="module" lang="ts" sheetworker>
	on('clicked:tabs_switch_button', (e) => {
		setAttrs({ tabs_selected_index: e.htmlAttributes['value'] });
		console.log('Clicked', e.htmlAttributes['value']);
	});
</script>

<script lang="ts">
	export let selectedIndex = '0';
</script>

<input type="hidden" class="tab-selector" name="attr_tabs_selected_index" value={selectedIndex} />

<style lang="scss">
	:global(div.tabs_tab_panel) {
		display: none;
	}

	@for $i from 0 through 14 {
		:global(.charactersheet
				input.tab-selector[name='attr_tabs_selected_index'][value='#{$i}']
				~ div.tabs_tab_panel.tab_index_#{$i}) {
			display: block;
		}
	}
	// :global(input.tab-selector[name='attr_tabs_selected_index'][value='0']
	// 		~ div.tabs_tab_panel.tab_index_0) {
	// 	display: block;
	// }
</style>
