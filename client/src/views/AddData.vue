<template>
    <div class="add-data">
        <div v-if="statusForm !== null">{{ statusForm }}</div>
        <form v-on:submit.prevent="submit" action="#" method="post">
            <input
                v-model="title"
                placeholder="Title"
                v-bind:class="{ 'has-error': errors.indexOf(TITLE_FIELD) !== -1 }"
            >
            <textarea
                v-model="text"
                placeholder="Text"
                v-bind:class="{ 'has-error': errors.indexOf(TEXT_FIELD) !== -1 }"
            >
            </textarea>
            <button
                type="submit"
                v-bind:disabled="isSubmitButtonDisabled"
            >
                Add
            </button>
        </form>
    </div>
</template>

<script lang="ts">

import {
    Component,
    Prop,
    PropSync,
    Vue,
    ProvideReactive,
    Emit,
} from 'vue-property-decorator';
import moment from 'moment';

import {
    ApiPostData,
    ApiPostLog,
} from '../api';
import {
    DATA_ADDED__TYPE_LOG,
    LOGIN__TYPE_LOG,
    LOG_EVENT_DATE_FORMAT,
} from '../constants/LogConstants';


type IsSubmitButtonDisabledType = boolean;
type StatusFormType = string | null;
type ErrorMessages = string[];


@Component({})
export default class Home extends Vue {
    private TITLE_FIELD: string = 'title';
    private TEXT_FIELD: string = 'text';
    private isSubmitButtonDisabled: IsSubmitButtonDisabledType = false;
    private statusForm: StatusFormType = null;
    private errors: ErrorMessages =  [];

    @ProvideReactive() private title = '';
    @ProvideReactive() private text = '';

    @Emit()
    private submit() {
        this.errors = [];
        if (!this.title) {
            this.errors.push(this.TITLE_FIELD);
        }
        if (!this.text) {
            this.errors.push(this.TEXT_FIELD);
        }
        if (!this.errors.length) {
            this.setSubmitButtonDisabled(true);
            Promise.all([
                ApiPostData({
                    title: this.title,
                    text: this.text,
                }),
                ApiPostLog({
                    event: DATA_ADDED__TYPE_LOG,
                    eventDate: moment().format(LOG_EVENT_DATE_FORMAT),
                }),
            ]).then(
                () => {
                    this.setSubmitButtonDisabled(false);
                    this.setStatusForm('Success submit form');
                },
                (error) => {
                    this.setStatusForm(`Error submit form, ${error}`);
                    this.setSubmitButtonDisabled(false);
                },
            );
        } else {
            this.setStatusForm(`Error validation form`);
        }
    }

    @Emit()
    private setSubmitButtonDisabled(isSubmitButtonDisabled: IsSubmitButtonDisabledType) {
        this.isSubmitButtonDisabled = isSubmitButtonDisabled;
    }

    @Emit()
    private setStatusForm(statusForm: StatusFormType) {
        this.statusForm = statusForm;
    }
}
</script>

<style lang="scss">
.add-data {
    padding: 10%;
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    input, textarea, button {
        margin-bottom: 20px;
    }

    button {
        width: 200px;
        height: 50px;
        align-self: center;
    }
    .has-error {
        border: 1px solid red;
    }
}
</style>
