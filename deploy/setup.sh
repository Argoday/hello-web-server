
sudo apt-get install software-properties-common -y
sudo apt-add-repository ppa:ansible/ansible -y
sudo apt-get update

sudo apt-get install awscli -y

sudo apt-get install ansible -y

sudo ansible-galaxy install nodesource.node

sudo ansible-playbook -i ./playbooks/hosts ./playbooks/install.yml

