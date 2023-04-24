<script setup>
import { onMounted, ref } from 'vue';
import ContentHeader from '../../../../components/Header/ContentHeader.vue';
import 'animate.css';

</script>

<template>
    <TabComponent></TabComponent>
    <ContentHeader class="animate__animated animate__fadeIn">
        <template v-slot:Icon>
            <i class="pe-7s-graph3 icon-gradient bg-mean-fruit"></i>
        </template>
        <template v-slot:Title>
            Reporte de estado de resultados
        </template>
        <template v-slot:Description>
            En este modulo se pueden generar el reporte de estado de resultados, en el que se visualizaran todos los datos generados en la plataforma.
        </template>
        <template v-slot:Controls>

        </template>
    </ContentHeader>
</template>