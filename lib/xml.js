const custom = require('leadconduit-custom').outbound.xml;

module.exports = {
  request: custom.request,
  response: custom.response,
  validate: custom.validate
};
