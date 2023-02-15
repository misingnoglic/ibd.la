// sitemap.js

import Generator from 'react-router-sitemap-generator';
import AppRouter from './src/component/AppRouter'; //import your react router component

const generator = new Generator(
  'https://ibd.la',
  AppRouter(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'weekly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');
