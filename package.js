Package.describe({
  name: 'q42internal:autoform-modals',
  summary: "Create, update and delete collections with modals",
  version: "1.0.0",
  git: "https://github.com/Q42/meteor-autoform-modals"
});

Package.onUse(function (api) {
  api.versionsFrom('2.3.7');

  api.use([
    'jquery@1.11.11',
    'templating@1.4.2',
    'less@3.0.2',
    'session',
    'coffeescript@1.0.17',
    'ui@1.0.13',
    'aldeed:autoform@5.5.1',
    'raix:handlebar-helpers@0.2.5',
    'mpowaga:string-template@0.1.0'
  ], 'client');

  api.addFiles('lib/client/modals.html', 'client');
  api.addFiles('lib/client/modals.coffee', 'client');
  api.addFiles('lib/client/modals.less', 'client');
});
