---
title: Lightcuts and Illumination
layout: project
category: electrical engineering
pictures: [cs384g.png]
class: UT CS384G
tags: ["Graphics", "C++", "OpenGL"]
links: { paper: "papers/cs384g.pdf" }
---
While acceleration structures such as k-d trees or bounding volume hierarchies greatly reduce the
ray-object intersection complexity, every light source still needs to be assessed during the Phong
shading. This can be troublesome for scene with large numbers of light sources, luminous objects, or
global illumination. Lightcuts is a technique that seeks to reduce the overhead of iterating through
a large number of light sources, by combining nearby light sources together. This of course comes
with a certain amount of error, an error for which a threshold can be preset. This projects seeks to
implement objects and methods which creates large amounts of light sources within the scene and
demonstrate the acceleration in scene rendering with a large number of light sources using
lightcuts.
