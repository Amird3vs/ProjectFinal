<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'mat-nav'
}
</script>

<template>
    <header>
        <div class="header-title">
            <div class="hdr-logo-container">
                <img class="hdr-logo" src="../assets/img/Signtudy-with-no-logo.png">
            </div>
            <div class="header-desc">
                <h1 class="page-title">SignTudy</h1>
                <p class="page-definition">Welcome to SignTudy, a comprehensive resource hub for learning materials
                    dedicated to sign language and deaf communication.</p>
            </div>
        </div>
        <nav class="navigation">
            <ul>
                <router-link to="/materials" class="mat__link" exact-active-class="active">Videos</router-link>
                <router-link to="/pdfs" class="mat__link" exact-active-class="active">PDFs</router-link>
                <router-link to="/Presentations" class="mat__link"
                    exact-active-class="active">Presentations</router-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    border-bottom: 1px solid #ccc;

}

.hdr-logo-container {
    margin-right: 10px;
}

.hdr-logo {
    height: 80px;
    width: 80px;
}

.header-title {
    margin: 0;
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
}

.header-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.page-title {
    margin-top: -5px;
}

.page-definition {
    margin-top: -5px;
    color: #808080;
}

.navigation {
    width: 100%;
    margin-bottom: 15px;
    margin-left: 10px;
    margin-top: 10px;
}

.navigation ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navigation ul .mat__link {
    display: inline;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 10px;
    text-decoration: none;
    color: #3c5448;
}

.navigation ul .mat__link:hover {
    background-color: rgba(220, 220, 220, 0.5);
}

.navigation ul .mat__link.active {
    background-color: rgba(60, 84, 72, 0.5);
    color: #fff;
}
</style>