## api.drupalreleases.com

A JSON proxy to drupal.org release history.

So instead of doing requesting: `http://updates.drupal.org/release-history/redis/7.x` and getting this:

![xml](https://s3.amazonaws.com/uploads.hipchat.com/34218/233906/uLkPorI7eSnH1wl/Screen%20Shot%202014-05-17%20at%208.58.15%20PM.png)

You can request this instead: `http://api.drupalreleases.com/redis/7.x` and get:

![json](https://s3.amazonaws.com/uploads.hipchat.com/34218/233906/eTUXNTC36onprPN/Screen%20Shot%202014-05-17%20at%208.58.34%20PM.png)

### Requirements

* Node.js >= 0.10.x
* Redis >= 2.2.12
* Vagrant >= 1.5.3 **
* Ansible >= 1.5.4 **

** Needed for local development only
