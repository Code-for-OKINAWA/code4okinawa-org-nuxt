import { Plugin } from '@nuxt/types'
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: process.env.WORDPRESS_URL + '/wp-json' });

declare module '@nuxt/types' {
  interface Context {
    $wpapi: WPAPI
  }
}

const myPlugin: Plugin = (context) => {
  context.$wpapi = wp
}

export default myPlugin
