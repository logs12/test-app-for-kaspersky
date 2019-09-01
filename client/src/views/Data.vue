<template>
  <div class="data-view">
        <DataView
            v-bind:data="data"
            firstField="title"
            secondField="text"
        />
  </div>
</template>


<script lang="ts">

import {
    Component,
    Vue,
} from 'vue-property-decorator';
import {
    ApiGetData,
} from '../api';
import {
    DATA_ADDED__TYPE_LOG,
} from '../constants/LogConstants';
import { DataListType } from '../models/DataModel';
import DataView from '@/components/DataView.vue';

type IsSubmitButtonDisabledType = boolean;
type StatusFormType = string | null;

@Component({
  components: {
    DataView,
  },
})
export default class Data extends Vue {
    private data: any[] = [];

    private created() {
        ApiGetData()
            .then((response) => {
                this.data = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
</script>

<style lang="scss">
.data-view {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    td {
        padding: 0 200px 50px 200px;
    }
}
</style>
