<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/uberpage/master/uberpage/public/img/UberPage.png" width="300px">
</p>

# UberPage
After you forked this project and adjusted it to your needs (configured with your data), you might want to deploy it in order to make it available to everyone.

I created an overview of GitHub projects as my [GitHub Page](https://stegschreck.github.io/).

## Deployment to GitHub Pages
This is a little guide of how to deploy this React project to [GitHub Pages](https://help.github.com/en/categories/github-pages-basics). You still can deploy it in a different way. This is only a suggestion.

### Step 0: Create a Repository
Assuming you want to use this for a user GitHub Page and not a project GitHub Page ([what's the difference?](https://help.github.com/en/articles/user-organization-and-project-pages)), you will need to create a dedicated repository with a special name.

At GitHub create a repository named `<YourGitHubUserName>.github.io`.

### Step 1: Adjust the `package.json` configuration
In the `uberpage/package.json` adjust the following settings:
* At `hostname` put the value `<YourGitHubUserName>.github.io`
* At `scripts.deploy` adjust the value for the repository with `git@github.com:<YourGitHubUserName>/<YourGitHubUserName>.github.io.git`


### Step 2: Deploy
Run the following command in the directory `uberpage` to deploy:
```bash
npm run deploy
```
This will then deploy to the master branch of the repository to the specified repository. In order to make the GitHub user page work, it has to be deployed in the master branch.

The deployment might take a couple of minutes.

## Automation with Travis
If you plan to use TravisCI, you can check in this repository how to let it deploy to GitHub Pages after a successful build on the master branch.

## Alternative using GitHub Actions workflow
If you like to use GitHub Actions, you can check out the `.github/workflows/CI.yml` in this project, which includes:
- lint the files
- execute tests
- build
- create a GitHub Release (tags only)
- deploy to GitHub Pages (master branch only)
  In this case I am using a separate repository for the code and the deployed website. You can also configure this to be in the same repo.
