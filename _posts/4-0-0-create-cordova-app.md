---
layout: post
title:  "Create Cordova App"
date:   2016-1-4 09:25:09 +0200
categories: docs create-cordova-app
---
Go to the directory where you maintain your source code, and create a cordova project:

{% highlight sh %}
$ cordova create hello-boni
{% endhighlight %}

This creates the required directory structure for your cordova app. By default, the `cordova create` script generates a skeletal web-based application whose home page is the project's `www/index.html` file.

All subsequent commands need to be run within the project's directory, or any subdirectories:

{% highlight sh %}
$ cd hello-boni
{% endhighlight %}

Add the platforms that you want to target your app. We will add the `ios` and `android` platform and ensure they get saved to `config.xml`:

{% highlight sh %}
$ cordova platform add ios --save
$ cordova platform add android --save
{% endhighlight %}

See also:

* [Install pre-requrisites for building][install-prerequisits]


[install-prerequisits]: https://cordova.apache.org/docs/en/6.x/guide/cli/index.html#install-pre-requrisites-for-building
