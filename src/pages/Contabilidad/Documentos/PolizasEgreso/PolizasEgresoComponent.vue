<script setup>
import { onMounted, ref } from 'vue';
import ContentHeader from '../../../../components/Header/ContentHeader.vue';
import 'animate.css';

</script>

<template>
    <TabComponent></TabComponent>
    <ContentHeader class="animate__animated animate__fadeIn">
        <template v-slot:Icon>
            <i class="lnr-enter icon-gradient bg-mean-fruit"></i>
        </template>
        <template v-slot:Title>
            Polizas de egreso
        </template>
        <template v-slot:Description>
            En este modulo se pueden visualizar todas las polizas de egreso registradas en la plataforma.
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
</template>