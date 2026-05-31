import { IncomingHttpHeaders } from 'http';

export const languageHeaderName = 'x-language';

export function extractLanguageFromHeader(
  headers: IncomingHttpHeaders
): string {
  const langHeader = headers[languageHeaderName];

  if (langHeader) {
    if (Array.isArray(langHeader)) {
      return langHeader[0] || 'en';
    }
    return langHeader;
  }

  const acceptLanguage = headers['accept-language'];
  if (acceptLanguage) {
    const primary = (Array.isArray(acceptLanguage) ? acceptLanguage[0] : acceptLanguage)
      .split(',')[0]
      ?.split('-')[0];
    if (primary) return primary;
  }

  return 'en';
}
