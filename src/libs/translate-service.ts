
import * as AWS from 'aws-sdk';
import { Translate } from 'aws-sdk';
AWS.config.update({region: 'us-east-1'});
const translate = new AWS.Translate();

export const translateService = async (textToTranslate, targetLanguage) => {
  try {
    const translateParams: Translate.Types.TranslateTextRequest = {
      Text: textToTranslate,
      SourceLanguageCode: 'en',
      TargetLanguageCode: targetLanguage
    };

    const textTranslated = await translate.translateText(translateParams).promise();
    return textTranslated['TranslatedText'];
  } catch (e) {
    console.error(e);
    return e.message;
  }
};