import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { fetchData } from '@libs/http-service';
import { translateService } from '@libs/translate-service'
;
const translatePropertyNames = async (items, targetLanguage) => {
  const translatedData = await Promise.all(items.map(async item => {
    const translatedItem = {};
    await Promise.all(Object.entries(item).map(async ([key, value]) => {
      const translationResult = await translateService(key, targetLanguage);
      translatedItem[translationResult] = value;
    }));
    return translatedItem;
  }));
  return translatedData;
};

const starWarsApi: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  const { results } = await fetchData('https://swapi.py4e.com/api/people/');
  const targetLanguage = 'es';
  const translatedData = await translatePropertyNames(JSON.parse(JSON.stringify(results)), targetLanguage);
  return formatJSONResponse({ data: translatedData });
};

export const main = middyfy(starWarsApi);
