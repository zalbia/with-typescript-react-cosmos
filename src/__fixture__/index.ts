import index from '../../pages/index';
import Router from 'next/router';

// @ts-ignore
Router.router = { push: async () => true }; // noop

export default {
  component: index
}
