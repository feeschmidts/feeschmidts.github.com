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
