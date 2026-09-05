---
title: "Quanto conta partire bene nei 200 metri"
date: 2026-04-28
description: "Un modello semplice della corsa, calibrato sui miei tempi di allenamento, per capire dove si perdono davvero i decimi."
tags: ["Sport"]
draft: false
---

Dopo l'ennesima gara chiusa con la sensazione di aver sbagliato il primo tratto, ho provato
a rispondere alla domanda con un modello invece che con le sensazioni.

Il modello più semplice della corsa sprint è quello di Keller: la velocità $v(t)$ obbedisce a

$$
\dot{v}(t) = f(t) - \frac{v(t)}{\tau},
$$

dove $f(t)$ è la spinta propulsiva e $\tau$ una costante di tempo che raccoglie tutte le
resistenze. Con spinta costante $f$ la soluzione è

$$
v(t) = f\tau\left(1 - e^{-t/\tau}\right),
$$

cioè una velocità che satura al valore $v_{\max} = f\tau$ con tempo caratteristico $\tau$.

Calibrando $\tau \approx 1{,}0\ \mathrm{s}$ sui miei tempi ai 30 e ai 60 metri, il conto dice
una cosa scomoda: dopo circa tre secondi il termine esponenziale è già sotto il 5%, quindi
tutto ciò che succede nell'accelerazione iniziale si è **già** deciso. Il resto della gara
non recupera, al massimo non peggiora.

Ho messo il codice di fitting in un notebook, ma la conclusione pratica sta in una riga:
i decimi si trovano nei primi trenta metri, ed è lì che ha senso spendere gli allenamenti.
Il modello non mi ha detto nulla che un buon allenatore non sappia già — mi ha però
convinto in un modo in cui nessuno mi aveva convinto prima.
