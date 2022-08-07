export function start() {
    on('clicked:tabs_switch_button', (e) => {
        setAttrs({ tabs_selected_index: e.htmlAttributes['value'] });
        console.log('Clicked', e.htmlAttributes['value']);
    });
}