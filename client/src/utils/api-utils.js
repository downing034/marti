import * as camelcaseKeys from 'camelcase-keys';
import * as snakecaseKeys from 'snakecase-keys';

export function formatResponseFromApi(responseData) {
  return camelcaseKeys(responseData)
}

export function formatResponseToApi(entity, responseData) {
  const responseObject = {};
  responseObject[entity] = snakecaseKeys(responseData)
  return responseObject
}
