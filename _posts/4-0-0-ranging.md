---
layout: post
title:  "Ranging"
route: "ranging"
date:   2016-1-4 09:24:09 +0200
categories: docs
---
Ranging is a process of determination whether the mobile device is in the range of BONI Spot or not. Once it enters in the range - the content items pinned up to the BONI Spot will be delivered to the mobile device.

While a user’s device is inside a registered BONI Spot region, apps can determine the relative proximity of one or more beacons in the region and to be notified when that distance changes. Knowing the relative distance to a beacon can be useful for many apps. For example, imagine a museum that places a beacon at each exhibit. A museum-specific app could use a particular exhibit’s proximity as a cue to provide information about that exhibit rather than another.

Ranging depends on detecting the strength of Bluetooth low-energy radio signals, and the accuracy of those signals is attenuated (or lessened) by walls, doors, and other physical objects. The signals are also affected by water, which means the human body itself will affect the signals. It is important to be aware of these factors when planning your iBeacon deployment because they will impact the proximity value reported by each beacon.

To promote consistent results in your app, use beacon ranging only while your app is in the foreground. If your app is in the foreground, it is likely that the device is in the user’s hand and that the device’s view to the target beacon has fewer obstructions. Running in the foreground also promotes better battery life by processing incoming beacon signals only while the user is actively using the device.

Based on the proximity to the BONI Spot, BONI SDK provides 3 distances detection:

* Immediate
* Near
* Far

BONI SDK also provides a mechanism to receive notification that the user is in the range of BONI Spot no matter of the proximity (so called Always callback).
