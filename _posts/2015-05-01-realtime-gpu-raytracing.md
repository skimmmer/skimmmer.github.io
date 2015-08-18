---
title: Realtime GPU Raytracing
layout: project
type: project
category: electrical engineering
pictures: [raytracer.png]
class: UT EE382N-20
tags: ["Graphics", "CUDA C/C++", "OpenGL"]
links: { paper: "papers/raytracer.pdf", video:
"https://drive.google.com/file/d/0BzurslBBujadWVB1LVBCVzJmY3M/view?usp=sharing" }
---
In this paper, we aim to explore current methods for realtime raytracing and attempt to elaborate
upon them in order to produce a near realtime implementation. Additionally, while some prior work
only implement partial features (e.g. only primary and shadow rays), we aim to support primary and
all secondary (refraction, reflection, light/shadow) rays as well as arbitrary triangle meshes and
textures. We decided to implement the final raytracer in CUDA due to the availability of NVIDIA
hardware and their toolset.
