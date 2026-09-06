---
title: "How much the start matters in the 200 m"
date: 2026-04-28
description: "A simple model of sprinting, calibrated on my training times, to work out where the tenths are actually lost."
tags: ["Sport"]
draft: false
---

After yet another race that ended with the feeling of having botched the first stretch, I tried
answering the question with a model instead of with impressions.

The simplest model of sprinting is Keller's: the velocity $v(t)$ obeys

$$
\dot{v}(t) = f(t) - \frac{v(t)}{\tau},
$$

where $f(t)$ is the propulsive drive and $\tau$ a time constant collecting all the resistances.
With constant drive $f$ the solution is

$$
v(t) = f\tau\left(1 - e^{-t/\tau}\right),
$$

that is, a velocity saturating at $v_{\max} = f\tau$ with characteristic time $\tau$.

Calibrating $\tau \approx 1.0\ \mathrm{s}$ on my 30 m and 60 m times, the calculation says
something inconvenient: after roughly three seconds the exponential term is already below 5%,
so everything that happens in the initial acceleration has **already** been decided. The rest
of the race doesn't recover it; at best it doesn't make it worse.

I put the fitting code in a notebook, but the practical conclusion fits in one line: the tenths
are found in the first thirty metres, and that is where it makes sense to spend the training.
The model told me nothing a good coach doesn't already know — but it convinced me in a way
nobody had managed before.
