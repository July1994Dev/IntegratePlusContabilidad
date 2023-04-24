<script setup>
import { onMounted, ref } from 'vue';
import ContentHeader from '../../../../components/Header/ContentHeader.vue';
import 'animate.css';
import { CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent } from '../../../../components/UI/Card'
</script>

<template>
    <ContentHeader class="animate__animated animate__fadeIn">
        <template v-slot:Icon>
            <i class="lnr lnr-apartment icon-gradient bg-mean-fruit"></i>
        </template>
        <template v-slot:Title>
            Empresas
        </template>
        <template v-slot:Description>
            En este modulo se pueden visualizar todas las empresas registradas en la plataforma.
        </template>
        <template v-slot:Controls>
            <div>
                <div class="d-inline-block dropdown">
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        class="btn-shadow dropdown-toggle btn btn-info">
                        <span class="btn-icon-wrapper pr-2 opacity-7">
                            <i class="fa fa-business-time fa-w-20"></i>
                        </span>
                        Buttons
                    </button>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="nav-link-icon lnr-inbox"></i>
                                    <span> Inbox</span>
                                    <div class="ml-auto badge badge-pill badge-secondary">
                                        86
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="nav-link-icon lnr-book"></i>
                                    <span> Book</span>
                                    <div class="ml-auto badge badge-pill badge-danger">
                                        5
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="nav-link-icon lnr-picture"></i>
                                    <span> Picture</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a disabled="" class="nav-link disabled">
                                    <i class="nav-link-icon lnr-file-empty"></i>
                                    <span> File Disabled</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </template>
    </ContentHeader>
    <div class="row">
        <div class="col">
            <CardComponent>
                <template v-slot:CardHeader>
                    <CardHeaderComponent>
                        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i class="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"></i>
                            Tarjeta de prueba
                        </div>
                        <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <div class="btn-group dropdown">
                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    class="btn-icon btn-icon-only btn btn-link">
                                    <i class="pe-7s-menu btn-icon-wrapper"></i>
                                </button>
                                <div tabindex="-1" role="menu" aria-hidden="true"
                                    class="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu"
                                    style="">
                                    <h6 tabindex="-1" class="dropdown-header">Menu</h6>
                                    <button type="button" tabindex="0" class="dropdown-item">
                                        <i class="dropdown-icon lnr-inbox"> </i><span>Item 1</span>
                                    </button>
                                    <button type="button" tabindex="0" class="dropdown-item">
                                        <i class="dropdown-icon lnr-file-empty"> </i><span>Item 2</span>
                                    </button>
                                    <button type="button" tabindex="0" class="dropdown-item">
                                        <i class="dropdown-icon lnr-book"> </i><span>Item 3</span>
                                    </button>
                                    <div tabindex="-1" class="dropdown-divider"></div>
                                    <div class="p-3 text-right">
                                        <button class="mr-2 btn-shadow btn-sm btn btn-link">Cancelar</button>
                                        <button class="mr-2 btn-shadow btn-sm btn btn-primary">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardHeaderComponent>
                </template>
                <template v-slot:CardBody>
                    <CardBodyComponent>
                        esto es una prueba
                    </CardBodyComponent>
                </template>


            </CardComponent>
        </div>
</div></template>