<script>
export default {
    name: 'Pdfs',
    components: 'matnav'
};
</script>

<template>
    <main>
        <matnav />
        <div class="content-container">
            <div class="videos-found" v-if="pdfs.length > 0">
                <ul>
                    <li v-for="pdf in pdfs" :key="pdf.name">
                        <h3 class="video-title">{{ pdf.name }}</h3>
                        <object class="pdf" width="300" height="430" :data="pdf.url"></object>
                    </li>
                </ul>
            </div>
            <div v-else class="no-videos-found">
                <p class="novideo">No Pdfs found.</p>
            </div>
        </div>
    </main>

    
</template>

<style scoped>
main {
    width: 100vw;
    height: 100%;
    overflow: hidden;
}

.pdf {
    width: 100%;
    aspect-ratio: 4 / 3;
    border: 1px dashed #ccc;
    border-radius: 10px;
}

.videos-found ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

.videos-found li {
    list-style: none;
    margin-left: 10px;
}

.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.novideo {
    margin-top: 200%;
}
</style>

<script setup>
import matnav from '../components/mat-nav.vue'
import { ref, onMounted } from 'vue';

const pdfs = ref([
    { name: "How to communicate with deaf", url: "https://drive.google.com/file/d/1mcbVbbZu2tFt9S32cOJJjgdoFVz-3oJi/preview" },
    { name: "How to communicate with deaf", url: "https://drive.google.com/file/d/1mcbVbbZu2tFt9S32cOJJjgdoFVz-3oJi/preview" }
]);
</script>