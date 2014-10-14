# feeschmidts.github.io

This is a repositry of my portfolio. It uses jekyll and compass and is hosted on github.

To get it to run on vagrant
    vagrant up //ignore the error messages about tty, dpkg-preconfigure: and 'tomdoc'
    vagrant ssh
    cd /vagrant
    jekyll serve --force_polling //jekyll autogeneration does not work inside vagrant without --force_polling

In browser go to 'localhost:4000' to view site

To stop working on the repositry

    Ctrl + c       # Quits server
    Ctrl + d       # Closes ssh connection
    vagrant halt   # Shuts down the box


When trying to provision vagrant you might come across the following errors:

1 When running the jekyll command you may get "Could not find a JavaScript runtime". This means that it requires node to compile.
    sudo apt-get install -y nodejs //installs node via the package manager
    jekyll serve --force_polling //re-run to compile and generate pages

2 When running 'vagrant up' you might encounter "The SSH command responded with a non-zero exit status".
This means that there are several vagrant instances running. Go to your virtual machine manager and halt/ shutdown any machines that are running.
You should only work on one machine at a time so run 'vagrant halt' after each session.


----- updating -----

To update the basic framework freshly-squeezed
    cd into repositry
    bower update


To get bower to work on vagrant by reinstalling a different node version.

    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get -y install nodejs // if not run previously
    sudo apt-get install git-core

To install a specific bower repo
    node_modules/.bin/bower install [package name]
