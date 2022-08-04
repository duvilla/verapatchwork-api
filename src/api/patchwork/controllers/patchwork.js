'use strict';

/**
 *  patchwork controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::patchwork.patchwork');
