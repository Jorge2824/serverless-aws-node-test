export const transformStringService = (text: string): string => {
    const withoutSpaces = text.replace(/ /g, '_').toLowerCase();
    
    const withoutAccents = withoutSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    const finalText = withoutAccents.replace(/ñ/g, 'ni');
    
    return finalText;
}