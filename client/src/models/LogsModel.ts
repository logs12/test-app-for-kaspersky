export type LogEventType = string;

export type LogEventDateType = string;

export interface LogType {
    event: LogEventType,
    eventDate: LogEventDateType,
}

export type LogsType = LogType[];

const defaultState = {
    get state(): LogsType {
        return [];
    },
};

export const initialState = {
    get state(): LogsType {
        return defaultState.state;
    },
};
