import ApiService from '../services/ApiService';
import path from '../ApiPaths';
import { DataType } from '../models/DataModel';

/**
 * Send request on api for getting Data
 *
 * @return Promise
 */
export const ApiGetData = (): Promise<any> =>
    ApiService.get(path.Data);

/**
 * Send request on api for create Data
 * @param { data } businessUnitId
 *
 * @return Promise
 */
export const ApiPostData = (data: DataType): Promise<any> =>
    ApiService.post(path.AddData, data);
