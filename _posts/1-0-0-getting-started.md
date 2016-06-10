---
layout: post
title:  "Getting Started"
route: "getting-started"
date:   2016-1-1 09:25:09 +0200
categories: docs
---

The BONI platform provides a complete backend solution for your mobile application that facilitate the interaction with Bluetooth Low Energy Beacons (iBeacons). BONI works with all iBeacons on the market no matter of their manufacturer.

The term iBeacon and Beacon are often used interchangeably. iBeacon is the name for Apple’s technology standard, which allows Mobile Apps (running on both iOS and Android devices) to listen for signals from beacons in the physical world and react accordingly. In essence, iBeacon technology allows Mobile Apps to understand their position on a micro-local scale, and deliver hyper-contextual content to users based on location. The underlying communication technology is Bluetooth Low Energy.

BONI SDK is originally based on [cordova-plugin-ibeacon](https://github.com/petermetz/cordova-plugin-ibeacon).

Once you install the BONI SDK, your mobile app will be able to detect iBeacons. Once the beacon has been detected, the BONI SDK gets the payload that receive from it and send it to BONI Cloud that exchange the beacon payload for predefined content and send it back to the mobile app.

![BONI Diagram]({{ site.github.url }}/img/front-banner.svg)

BONI SDK is the content gateway for your mobile app. It takes care about iBeacon detection and delivering of appropriate content. BONI SDK is ready to use out of the box with minimal configuration on your part.

BONI Console is a lightweight Content Management System that helps you to organize your [BONI Content](#content) and pin it up to [BONI Spot](#spot).
