#!/bin/bash

echo -e "\e[01;34mStarte nodeJs Update.\e[00m"

sudo npm cache clean -f && sudo npm install -g n && sudo n stable
