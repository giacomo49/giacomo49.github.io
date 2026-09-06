---
title: "The harmonic oscillator, explained twice"
date: 2026-03-12
description: "Newton and Lagrange reach the same equation by different routes — and the second route explains why the first one worked."
tags: ["Physics"]
draft: false
---

Every mechanics course goes through the harmonic oscillator, and at first it looks like a
revision exercise. It is in fact the point where you see the difference between *knowing how
to solve* a problem and *recognising* the structure that makes it solvable.

## Newton's route

A mass $m$ attached to a spring of stiffness $k$ feels a restoring force proportional to the
displacement, $F = -kx$. The second law then reads

$$
m\ddot{x} + kx = 0,
$$

a linear differential equation with constant coefficients. Setting $\omega = \sqrt{k/m}$,
the general solution is

$$
x(t) = A\cos(\omega t) + B\sin(\omega t),
$$

with $A$ and $B$ fixed by the initial conditions $x(0)$ and $\dot{x}(0)$. Note that $\omega$
does not depend on the amplitude: the period is the same whether the spring is pulled by a
millimetre or by a centimetre. This is isochronism, and it is anything but obvious.

## Lagrange's route

Instead, write down the kinetic and potential energy,

$$
T = \tfrac{1}{2} m\dot{x}^2, \qquad V = \tfrac{1}{2} k x^2,
$$

and from them the Lagrangian $L = T - V$. The Euler-Lagrange equation

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) - \frac{\partial L}{\partial x} = 0
$$

gives back exactly $m\ddot{x} + kx = 0$. Same result, more work — or so it seems. The payoff
is not in the calculation: it is that the potential $V(x)$ need not be a spring's.

Near any minimum $x_0$, a smooth potential expands as

$$
V(x) \simeq V(x_0) + \tfrac{1}{2} V''(x_0)\,(x - x_0)^2,
$$

since the linear term vanishes precisely because it is a minimum. Every stable system, perturbed
gently enough, oscillates harmonically with $\omega = \sqrt{V''(x_0)/m}$. The harmonic oscillator
is not a special case: it is the *generic* behaviour of matter near equilibrium.

## Checking it numerically

Integrating the equation with the Euler-Cromer method is enough to see the energy stay constant
(unlike plain Euler, which makes it grow for no physical reason):

```python
import numpy as np

m, k, dt, n = 1.0, 4.0, 1e-3, 20_000
x, v = 1.0, 0.0

traj = np.empty((n, 2))
for i in range(n):
    a = -k * x / m
    v += a * dt          # velocity first...
    x += v * dt          # ...then position: this is what conserves the energy
    traj[i] = (x, v)

E = 0.5 * m * traj[:, 1] ** 2 + 0.5 * k * traj[:, 0] ** 2
print(f"relative energy drift: {abs(E[-1] - E[0]) / E[0]:.2e}")
```

The order of those two lines looks like an implementation detail. It isn't: swapping them means
choosing an integrator that does not respect the symplectic structure of the problem, and the
energy notices.

---

*If you find a mistake in this post, write to me: it is the fastest way I know of learning it properly.*
