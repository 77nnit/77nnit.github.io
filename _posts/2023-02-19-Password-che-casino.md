---
layout: post
language: it
title: "Password: che casino!"
imgsrc: "/assets/images/misc/DALL-E 2023-02-19 11.23.18.png"
description: "Considerazioni etiche sulla natura delle password e sul trend emergente dell'autenticazione passwordless"
keywords: "Password, credenziali, autenticazione, Passwordless, Privacy, Ethics"
tag: ethics
---
Questo articolo non parte da premesse tecniche né prende in esame analisi comportamentali. Sono per lo più considerazioni - oso dire - etico/filosofiche sulla natura di ciò che protegge le nostre informazioni personali, nel momento in cui le affidiamo a servizi online.

Le nostre informazioni personali sono preziose. E non parlo delle informazioni cosiddette "sensibili", ancor più preziose, bensì anche solo delle informazioni di base, come nome e cognome.
Con il nostro nome e cognome, ad esempio, siamo riconosciuti sui social network, dove altre persone utilizzano queste "credenziali" per fidarsi di noi e comunicarci a loro volta altre informazioni personali. Non c'è modo di sapere se i destinatari delle comunicazioni sono effettivamente quelli che entrambe le parti si aspettano, ma grazie ad altri segnali (indirizzo email, numero di telefono, città di residenza, scuola frequentata, anno di nascita) siamo più o meno in grado di individuare con un buon grado di confidenza se quel "Mario Rossi" nel mezzo ad un elenco lunghissimo è davvero il nostro compagno di classe delle scuole medie o no. Ecco, abbiamo già elencato una serie di informazioni grazie a cui un esperto di social engineering potrebbe guadagnare la nostra fiducia e indurci a fornirgli molte altre informazioni. Non allo scopo di truffare noi in prima persona, ma magari per arrivare ad un'altra persona che costituisca per il social engineer il bersaglio finale.

<figure>
<img src="{{ page.imgsrc }}" alt="Victorian painting of an englishman typing a long password on a screen - AI Generated image"/>
<figcaption>Raro dipinto di epoca vittoriana di uomo che inserisce una password su uno schermo - Immagine generata da IA</figcaption>
</figure>

La protezione dei nostri profili social, o di quelli ben più critici dei servizi online (home banking, cassetto fiscale o cartella sanitaria elettronica, per citarne alcuni tra i più noti e utilizzati) da manomissione, accesso fraudolento o furto di identità, rappresenta uno sforzo che dobbiamo tutti sostenere per ridurre il rischio di truffe online rivolte verso di noi o verso nostri cari.

In generale tutti gli account di cui disponiamo sono protetti da un meccanismo di autenticazione semplice, come le **password**, che altro non sono che "combinazioni" di casseforti più o meno difficili da scassinare. Laddove le informazioni contenute nei servizi sono via via più importanti, si aggiungono strati ulteriori di sicurezze, facendo assumere al tutto il nome di **multi-factor authentication**. Alla password, che è *qualcosa che sai*, si aggiungono fattori fisici (come una smartcard o una chiave hardware - *qualcosa che hai*) o biometrici (*qualcosa che sei*).

L'accesso ai nostri dati personali può dunque essere protetto in modo progressivo da strati di sicurezze eterogenee che è difficile compromettere nello stesso momento.

Ricordo che qualche anno fa fece scalpore un caso di cronaca negli Stati Uniti, quando le autorità chiesero al produttore dello smartphone di un imputato (deceduto) di bypassare il codice personale che proteggeva il suo telefono per accedere ai dati contenuti nella memoria. La casa madre si rifiutò (probabilmente non per incapacità, ma per opportunità pubblicitaria) e i dati, protetti da una semplice password, non poterono essere utilizzati.

Questo episodio mi portò, e tutt'ora mi porta, a riflettere sulla **legittimità** di una tale richiesta. Credo di essere propenso verso l'illegittimità di una tale forma di coercizione, partendo dal presupposto che nessuno può legittimamente pretendere che una qualunque persona, criminale o meno, esponga il proprio pensiero più intimo, le proprie motivazioni, i propri giudizi. Fermo restando il *diritto* di esprimere tutti questi contenuti nei modi e nelle forme desiderate, non lo si può imporre. Ed accedere ad un dispositivo in grado di contenere le chiavi di lettura di questi contenuti privati e personali rappresenta per me il medesimo abuso.

Questo discorso serve come ponte per affrontare un trend che sento ricorrere sempre pià spesso nei *talks* tecnologici, ovvero l'avvento dell'autenticazione **passwordless**.

Passwordless, significa "senza password". Qualunque sia l'implementazione tecnica, utilizzando questa forma di autenticazione non si è tenuti ad inserire una password per poter accedere alle informazioni contenute nei "vault".

Il motivo ufficiale di tali implementazioni è semplice: ricordare numerose password di buona complessità è un compito pressoché impossibile per cervelli normodotati, pertanto utilizzando una qualche meccanica ibrida tra dispositivi e dongle (fisici e/o biometrici) si ritiene non migliorativo l'utilizzo di una password. Questo metterebbe ordine e darebbe più tranquillità a chi fa un uso disordinato di credenziali e password, e il mercato premia chi conta di risolvere questo disagio.

È possibile che studi statistici suggeriscano che la complessità media delle password è così bassa che non aggiunga alcun grado di complessità crittografica alla sicurezza alle altre componenti; non posso né voglio confutare questi studi, ma non è di complessità crittografica che stiamo parlando: sappiamo tutti che non esiste un grado di complessità così alto da non poter essere compromesso con il dovuto tempo e le dovute risorse a disposizione. Parliamo invece di possibilità di accesso istantaneo (ed economico) a tali informazioni senza la componente volontaria del legittimo proprietario di tali informazioni.

Le password, per quanto rappresentino l'antico concetto della "combinazione", sono in ogni caso l'unico metodo di autenticazione che, a mio avviso, esprime una **VOLONTÀ** di utilizzare una chiave che si possiede *solo nella propria mente*. La chiave fisica esprime invece il *POSSESSO* (ma non necessariamente la *PROPRIETÀ*) del mezzo per accedere, mentre il biometrico esprime la *PRESENZA* di fronte alla serratura (o, analogamente, la *COERCIZIONE* fisica di fronte alla serratura). La mancanza però della sola password tra questi tre meccanismi è qualcosa di molto pericoloso, perché prescinde dalla manifestazione di volontà.

Si può obiettare che anche l'espressione della password può essere forzata da circostanze più o meno legittime (come la prospettiva di una imputazione, o una minaccia alla sicurezza fisica propria o dei propri cari), ma **rappresenta comunque una SCELTA** per l'individuo. Non avere più l'autorità su questa scelta **rappresenta invece una delega alla sicurezza** che si affida alla buona fede, all'indipendenza, all'incorruttibilità e al rispetto delle condizioni di contratto di qualcun altro.

Con questo non voglio dire che non ci siano *use case* in cui sia una pratica più che accettabile, in base alla natura o alla criticità delle informazioni protette. È però necessario che sia presente la consapevolezza di una tale delega e dei suoi limiti.

Piuttosto che investire in sistemi di "minor tutela" io procederei invece in senso opposto, verso sistemi che implementino *duress code* o meccanismi di **deniable encryption**: rendere più solido il meccanismo della manifestazione di volontà anziché renderlo quasi del tutto superfluo.

Vedremo se il mercato deciderà di premiare (come penso accadrà, dietro anche la forte spinta di numerose autorità nazionali non democratiche, e anche di qualche c.d. *grande democrazia*) la *passwordlessness* oppure no, ma credo che sia comunque una buona idea dotarsi di un buon password manager e imparare ad utilizzarlo nel suo pieno potenziale (a tal proposito consiglio [BitWarden](https://bitwarden.com/) o una sua istanza pubblica come [VaultWarden](https://vaultwarden.devol.it)).

