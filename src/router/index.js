import { createRouter, createWebHistory } from 'vue-router';

// import Home from '../pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../pages/Contabilidad/Catalogos/Empresa/EmpresaComponent.vue')
  }, 
  {
    path: '/Empresa',
    name: 'Empresa',
    component: () => import('../pages/Contabilidad/Catalogos/Empresa/EmpresaComponent.vue')
  },
  {
    path: '/CentroCostos',
    name: 'CentroCostos',
    component: () => import('../pages/Contabilidad/Catalogos/CentroCostos/CentroCostosComponent.vue')
  }, 
  {
    path: '/CuentasContables',
    name: 'CuentasContables',
    component: () => import('../pages/Contabilidad/Catalogos/CuentaContables/CuentasContablesComponent.vue')
  }, 
  {
    path: '/PolizasDiario',
    name: 'PolizasDiario',
    component: () => import('../pages/Contabilidad/Documentos/PolizasDiario/PolizasDiarioComponent.vue')
  },
  {
    path: '/PolizasIngreso',
    name: 'PolizasIngreso',
    component: () => import('../pages/Contabilidad/Documentos/PolizasIngreso/PolizasIngresoComponent.vue')
  }, 
  {
    path: '/PolizasEgreso',
    name: 'PolizasEgreso',
    component: () => import('../pages/Contabilidad/Documentos/PolizasEgreso/PolizasEgresoComponent.vue')
  }, 
  {
    path: '/ReporteBalanza',
    name: 'ReporteBalanza',
    component: () => import('../pages/Contabilidad/Reportes/Balanza/BalanzaComponent.vue')
  },
  {
    path: '/ReporteEstadoResultados',
    name: 'ReporteEstadoResultados',
    component: () => import('../pages/Contabilidad/Reportes/EstadoResultados/EstadoResultadosComponent.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass:"mm-active",
  routes
});

export default router