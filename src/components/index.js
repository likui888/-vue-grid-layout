import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayoutSatd = {
    // ResponsiveGridLayout,
    GridLayout,
    GridItem
}

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(VueGridLayoutSatd).forEach(name => {
        Vue.component(name, VueGridLayoutSatd[name]);
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

export default VueGridLayoutSatd;
export { GridLayout, GridItem };
