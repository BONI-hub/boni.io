---
layout: post
title:  "Spot"
route: "spot"
date:   2016-1-2 09:25:09 +0200
categories: docs spot
---
BONI Spot is a virtual representation of real object or location (indoor or outdoor) that has corresponding iBeacon. The iBeacon has 3 key identifiers:

* **UUID** - This is a 16 byte string used to differentiate a large group of related beacons. For example, if Coca-Cola maintained a network of beacons in a chain of grocery stores, all Coca-Cola beacons would share the same UUID. This allows Coca-Cola’s dedicated smartphone app to know which beacon advertisements come from Coca-Cola-owned beacons.

* **Major ID** - This is a 2 byte string used to distinguish a smaller subset of beacons within the larger group. For example, if Coca-Cola had four beacons in a particular grocery store, all four would have the same Major. This allows Coca-Cola to know exactly which store its customer is in.

* **Minor ID** - This is a 2 byte string meant to identify individual beacons. Keeping with the Coca-Cola example, a beacon at the front of the store would have its own unique Minor. This allows Coca-Cola’s dedicated app to know exactly where the customer is in the store.

Each BONI Spot has the same identifiers as iBeacon plus **Spot name**.
