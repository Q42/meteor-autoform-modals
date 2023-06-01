Package.describe({
  name: 'q42internal:autoform-modals',
  summary: "Create, update and delete collections with modals",
  version: "1.0.0-beta.1",
  git: "https://github.com/Q42/meteor-autoform-modals"
});

Package.onUse(function (api) {
  api.versionsFrom('2.3.7');

  api.use([
    'jquery',
    'templating',
    'less',
    'session',
    'coffeescript',
    'ui',
    'aldeed:autoform@5.5.1',
    'raix:handlebar-helpers@0.2.5',
    'mpowaga:string-template@0.1.0'
  ], 'client');

  api.addFiles('lib/client/modals.html', 'client');
  api.addFiles('lib/client/modals.coffee', 'client');
  api.addFiles('lib/client/modals.less', 'client');
});
