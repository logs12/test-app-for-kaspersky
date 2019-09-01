<template>
    <div id="app">
        <aside class="nav">
            <ul>
                <li>
                    <router-link to="/logs">Logs</router-link>
                </li>
                <li>
                    <router-link to="/data">Data</router-link>
                </li>
                <li>
                    <router-link to="/add-data">Add data</router-link>
                </li>
            </ul>
        </aside>
        <main class="content">
            <router-view/>
        </main>
    </div>
</template>

<script lang="ts">

import {
    Component,
    Vue,
} from 'vue-property-decorator';
import moment from 'moment';

import {
    ApiPostLog,
} from './api';
import {
    LOGIN__TYPE_LOG,
    LOG_EVENT_DATE_FORMAT,
} from './constants/LogConstants';


@Component({})
export default class App extends Vue {
    private created() {
        ApiPostLog({
            event: LOGIN__TYPE_LOG,
            eventDate: moment().format(LOG_EVENT_DATE_FORMAT),
        });
    }
}
</script>

<style lang="scss">
html, body {
    height: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-columns: 30% 68%;
    grid-gap: 2rem;
    height: 100%;
}
.nav {
    padding: 30px;
    ul {
        margin: 0 100px;
        padding: 0;
        li {
            list-style-type: none;
            border: 1px solid #2c3e50;
            border-radius: 5px;
            height: 50px;
            margin-bottom: 50px;
            a {
                font-weight: bold;
                color: #2c3e50;
                &.router-link-exact-active {
                    color: #42b983;
                }
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
        }
    }
    border: 1px solid #2c3e50;
    border-radius: 5px;
}
.content {
    border: 1px solid #2c3e50;
    border-radius: 5px;
}
</style>
