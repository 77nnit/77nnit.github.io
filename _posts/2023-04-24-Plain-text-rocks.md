---
layout: post
language: it
title: "Plain text rocks!"
imgsrc: "/assets/images/misc/ASCII-DIAGRAM.png"
description: "Lavorare in plain text nel 2023 ha forse più senso di quello che pensiamo? Alcune considerazioni su contenuto, data retention e praticità d'uso"
keywords: Plain Text, Testo, Contenuto, Pagina, Documento, Retention, Dati, Conservazione, ASCII, UNICODE
tag: tech
---

Da anni utilizzo un normale editor di testo (o meglio, una versione "superaccessoriata" di un editor di testo - link in fondo alla pagina) come principale strumento di lavoro. E il mio lavoro non è, principalmente, quello di scrivere codice. Quello che ho intrapreso è comunque un altro viaggio, non una meta che ho trovato, e il compromesso tra purezza e usabilità è sempre necessario.

<figure>
<img src="{{ page.imgsrc }}" alt="È possibile usare strumenti online per generare semplici immagini e diagrammi utilizzando i soli caratteri ASCII"/>
<figcaption>È possibile usare strumenti online (come ad esempio ASCIIFLOW o TEXTIK - link in fondo alla pagina) per generare semplici immagini e diagrammi utilizzando i soli caratteri ASCII.</figcaption>
</figure>

Grazie a [@prealpinux](https://mastodon.uno/@prealpinux) ho trovato un interessante sito mantenuto per diversi anni da [Scott Nesbitt](https://scottnesbitt.online/) (link in fondo alla pagina). Il sito non è più mantenuto e il dominio scadrà a fine maggio 2023, il che è un peccato, ma questa è la volontà dell'autore, che ha comunque rilasciato tutto con licenza CC BY-NC-SA 4.0, rendendo possibile a chiunque lo desideri di portare avanti il progetto (no, non è mia intenzione!).

## La filosofia del contenuto

Lo ammetto, ho sempre avuto una ossessione filosofica sulla distinzione tra ciò che è **contenuto**, **contenitore** e **forma**. Ho sempre pensato che la cristallizzazione del pensiero in parole meritasse di possedere una *sostanza il più pura possibile*, e il mondo digitale si avvicina molto alla mia idea di purezza: un testo costituito di simboli/entità/segni puri, universali, essenziali nella loro codifica digitale è l'idea che ho del contenuto perfetto.

Il contenuto non ha forma, se non linguistica, non ha *formattazione*, non ha pagine né altre convenzioni editoriali o tipografiche. Solamente i segni delle parole, delle punteggiatura e degli spazi hanno posto nel mio concetto di contenuto. Tutto il resto è contenitore, oppure forma.

Un testo puro è contenuto in una pagina, ma solo se viene stampato, altrimenti è libero di fluire ininterrotto se non da paragrafi e punteggiature. La pagina è una prigione per il contenuto, che per sua natura è fluido, è libero. Gli ebook, ad esempio, incarnano questo concetto, rappresentano la realizzazione di questo dinamismo, in cui il numero di pagina è solo un indicatore della strada percorsa, non delle "coordinate" di una parola. Purtroppo sono formati che richiedono un interprete, spesso un pezzo di tecnologia proprietaria, o un mezzo-standard destinato a mille modifiche e poi all'abbandono.

La forma è invece, sostanzialmente, "un trucco" che si applica al contenuto. Un po' di rossetto, un po' di matita, e anche un testo con poco da dire diventa carino da vedere. Ordinato, giustificato, dalle forme aggraziate o "senza grazie", da scegliere a seconda del contesto, del mood, o del blasone da indossare.

## Il problema della data retention

Poi c'è anche un discorso più pratico. Quello della *sopravvivenza del contenuto alla tecnologia*. Le tecnologie invecchiano e vengono sostituite. Documenti salvati in formati proprietari di appena 20 o 30 anni fa possono non essere già più leggibili oggi, e persi per sempre. Pensiamo davvero che una base dati di 20 o 30 anni fa sia oggi facilmente leggibile? Probabilmente è persa per sempre se la tecnologia proprietaria che stava dietro a quella base dati è evaporata nella frenesia della *new-economy*.

Un file di testo codificato in caratteri **ASCII** o **UNICODE**, invece, sarà con buona probabilità sempre leggibile da qualunque sistema informatico umano da qui alle prossime centinaia di anni: troppa "fondazione" di dati, configurazioni, file di appoggio è basata su file di testo semplice da pensare che una rivoluzione informatica la possa mai spazzare via completamente.

## ...e in pratica?

Ma come è possibile usare un semplice editor di testo per fare quello che normalmente facciamo utilizzando decine di applicazioni differenti? Beh, ovviamente non tutti i workflow sono adatti ad essere trasferiti sul "blocco note": **spreadsheet** e **presentazioni** sono probabilmente fuori scopo per le acrobazie più complesse, ma non così tanto: i fogli e le tabelle di excel possono essere esportati e mantenuti al riparo dal software proprietario in testo semplice, così come è possibile inserire le "note del relatore" da un documento di partenza in testo semplice quando viene trasformato in una presentazione. Un sito web è fatto di **pagine HTML**, **CSS** e **JavaScript** che sono file di testo semplice, e può essere interamente esportato su un file di **feed XML** che è anch'esso un file di testo di relativamente semplice fruizione. Questo sito è interamente scritto in testo semplice, utilizzando il framework **Jekyll** (che configuro attraverso file di testo) per crearne attorno il contenitore e la forma desiderata.

Quindi ripensiamoci un minuto. Davvero ci servono così tante applicazioni quando il tutto si può sempre ridurre, a scopo di interoperabilità, ad un semplice file di testo? E se adottassimo dei workflow più naturali, più focalizzati sul contenuto che sul contenitore e sulla forma? Non riusciremmo ad *applicare più qualità al nostro lavoro* e pensare al "trucco" solo come "tocco finale"?

Il sito di Scott, che ho citato all'inizio del post offre numerosissimi spunti grazie a *template*, *trucchi*, *procedure* per trasformare testo grezzo in PDF, siti web, e file più ricchi. Non ho intenzione di proseguire la sua *legacy*, ma condividerò di tanto in tanto qualche spunto pratico che ho trovato particolarmente utile.

Grazie a al prossimo post!

## Links:

* Applicazione [Notepad++](https://notepad-plus-plus.org/)
* Sito web di Scott Nesbitt [plaintextproject.online](https://plaintextproject.online)
* Applicazione online [AsciiFlow](https://asciiflow.com/)
* Applicazione online [Texttik](https://textik.com/)
* Sito web [Unicode](https://home.unicode.org/)
