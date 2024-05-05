<script>
export default {
    name: 'Materials',
    components: 'matnav'
};
</script>

<template>
    <main>
        <matnav />
        <div class="content-container">
            <div class="videos-found" v-if="videos.length > 0">
                <ul>
                    <li v-for="video in videos" :key="video.name">
                        <h3 class="video-title">{{ video.name }}</h3>
                        <iframe width="600" class="video" height="350" :src="video.url" frameborder="0"
                            allowfullscreen></iframe>
                    </li>
                </ul>
            </div>
            <div v-else class="no-videos-found">
                <p class="novideo">No videos found.</p>
            </div>
        </div>
        <div class="feedback-container">
            <button @click="openFeedbackForm" class="feedback-button" title="Feedback">Feedback</button>
            <div class="tooltip">Tell us what you want to know more about next</div>
        </div>
    </main>
</template>

<style scoped>
main {
    width: 100vw;
    height: 100%;
    overflow: hidden;
}

.video {
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

.feedback-container {
    position: relative;
}

.feedback-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.tooltip {
    visibility: hidden;
    width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    top: -70%;
    left: 15%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
}

.feedback-container:hover .tooltip {
    visibility: visible;
    opacity: 1;
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

const videos = ref([
    { name: "How to communicate with deaf", url: "https://drive.google.com/file/d/104zeQirbynlG3mRVyKHWcseT2OpZx1ye/preview" },
    { name: "A in sign language", url: "https://drive.google.com/file/d/1_e2yIteNOpatg2H4iij5St58tqd2XG-L/preview" },
]);
</script>