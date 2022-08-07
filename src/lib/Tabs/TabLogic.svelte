<script lang="ts">
	export let selectedIndex = '0';
</script>

<input type="hidden" class="tab-selector" name="attr_tabs_selected_index" value={selectedIndex} />

<style lang="scss">
	:global(.charactersheet div.tabs_tab_panel) {
		display: none;
	}

	@for $i from 0 through 9 {
		:global(.charactersheet
				input.tab-selector[name='attr_tabs_selected_index'][value='#{$i}']
				~ div.tabs_tab_panel.tab_index_#{$i}) {
			display: block;
		}
	}
</style>
