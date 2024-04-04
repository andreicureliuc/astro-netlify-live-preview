export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'vue';
import 'vue/server-renderer';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/index_b8f6f004.mjs');

export { page };
