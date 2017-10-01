# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
 config.vm.box = "ubuntu/trusty64"
 config.vm.network "forwarded_port", guest: 4000, host: 4000
 config.vm.provision "shell", :inline => <<END
   apt-get install -y ruby-dev
   sudo gem install jekyll
   curl -sL https://deb.nodesource.com/setup | sudo bash -
   sudo apt-get install nodejs
END
end
