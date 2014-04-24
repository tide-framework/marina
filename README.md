Marina
=====

A CMS built on top of [Pillar](http://www.smalltalkhub.com/#!/~Pier/Pillar) and [Tide](https://github.com/tide-framework/tide).

## Installation

In a shell:

```bash
$ mkdir marina
$ cd marina
$ wget "https://ci.inria.fr/pharo-contribution/job/marina/PHARO=30,VERSION=development,VM=vm/lastSuccessfulBuild/artifact/Marina.zip"
$ wget -O- get.pharo.org/vm | bash
$ git clone https://github.com/tide-framework/marina.git
$ cd marina
$ git submodule init
$ git submodule update
$ bower install
$ cd tide
$ bower install
$ cd ../..
$ ./pharo-ui Marina.image
```

In Pharo:

Make sure you have the latest version of Marina:

```smalltalk
Metacello new
  configuration: 'Marina';
  version: #development;
  repository: 'http://www.smalltalkhub.com/mc/Pharo/MetaRepoForPharo30/main';
  load.
```

Then initialize everything:

```
MRSetup setupAll
```

Then you can visit these 2 urls:

- http://localhost:8080/web/
- http://localhost:8080/tide/marina/index.html
