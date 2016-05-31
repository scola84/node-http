import * as url from 'url';
import * as query from 'querystring';
import parseHeader from './src/parse-header';

const parseUrl = url.parse;
const parseQuery = query.parse;

export {
  parseHeader,
  parseUrl,
  parseQuery
};
