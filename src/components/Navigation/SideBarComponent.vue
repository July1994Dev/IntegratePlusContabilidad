<script setup>
import MenuSectionComponent from './MenuSectionComponent.vue';
import MenuItemComponent from './MenuItemComponent.vue';
import { ref } from 'vue';

const listaMenu = [
    {
        title: "Contabilidad",
        items: [
            {
                type: "multi",
                text: "Catalogos",
                icon: "pe-7s-notebook",
                route: "/CentroCostos",
                childs: [
                    {
                        type: "single",
                        text: "Empresa",
                        icon: "pe-7s-plugin",
                        route: "/Empresa",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Centro de costos",
                        icon: "pe-7s-plugin",
                        route: "/CentroCostos",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Cuentas contables",
                        icon: "pe-7s-plugin",
                        route: "/CuentasContables",
                        childs: []
                    }
                ]
            }, {
                type: "multi",
                text: "Documentos",
                icon: "pe-7s-note2",
                route: "/CentroCostos",
                childs: [
                    {
                        type: "single",
                        text: "Pólizas Diario",
                        icon: "pe-7s-plugin",
                        route: "/PolizasDiario",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Pólizas Ingreso",
                        icon: "pe-7s-plugin",
                        route: "/PolizasIngreso",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Pólizas Egreso",
                        icon: "pe-7s-plugin",
                        route: "/PolizasEgreso",
                        childs: []
                    }
                ]
            },{
                type: "multi",
                text: "Reportes",
                icon: "pe-7s-news-paper",
                route: "/CentroCostos",
                childs: [
                    {
                        type: "single",
                        text: "Balanza",
                        icon: "pe-7s-plugin",
                        route: "/ReporteBalanza",
                        childs: []
                    },
                    {
                        type: "single",
                        text: "Estado de resultados",
                        icon: "pe-7s-plugin",
                        route: "/ReporteEstadoResultados",
                        childs: []
                    }
                ]
            }
        ]
    }
];

const isOpen = ref(false);
const sidebarActive = ref(false);
const collapsed = ref(true);
const windowWidth = ref(0);


const toggleBodyClass = (className) => {
    const el = document.getElementsByClassName("app-container");
    console.log(el);
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
};

const toggleSidebarHover = (add, className) => {
    const el = document.getElementsByClassName("app-container");
    console.log(el);

    sidebarActive.value = !sidebarActive.value;

    windowWidth.value = document.documentElement.clientWidth;

    if (windowWidth.value > "992") {
        if (add === "add") {
            el.classList.add(className);
        } else {
            el.classList.remove(className);
        }
    }
};

</script>

<template>
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar"
                        v-bind:class="{ 'is-active': isOpen }" @click="toggleBodyClass('closed-sidebar')">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>
        <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
                <MenuSectionComponent :name="item.title" v-for="(item, index) in listaMenu" :key="index">
                    <MenuItemComponent v-for="link in item.items" :type="link.type" :text="link.text" :icon="link.icon"
                        :route="link.type == 'single' ? link.route : ''" :key="link.text">
                        <MenuItemComponent v-for="submenu in link.childs" :type="submenu.type" :text="submenu.text"
                            :route="submenu.route" :key="submenu.text">
                        </MenuItemComponent>
                    </MenuItemComponent>
                </MenuSectionComponent>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
