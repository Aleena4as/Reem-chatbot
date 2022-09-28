#!/bin/bash

fileloc='./build'
pemvar='Lexus.pem'
uservar="ubuntu"
ipvar="18.220.63.147"
deployloc="/home/ubuntu"
# dest="/var/www/html/script/"
dest="/var/www/html/lexus/"

# read -p 'Instance ip: ' ipvar
# read -p 'Login username: ' uservar
# read -p 'Pem file location: ' pemvar
# read -p 'File Location (to create build): ' fileloc
# read -p 'Deploy location: ' deployloc
echo Removing existing build file
rm -rf $fileloc
echo Creating new build file
npm run build --prod
echo Build created
echo Removing existing build file in server
ssh -i $pemvar -t $uservar@$ipvar "rm -rf build"
echo Copying to destination in server
scp -i $pemvar -r $fileloc $uservar@$ipvar:$deployloc
echo Copying to apache root folder
# ssh -i $pemvar -t $uservar@$ipvar "sudo rm -rf $dest/*"
ssh -i $pemvar -t $uservar@$ipvar "sudo cp -r $deployloc/build/* $dest"
echo Build Deployed
# echo Restarting apache server
# ssh -i $pemvar -t $uservar@$ipvar "sudo service apache2 restart"
echo Done


# scp -r -i "Lexus.pem" bluelogicBot.js ubuntu@18.220.63.147:/var/www/html/script