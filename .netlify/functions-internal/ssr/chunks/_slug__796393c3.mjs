export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'vue';
import 'vue/server-renderer';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/_slug__1e04c082.mjs').then(n => n._);

export { page };
