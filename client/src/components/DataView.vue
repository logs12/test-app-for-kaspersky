<template>
  <div class="data-view">
        <table v-if="data && data.length">
            <tbody>
                <tr
                    class="data-container"
                    v-for="(dataItem, index) of data"
                    :key="index"
                >
                    <td class="first-field-td">
                        {{dataItem[firstField]}}
                    </td>
                    <td class="second-field-td">
                        {{dataItem[secondField]}}
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    PropSync,
    Watch,
} from 'vue-property-decorator';

@Component
export default class DataView extends Vue {
    @Prop() private data!: string;
    @Prop() private firstField!: string;
    @Prop() private secondField!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
