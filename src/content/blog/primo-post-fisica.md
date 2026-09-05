---
title: "L'oscillatore armonico, spiegato due volte"
date: 2026-03-12
description: "Newton e Lagrange arrivano alla stessa equazione per strade diverse — e la seconda strada spiega perché la prima funzionava."
tags: ["Fisica"]
draft: false
---

Ogni corso di meccanica passa dall'oscillatore armonico, e all'inizio sembra un esercizio
di ripasso. In realtà è il punto in cui si capisce la differenza fra *saper risolvere*
un problema e *saper riconoscere* la struttura che lo rende risolvibile.

## La strada di Newton

Una massa $m$ attaccata a una molla di costante elastica $k$ sente una forza di richiamo
proporzionale allo spostamento, $F = -kx$. La seconda legge diventa allora

$$
m\ddot{x} + kx = 0,
$$

un'equazione differenziale lineare a coefficienti costanti. Ponendo
$\omega = \sqrt{k/m}$ la soluzione generale è

$$
x(t) = A\cos(\omega t) + B\sin(\omega t),
$$

con $A$ e $B$ fissati dalle condizioni iniziali $x(0)$ e $\dot{x}(0)$. Notare che
$\omega$ non dipende dall'ampiezza: il periodo di oscillazione è lo stesso sia che la
molla venga tirata di un millimetro sia di un centimetro. È l'isocronismo, ed è una
proprietà tutt'altro che ovvia.

## La strada di Lagrange

Scriviamo invece energia cinetica e potenziale,

$$
T = \tfrac{1}{2} m\dot{x}^2, \qquad V = \tfrac{1}{2} k x^2,
$$

e da queste la lagrangiana $L = T - V$. L'equazione di Eulero-Lagrange

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}}\right) - \frac{\partial L}{\partial x} = 0
$$

restituisce esattamente $m\ddot{x} + kx = 0$. Stesso risultato, più lavoro — verrebbe
da dire. Il guadagno però non è nel conto: è che il potenziale $V(x)$ non deve essere
per forza quello di una molla.

Vicino a un minimo $x_0$ qualunque potenziale regolare si sviluppa come

$$
V(x) \simeq V(x_0) + \tfrac{1}{2} V''(x_0)\,(x - x_0)^2,
$$

perché il termine lineare si annulla proprio in virtù del minimo. Ogni sistema stabile,
perturbato abbastanza poco, oscilla armonicamente con $\omega = \sqrt{V''(x_0)/m}$.
L'oscillatore armonico non è un caso particolare: è il comportamento *generico* della
materia vicino all'equilibrio.

## Verificarlo numericamente

Integrare l'equazione con il metodo di Eulero-Cromer basta a vedere l'energia
restare costante (a differenza di Eulero semplice, che la fa crescere senza motivo fisico):

```python
import numpy as np

m, k, dt, n = 1.0, 4.0, 1e-3, 20_000
x, v = 1.0, 0.0

traj = np.empty((n, 2))
for i in range(n):
    a = -k * x / m
    v += a * dt          # prima la velocità...
    x += v * dt          # ...poi la posizione: è questo che conserva l'energia
    traj[i] = (x, v)

E = 0.5 * m * traj[:, 1] ** 2 + 0.5 * k * traj[:, 0] ** 2
print(f"deriva relativa dell'energia: {abs(E[-1] - E[0]) / E[0]:.2e}")
```

L'ordine delle due righe sembra un dettaglio di implementazione. Non lo è: scambiarle
significa scegliere un integratore che non rispetta la struttura simplettica del problema,
e l'energia se ne accorge.

---

*Se trovi un errore in questo post, scrivimi: è il modo più veloce che conosco per impararlo meglio.*
