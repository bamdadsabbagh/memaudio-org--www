#

<p align=center>
  <a href="https://memaudio.org/"><img width=150 src="https://raw.githubusercontent.com/memaudio/memaudio-www/master/public/android-chrome-512x512.png"></a>
</p>

<p align=center>
  web based audio memory (proof of concept)
  <br>
  <b>
    ⚠️ unmaintained
  </b>
</p>

<p align=center>
  <a href="https://github.com/memaudio/memaudio-www"><img src="https://img.shields.io/github/stars/memaudio/memaudio-www?label=git"></a>
  <img src="https://img.shields.io/github/license/memaudio/memaudio-www">
</p>

<p align=center>
  <img src="https://img.shields.io/github/languages/count/memaudio/memaudio-www">
  <img  src="https://img.shields.io/github/languages/top/memaudio/memaudio-www">
</p>

<p align=center>
  <img src="https://img.shields.io/github/v/release/memaudio/memaudio-www">
  <img src="https://api.codeclimate.com/v1/badges/d03ca633f0cac75c7520/maintainability">
</p>

<p align=center>
  <img src="https://img.shields.io/david/memaudio/memaudio-www">
  <img src="https://img.shields.io/david/dev/memaudio/memaudio-www">
  <img src="https://img.shields.io/snyk/vulnerabilities/github/memaudio/memaudio-www">
</p>

## state

latest working version is `v1.0.121`

## local dev

```bash
git clone https://github.com/bamdadsabbagh/memaudio-www.git
cd memaudio-www
yarn install

# http://localhost:3000/
yarn start
```

## docker

### local build

```bash
docker build -t memaudio-www-dev .
```

### run

```bash
# local dev image
docker run -d --name memaudio-www --restart=always -p 5007:80 memaudio-www-dev

# production image
docker run -d --name memaudio-www --restart=always -p 5007:80 docker.pkg.github.com/memaudio/memaudio-www/memaudio-www:v1.0.121
```
