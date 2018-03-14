# wwt-vue-starter-template

This is a blank-slate app with all the typical WWT configs and components to speed up your app creation process.

## Usage

Get the files for this repo however you'd like. You could clone the repo, fork it, or download the .zip file. Any way that you get the files, you will need to do a few things:

1. Remove the `.git` folder and set up a new git remote. You don't want to be pushing your changes to this repo.
1. Update the application name in a few places:
  - The "name" field in package.json
  - Line 24 in `Jenkinsfile`
  - `App.vue` - `BrowserDetector` and `WwtAppToolbar` both take an `app-name` prop
  - The `name` field in `manifest.yml`
1. Update the README with documentation on your own app
1. Update the `title` in `index.html`

Once you've done all that, the process should be the same as you're used to with Angular apps. Pushing to GitHub will trigger the Jenkins builds, and merging to master will kick off a deployment to DEV. You'll find your app at https://your-app-name.apps-dev.wwt.com/ where `[your-app-name]` is whatever you have set up in the manifest.yml

## Other Notes

Eventually the goal is to get this set up as a template in the Dev Tool Belt CLI so that all of these dynamic name fields will be set for you right out of the gate. It's also worth noting that as we are still developing components and converting them over from Angular, you may find that a handful of your components are not there yet. Please feel free to work with the Core team, or take a stab at building them out on your own. We have a list of components we plan to convert over prior to releasing this template in the CLI generator.
