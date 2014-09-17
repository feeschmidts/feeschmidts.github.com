# feeschmidts.github.io

This is a repositry of my portfolio. It uses jekyll and compass and is hosted on github.

To get it to run on vagrant
    vagrant up

    vagrant ssh
    cd /vagrant
    jekyll serve --watch --force_polling //jekyll autogeneration does not work inside vagrant without --force_polling

In browser go to 'localhost:4000' to view site

To stop working on the repositry

    Ctrl + c   # Quits server
    Ctrl + d   # Closes ssh connection
    vagrant halt   # Shuts down the box

To update the basic framework freshly-squeezed
    cd into repositry
    bower update


To get bower to work on vagrant by reinstalling a different node version.

    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get -y install nodejs
    sudo apt-get install git-core

To install a specific bower repo
    node_modules/.bin/bower install [package name]

