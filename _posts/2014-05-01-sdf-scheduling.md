---
title: GA Assisted SDF Scheduling for Energy-Aware Mapping of Heterogeneous Processors
layout: project
type: project
category: electrical engineering
pictures: [sdf.png]
class: UT EE382V
tags: [Python, YAML, C++]
links: { paper: "papers/EE382V_Final_Report.pdf" }
---
We present a method of optimizing both energy and latency of a Synchronous Dataflow model (SDF)
using genetic algorithm (GA) assisted list scheduling. Our solution is fully automatic requiring
only the SDF definition, processor specifications, and communication bus specifications. Using these
parameters, latency and energy are accurately modeled taking into account dynamic energy, static
energy, and DVFS overhead. Actor firings are then optimized for minimal latency and energy using
SPEA2, a multi-objective GA. The resulting schedule defines the overall timing schedule, DVFS
schedule, and processor mapping. In initial tests, energy-optimized schedules can consume up to
38.5% less energy, with a minimal effect on latency. Our final system is fully configurable and
versatile, working on SDFs (for DSP applications) and task graphs (for general applications).
