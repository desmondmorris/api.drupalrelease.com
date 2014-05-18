# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  end

  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network :forwarded_port, guest:3000, host: 3000

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "config/ansible/main.yml"
    ansible.extra_vars = {
      ansible_ssh_user: 'vagrant',
      ansible_connection: 'ssh',
      ansible_ssh_args: '-o ForwardAgent=yes'
    }
  end

end
