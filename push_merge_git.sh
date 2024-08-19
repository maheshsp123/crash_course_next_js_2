#!/bin/bash
git co first_br
echo "branch!"
git br
git push origin first_br
git co main
git merge first_br
git push origin main
git co first_br
echo "branch! After"
git br