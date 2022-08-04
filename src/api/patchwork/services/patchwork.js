'use strict';

/**
 * patchwork service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patchwork.patchwork');
