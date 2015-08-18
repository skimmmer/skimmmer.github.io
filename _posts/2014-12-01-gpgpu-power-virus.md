---
title: Highly Configurable Power Virus for GPGPUs
layout: project
type: project
category: electrical engineering
pictures: [perf.png]
class: UT EE382M-15
tags: ["CUDA C", Python, GPGPU-Sim]
links: { paper: "papers/perf.pdf" }
---
As GPUs are becoming common-place co- processors, methods for improving power usage without
affecting performance are being analyzed. Currently, GPUs are transistor-dense devices, with many
independent cores, yielding high power usage. One of the concerns shared by both CPUs and GPUs is
how much power they will use when operating at peak performance and how to develop programs that
will allow developers to test their system when at or near that point. For multicore
microprocessors, tools have been created for developing power viruses that can stress test how well
the system handles the additional power and heat. These tools allow the developer to create tailored
power viruses by providing parameters of the system to test without knowing the fine grain details
of the every functional unit in the processor that would be necessary to create the same kind of
program by hand. However, this kind of tool has not been created for GPGPUs and existing
multiprocessor capabilities for general purpose microprocessors cannot be used for this purpose. We
created a tool to create power viruses for various GPU architectures using GPGPU-Sim-Wattch to
simulate the virus and measure its power usage. In the end we were able to create power viruses for
the GTX 480 and Quadro FX5600 that came close to or exceeded the thermal limits for these cards and
discovered correlations between certain hardware features and the corresponding parameters to our
code generator that get close to producing the best power viruses. We also found Plackett and Burman
design to be very helpful for tuning the search space for our genetic algorithm and for discovering
trends in our results.
