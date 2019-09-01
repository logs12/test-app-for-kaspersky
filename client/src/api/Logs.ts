// @flow

import ApiService from '../services/ApiService';
import path from '../ApiPaths';
import { LogType } from '../models/LogsModel';

/**
 * Send request on api for getting Data
 *
 * @return Promise
 */
export const ApiGetLogs = (): Promise<any> =>
    ApiService.get(path.Logs);

/**
 * Send request on api for create Log
 * @param { log } LogType
 *
 * @return Promise
 */
export const ApiPostLog = (log: LogType): Promise<any> =>
    ApiService.post(path.AddLog, log);
