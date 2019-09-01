<template>
  <div class="home">
    <DataView
        v-bind:data="data"
        firstField="event"
        secondField="eventDate"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataView from '@/components/DataView.vue';
import {
    ApiGetLogs,
} from '../api';

@Component({
  components: {
    DataView,
  },
})

export default class Logs extends Vue {
    private data: any[] = [];

    private created() {
        ApiGetLogs()
            .then((response) => {
                this.data = response.data;
            });
    }
}
</script>
</script>
