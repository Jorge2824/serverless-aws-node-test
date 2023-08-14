import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { fetchData } from '@libs/http-service';
import { translateService } from '@libs/translate-service';
import { transformStringService } from '@libs/transform-string-service';
import { IPeopleSpanish, IPeopleEnglish } from '../../interfaces/people.interface';

const translatePropertyNames = async (items, targetLanguage) => {
  try {
    const translatedData: IPeopleSpanish[] = await Promise.all(items.map(async item => {
      const translatedItem = {} as IPeopleSpanish;
      await Promise.all(Object.entries(item).map(async ([key, value]) => {
        const translationResult = await translateService(key, targetLanguage);
        const transformedTranslation = transformStringService(translationResult);
        translatedItem[transformedTranslation] = value;
      }));
      return translatedItem;
    }));
    return translatedData;
  } catch (error) {
    throw Error(error);
  }
};

const getPeople: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  try {
    const { results } = await fetchData('https://swapi.py4e.com/api/people/') as { results: IPeopleEnglish[]};
    const targetLanguage = 'es';
    const translatedData = await translatePropertyNames(JSON.parse(JSON.stringify(results)), targetLanguage);
    return formatJSONResponse({ data: translatedData });
  } catch (error) {
    throw Error(error);
  }
};

export const getPeopleStarWars = middyfy(getPeople);
