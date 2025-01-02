# Setup on MacOS

## Install homebrew

You can skip this step if you have homebrew installed on your system.

Read how to install Homebrew from [its homepage](https://brew.sh/).

## Install Node 20

Update and upgrade installed packages:
```
brew update && brew upgrade
```

Install node using homebrew:
```
brew install node
```

Check the version of node:
```
$ node --version
v22.9.0
```

Install node 20:
```
brew install node@20
```

Overwrite linked version of node:
```
brew link --overwrite node@20
```

Check the version of node:
```
$ node --version
v20.18.1
```

## Install Angular

Install angular cli
```
sudo npm install -g @angular/cli
```
