import url from 'url';
import isEmpty from 'lodash/isEmpty';
import envConfig from '../../environment/base';

export class APIResource {
  constructor({name, baseURL}) {
    if (!name) {
      throw new Error('APIResource requires a name!');
    }
    if (!baseURL) {
      throw new Error('APIResource requires a baseURL');
    }

    this.baseURL = baseURL;
    this.name = name;

    this.post = this.requestMethodFactory('post');
    this.put = this.requestMethodFactory('put');
    this.get = this.requestMethodFactory('get');
    this.delete = this.requestMethodFactory('delete');
  }

  getSanitizedPath(path) {
    const sanitizedPath = path.replace(/^\//, '');
    return isEmpty(sanitizedPath) ? '' : `/${sanitizedPath}`;
  }

  request(path, options, {json = true} = {}) {
    const parsedURL = url.parse(`${this.baseURL}/${this.name}${this.getSanitizedPath(path)}`);
    const endpoint = url.format({
      ...parsedURL,
      query: options.query || {},
      search: false
    });

    const getBody = () => {
      if (!json) {
        return options.body;
      }
      return options.body ? JSON.stringify(options.body) : undefined;
    };


    return {
      ...options,
      endpoint,
      body: getBody(),
      credentials: 'same-origin',
      headers: {
        'X-Auth-Token': envConfig.api.xAuthToken
      }
    };
  }

  requestMethodFactory(method) {
    return (path, options, ...rest) => {
      return this.request(path, {
        ...options,
        method: method
      }, ...rest);
    };
  }
}
