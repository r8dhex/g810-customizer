#!/bin/bash
export DEBIAN_FRONTEND=noninteractive

# set timezone
timedatectl set-timezone Australia/Melbourne

# create non-privileged user
# adduser luij
# usermod -aG sudo luij

# lockdown ssh, remove remote root login, allow only luij
sed -i -e 's/PermitRootLogin prohibit-password/PermitRootLogin no/g' /etc/ssh/sshd_config
sed -i -e 's/LoginGraceTime 120/LoginGraceTime 45/g' /etc/ssh/sshd_config
sed -i -e 's/#MaxStartups 10:30:60/MaxStartups 3/g' /etc/ssh/sshd_config
sed -i -e 's/X11Forwarding yes/X11Forwarding no/g' /etc/ssh/sshd_config
echo -e "\n\n"  >> /etc/ssh/sshd_config
echo -e "AllowTcpForwarding yes" >> /etc/ssh/sshd_config
#echo -e "AllowUsers luij" >> /etc/ssh/sshd_config

# install
apt-get -y install aptitude
aptitude -y update
aptitude -y upgrade
aptitude -y install etckeeper
aptitude -y install git unzip denyhosts ntp nginx mysql-server php-fpm php-apcu php-mysql php-gd php-mcrypt php-cli php-curl php-pear php-mbstring

# https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04

# secure mysql
# remember to setup a root password for mysql
mysql -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');"
mysql -e "DELETE FROM mysql.user WHERE User='';"
mysql -e "DROP DATABASE IF EXISTS test;"
mysql -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';"
mysql -e "FLUSH PRIVILEGES;" 

# turnoff cgi.fix_pathinfo in php.ini
sed -i -e 's/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' /etc/php/7.0/fpm/php.ini
systemctl restart php7.0-fpm

# setup firewall
ufw allow 'OpenSSH'
ufw allow 'Nginx HTTP'

yes | ufw enable

# setup DenyHosts
# edit the config file
systemctl restart denyhosts

# configure nginx default
# ... mostly manual editing

# letsencrypt
# https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt

