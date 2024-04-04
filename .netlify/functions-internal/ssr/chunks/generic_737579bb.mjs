export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'vue';
import 'vue/server-renderer';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/generic_de36fa38.mjs');

export { page };
