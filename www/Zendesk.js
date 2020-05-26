var exec = require('cordova/exec');
var PLUGIN_NAME = 'Zendesk';

var Zendesk = function() {
}

Zendesk.prototype.initialize = function(appId, clientId, zendeskUrl, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'initialize', [appId, clientId, zendeskUrl]);
}

Zendesk.prototype.setAnonymousIdentity = function(name, email, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'setAnonymousIdentity', [name, email]);
}

Zendesk.prototype.showHelpCenter = function(groupType, groupIds, labels, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'showHelpCenter', [groupType, groupIds, labels]);
}

Zendesk.prototype.showHelpCenterArticle = function(articleId, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'showHelpCenterArticle', [articleId]);
}

Zendesk.prototype.showTicketRequest = function(subject, tags, fields, successCallback, errorCallback) {
  exec(successCallback, errorCallback, 'Zendesk', 'showTicketRequest', [subject, tags, fields]);
}

Zendesk.prototype.showUserTickets = function(successCallback, errorCallback) {
  exec(successCallback, errorCallback, 'Zendesk', 'showUserTickets', []);
}

if(!window.plugins)
    window.plugins = {};

if (!window.plugins.Zendesk)
    window.plugins.Zendesk = new Zendesk();

if (typeof module != 'undefined' && module.exports)
    module.exports = Zendesk;
