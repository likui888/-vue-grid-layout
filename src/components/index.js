import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayoutSa = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(VueGridLayoutSa).forEach(name => {
        Vue.component(name, VueGridLayoutSa[name]);
    });
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default VueGridLayoutSa;
export { GridLayout, GridItem };
