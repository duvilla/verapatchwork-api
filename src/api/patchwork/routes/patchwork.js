'use strict';

/**
 * patchwork router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::patchwork.patchwork');
