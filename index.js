import * as url from 'url';
import * as query from 'querystring';
import parseHeader from './src/parse-header';

const formatQuery = query.stringify;
const parseUrl = url.parse;
const parseQuery = query.parse;

export {
  formatQuery,
  parseHeader,
  parseUrl,
  parseQuery
};
