---
title: Storylines
layout: project
category: web development
pictures: [storylines2.png, storylines3.png]
tags: ["HTML/CSS", Javascript, PHP, MySQL, Facebook]
---
To fill the gap of rundezvous, I made a quick experiment in about a week. For this I utilized HTML5
(canvas, CSS3), Object-Oriented PHP, and AJAX. I also used a cool technique to make triangles with
just CSS. Anyway, the project is called Storylines, and it's a collaborative story writing
website/app. For the login, I just used Facebook purely (to save time). There were some interesting
quirks with the idea, since only one person could edit a story at a time (plot contingency). To do
this I used a technique called AJAX long polling, basically where the AJAX request online responds
when something has changed. So basically, a person is put in a queue for editing the story, and has
a certain amount of (idle) time to post a line/drawing. Some other features were drawings (using
canvas, a colorpicker, jquery ui), branching stories (from a line), and reporting posts (fades away,
and then hides).
