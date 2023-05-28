import { first } from 'lodash';
import { version } from '../../../package.json';

export const appConstants = {
  /**
   * The version of the project. The same as major version in the package.json.
   */
  apiVersion: first(version.split('.')),
};
