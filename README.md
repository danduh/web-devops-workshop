# FrontEnd + DevOps = ❤️ (Workshop #1)


## Session #1 will cover the following topics:
- What is DevOps (some history)
- Why we (FrontEnd developers) should care
- Intro into the World of Containers
- Hello World - Docker
- Serve our static build from Docker


## Prerequisite:
1) Machine with Docker installed:
    - macOS https://docs.docker.com/docker-for-mac/install/
    - Linux-based: https://runnable.com/docker/install-docker-on-linux
    - Windows: https://docs.docker.com/docker-for-windows/install/
2) Docker Hub account: https://hub.docker.com/signup
3) A good mood and willing to learn.



### Installation

#### Linux

Quick and easy install script provided by Docker:

```
curl -sSL https://get.docker.com/ | sh
```

If you're not willing to run a random shell script, please see the [installation](https://docs.docker.com/engine/installation/linux/) instructions for your distribution.

If you are a complete Docker newbie, you should follow the [series of tutorials](https://docs.docker.com/engine/getstarted/) now.

#### macOS

Download and install [Docker Community Edition](https://www.docker.com/community-edition). if you have Homebrew-Cask, just type `brew cask install docker`. Or Download and install [Docker Toolbox](https://docs.docker.com/toolbox/overview/).  [Docker For Mac](https://docs.docker.com/docker-for-mac/) is nice, but it's not quite as finished as the VirtualBox install.  [See the comparison](https://docs.docker.com/docker-for-mac/docker-toolbox/).

> **NOTE** Docker Toolbox is legacy. You should to use Docker Community Edition, See [Docker Toolbox](https://docs.docker.com/toolbox/overview/).

Once you've installed Docker Community Edition, click the docker icon in Launchpad. 

That's it, you have a running Docker container.

### Check Version

It is very important that you always know the current version of Docker you are currently running on at any point in time.
This is very helpful because you get to know what features are compatible with what you have running. 
This is also important because you know what containers to run from the docker store when you are trying to get template containers. 
That said let see how to know which version of docker we have running currently.


* [`docker version`](https://docs.docker.com/engine/reference/commandline/version/) shows which version of docker you have running.

Get the server version:

```
docker version --format '{{.Server.Version}}'

1.8.0
```
