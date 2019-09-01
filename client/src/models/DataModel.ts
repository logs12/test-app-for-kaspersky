export type DataTitleType = string;

export type DataTextType = string;

export interface DataType {
    title: DataTitleType,
    text: DataTextType,
}

export type DataListType = DataType[];

const defaultState = {
    get state(): DataListType {
        return [];
    },
};

export const initialState = {
    get state(): DataListType {
        return defaultState.state;
    },
};
