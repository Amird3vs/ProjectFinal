<script>
export default {
    name: 'PresentationView',
    components: 'matnav'
};
</script>
<template>
    <main>
    <matnav />
        <div class="content-container">
            <div class="videos-found" v-if="presentations.length > 0">
                <ul>
                    <li v-for="presentation in presentations" :key="presentation.name">
                        <h3 class="video-title">{{ presentation.name }}</h3>
                        <object class="presentation" width="300" height="430" :data="presentation.url"></object>
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

.presentation {
    width: 100%;
    aspect-ratio: 4 / 3;
    border: 1px dashed #ccc;
    border-radius: 10px;
}

.video-title {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.videos-found ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

.videos-found li {
    margin: 0 10px;
}

.novideo {
    margin-top: 200%;
}

@media screen and (max-width: 768px) {
    .videos-found ul {
        width: 100%;
        flex-direction: column;
    }
}
</style>

<script setup>
import matnav from '../components/mat-nav.vue'
import { ref } from 'vue';

const presentations = ref([
    { name: "How to communicate with deaf", url: "https://drive.google.com/file/d/1k0p9NJ9goDvq_4zULsu_jO2-ikbkvQkB/preview" },
    { name: "How to communicate with deaf", url: "https://drive.google.com/file/d/1k0p9NJ9goDvq_4zULsu_jO2-ikbkvQkB/preview" }
]);
</script>
   