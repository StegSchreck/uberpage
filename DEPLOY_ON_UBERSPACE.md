<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/uberpage/master/uberpage/public/img/UberPage.png" width="300px">
</p>

# UberPage
After you forked this project and adjusted it to your needs (configured with your data), you might want to deploy it in order to make it available to everyone.

## Deployment on Uberspace
I am using [Uberspace](https://uberspace.de/) for private purposes. This is a lightweight server where you can pay as you like. The recommendation is to pay about 5 - 10 € per month, minimum is 1 € per month. They have a good [wiki](https://wiki.uberspace.de/start) (but only in German so far) for most of the needs you might have.

In order to deploy UberPage to Uberspace, you will have to perform the following steps:
1.  Register a domain somewhere
2.  Register an [Uberspace](https://uberspace.de/) account
3.  Configure your new domain at your Uberspace, see [their wiki](https://wiki.uberspace.de/domain:verwalten)
4.  Configure the newer nodejs version
    ```sh
    echo 'export PATH=/package/host/localhost/nodejs-8/bin:$PATH' >> ~/.bash_profile  # use the newer nodejs version, as this is not the default
    source ~/.bash_profile  # immediately apply the above change
    ```
5.  Deploy your UberPage app
    ```sh
    cd ~
    git clone git@github.com:YoutGithubAccount/uberpage.git
    cd ~/uberpage/uberpage
    npm run build  # build the app for production environment and copy the result to the web root directory
    cp -r build/* ~/html/
    ```
    * (Optional) **Automate the deployment**
      In order to always show the newest version, you can add a cron job to perform the above steps
      * Add the following lines to `~/bin/deploy_uberpage.sh`, e.g. by `vim ~/bin/deploy_uberpage.sh`:
        ```sh
        #!/bin/bash
        
        source ~/.bash_profile
  
        pushd ~/AngularCV
        
        git co -- .   # ignore local changes
        git pull      # get the new stuff
        npm install   # install changes made to package.json
        sed -i -e 's#"homepage".*$#"homepage": "<YOUR_DOMAIN>",#g' package.json # add domain where this is deployed, e.g. https://example.com
        npm run build  # build the app for production environment
        rm -rf ~/html/*
        cp -r build/* ~/html/
        
        popd
        ```
      * Make the script executable via `chmod +x ~/bin/deploy_uberpage.sh` and add the following line to the crontab
        ```sh
        # Deploy UberPage
        @daily ~/bin/deploy_uberpage.sh
        ``` 
    * see more here about website hosting at the [Uberspace wiki](https://wiki.uberspace.de/start:web)
6.  In order to make the direct links and browser page refresh work add this content to the new file `~/html/.htaccess`:
    ```
        RewriteEngine on
        RewriteCond %{REQUEST_FILENAME} -s [OR]
        RewriteCond %{REQUEST_FILENAME} -l [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^.*$ - [NC,L]
    
        RewriteRule ^(.*) /index.html [NC,L]
    ```
    If you chose to automate the deployment (see step before), you should save a copy of this file somewhere (e.g. at `~/.htaccess-for-UberPage`) and add this line at the end of `~/bin/deploy_uberpage.sh`:
    ```sh
    cp ~/.htaccess-for-UberPage ~/html/.htaccess
    ```
