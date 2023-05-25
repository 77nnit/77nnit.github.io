---
layout: post
language: it
title: "Scripting sicuro con Powershell"
imgsrc: "/assets/images/misc/Shell.svg"
description: "Linee guida per lo sviluppo in sicurezza di script Powershell"
keywords: "Powershell, scripting, sicurezza"
tag: tech
---
Lo scripting è una pratica comune nel mondo IT: consente di svolgere molte oprazioni rapidamente e in modo ripetibile su una grande quantità di piattaforme alla volta. Ma comporta anche dei rischi, soprattutto nel caso di script articolati, quando il tecnico è ancora un po' troppo verde, o quando si utilizzano componenti di terze parti scarsamente documentati o contenenti bug non noti. In questo post mi riferisco esclusivamente a scripting in ambiente Windows, conoscendolo piuttosto bene nelle sue diverse sfumature e dialetti.

In omaggio questo sfondo per desktop, così tanto per entrare nel mood!

<figure>
<img src="{{ page.imgsrc }}" alt="Desktop background image recalling Powershell logo and colors - CC-BY-4.0"/>
<figcaption>Sfondo per desktop che richiama il logo di Powershell. Immagine originale rilasciata sotto licenza <a rel="license" href="https://creativecommons.org/licenses/by/4.0/" target = "_blank">CC-BY-4.0</a></figcaption>
</figure>

Non sarebbe una esagerazione affermare che gli ambienti di produzione, in aziende di qualunque dimensione, si reggono in piedi grazie allo scripting. A guardare bene si trova di tutto: i potenti .bat, dall'aspetto arcano e dal sapore metallico; i fantastici e libertini .vbs, con cui poter fare perfino il caffé; i sottovalutati .hta, veri precursori delle Universal App; e così via, scarrellando veloce attraverso JS, Python, Ruby e relativi interpreti in numerose versioni... e chi più ne ha, più ne metta. Sono però ormai diversi anni che Microsoft ha introdotto l'ambiente di scripting più potente e versatile di sempre: Powershell. Inizialmente guardato con diffidenza, è riuscito a guadagnare sempre più fiducia ed è ormai lo standard per sistemi operativi Windows. Certo, richiede studio e attenzione perché il didsastro è dietro l'angolo.

Potrà apparire come un monito eccessivamente allarmista, ma posso sostenerlo con numerosi esempi senza timore di smentita... è per questo motivo che ho deciso di mettere su carta le precauzioni che raccomando di adottare nelle organizzazioni che fanno largo uso di scripting Powershell.

Il testo, che ho caricato su Codeberg con licenza CC-BY-4.0, è liberamente scaricabile e stampato occupa tra 10 e 15 pagine... la mia speranza è di riuscire a raffinarlo sempre di più nel tempo.

Lo trovate qui: [https://codeberg.org/77nn/LineeGuidaPowershell](https://codeberg.org/77nn/LineeGuidaPowershell)

Il testo si rivolge a sviluppatori giovani, o alle prime armi, che hanno compreso la portata e le caratteristiche di Powershell e che non hanno l'arroganza di pensare che a loro non serva. Ovviamente se sei uno sviluppatore più smaliziato ed esperto lo troverai piuttosto scarno o avrai rimostranze e distinguo... ebbene questo testo è in un repository pubblico dove la collaborazione è possibile: fallo!

Buona lettura!


