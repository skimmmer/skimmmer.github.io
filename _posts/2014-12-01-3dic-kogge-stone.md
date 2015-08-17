---
title: A Study of 3DIC Kogge-Stone Circuits
layout: project
category: electrical engineering
pictures: [hs.png]
class: UT EE382N-14
tags: [Tcl, Perl, SPICE, Cadence]
links: { paper: "papers/hs_report.pdf" }
---
Component delays have traditionally been the focus for performance optimization of logic circuits.
As component sizes and delays shrink, wire delays become more significant. Awareness and planning of
component placement to optimize wire length then becomes more valuable. The addition of another
dimension through die stacking creates more opportunities for shortening this length by shrinking
the absolute distance between components. Through Surface Vias (TSVs) act as the electrical
connection between die layers. We've found that TSVs have RC characteristics that create a
communication delay that is less than the delay created by the length of wire needed to separate
modules in a two dimensional space, meaning the incurred delay can be lessened by separating the
modules by die layer. While TSVs have beneficial delay characteristics, they have an area
requirement far more expensive than their wire counterparts, which may make them hard to place in
the design, especially if many signals need to transfer layers. To demonstrate the effectiveness of
this method we choose a Kogge-Stone adder because of it notoriety for having many long wires.
