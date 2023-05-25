---
layout: post
language: it
title: "Controllo hash da menu contestuale"
imgsrc: "/assets/images/misc/ScriptPowershell.png"
description: "Come automatizzare la verifica su Windows di un checksum di un file scaricato attraverso il menu contestuale utilizzando Powershell e modificando il registro."
keywords: "FOSS, Powershell, Hash, Checksum, Windows, Data Integrity, File, SHA-256"
tag: tech
---
Molti *publisher* di software **FOSS** offrono la possibilità di verificare l'integrità dei pacchetti software scaricati dai loro siti web. Questa è anche una comune pratica di **Data Integrity** adottata nell'Industria per garantire che un file non sia stato alterato dopo la sua *emissione* o *approvazione* formale.

Questa verifica è ottenuta con un meccanismo di *disaccoppiamento* delle sicurezze logiche o delle liste di accesso tra la posizione del **checksum** del file e quella del file stesso.

In questo scenario se un *malicious party* riuscisse ad assumere il controllo della posizione del file e riuscisse ad alterarlo, non avrebbe la possibilità di alterare anche il *checksum* o **hash** (in un'altra posizione e protetto con diverse credenziali) per farlo apparire *legittimo*; il controllo del *checksum*, in casi come questo, fallirebbe e darebbe all'utilizzatore un chiaro segnale di attenzione.

Non sono molto esperto di *Linux*, ma immagino che sia piuttosto semplice mettere in piedi un automatismo in grado di verificare il checksum dei file scaricati... quindi mi limiterò a suggerire una soluzione che possa funzionare comodamente su **Windows**.

Su Windows abbiamo a disposizione **Powershell** che ci può aiutare a risolvere il problema rapidamente. Il comando che utilizzeremo per ottenere il *checksum* di un file è il seguente:

```

get-filehash <filepath>

```

Ma utilizzato aprendo la console di Powershell e inserendo il nome del file manualmente non sembra particolarmente comodo; inoltre l'*output* del comando sarebbe una lunga stringa esadecimale che dovremo manualmente controllare carattere per carattere.

A questo punto sarebbe più utile e rapido automatizzare un po' di cose per facilitarci il compito, e lo faremo scrivendo uno script. Vogliamo passare come argomenti allo script sia il file da esaminare che il checksum da verificare. Se il risultato non fosse quello atteso vogliamo che lo script modifichi il file in modo da non consentirne l'apertura con applicazioni predefinite o anche l'esecuzione. Occorre osservare che si dovrà avere accesso al file in modifica.

```


# Vogliamo che lo script chieda l'hash da verificare
$targetHash = (Read-Host "Inserire l'hash SHA-256 per il file  $($Args[0])").ToUpper()

# Vogliamo che il primo argomento passato allo script sia
# intrerpretato come il percordo di un file da controllare
$actualHash = ([string] (Get-FileHash $Args[0]).hash).ToUpper()

# Controlliamo se i due hash corrispondono o meno
if (-not($targetHash -eq $actualHash)){

    # In questo caso NON corrispondono
    "L'hash fornito NON corrisponde a quello ricavato dal file."

    # Vogliamo che lo script ci chieda se vogliamo modificare
    # l'estensione del file chiamandolo ".check".
    # In questo modo non potremo aprire il file con una applicazione
    # di default né eseguirlo per errore.
    if ((Read-Host "Vuoi impedire l'apertura del file $($Args[0]) ?").ToUpper() -in ("S", "SI", "CERTO", "OK", "YES, "Y")){

       Rename-Item ($Args[0]) -NewName ($Args[0].check)

    }

} else {

    "L'hash fornito corrisponde a quello ricavato dal file."

}

# Questo codice è rilasciato sotto licenza Creative Commons Zero (CC0) 

```
A questo punto salviamo lo script con nome `checkhash.ps1` e siamo a posto.

## ... oppure no?

A qeusto punto dobbiamo sempre aprire la console di Powershell e chiamare lo script per l'esecuzione, e dunque siamo ancora lontani dalla desiderata semplicità d'uso. Non sarebbe molto più comodo se questo script fosse a disposizione sul menu contestuale del File Explorer e ottenesse automaticamente dal file selezionato il percorso da controllare?

Per ottenere questa *magia* apriamo il registro di Windows (regedit) e cerchiamo la chiave
`HKEY_CLASSES_ROOT\*\shell`

Questa chiave contiene i comandi disponibili dal menu contestuale quando è selezionato un file su File Explorer. È piuttosto semplice creare una sotto-chiave con il comando che vogliamo visualizzare e la *riga di comando* da eseguire. (`REG_SZ`) to an expandable string (`REG_EXPAND_SZ`).

...Ma facciamo un passo indietro e vediamo il processo passo per passo.

**Prima di tutto** dobbiamo creare una chiave per la voce di menu contestuale, più una sotto-chiave che contenga il comando vero e proprio

```

HKEY_CLASSES_ROOT\*\shell
                         \MyCustomKey
                                     \command

```

Nella chiave `MyCustomKey` il valore di defaul deve solo contenere la voce di menu; qualcosa del tipo:
```
Name: (Default)
Type: REG_SZ
Value: Check Hash SHA-256

```

Per questo abbiamo bisogno di creare un file *.reg* con queste istruzioni:
```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\CheckHash]
@="Check Hash SHA-256"

```

**In secondo luogo**, all'interno della sottochiave `command` dobbiamo inserire la riga di comando, adottando un trucco.

Creiamo semplicemente un nuovo valore come indicato:

```
Name: TEMP
Type: REG_EXPANDABLE_SZ
Value: "Powershell.exe" -file "<script path>\checkhash.ps1" "%1"

```
*Nota:* il parametro `"%"1` è quello che dice alla shell che il file selezionato allapertura del menu contestuale è quello che viene *passato* come argomento allo script.

Dal momento che non si può cambiare il *Value type* di un valore quando il suo tipo è un `REG_EXPANDABLE_SZ`, abbiamo bisogno di trovare un modo per farlo. Possiamo semplicemente esportare la chiave di registro appena creata e aprirla con un editor di testo. Troveremo qualcosa di simile:

```
[HKEY_CLASSES_ROOT\*\shell\CheckHash\command]
TEMP=hex(2):22,00,43,00,3a,00,5c,00,[e una lunga sequenza di valori esadecimali]

```

Semplicemente sostituiamo il nome `TEMP` con un carattere `@`, che indica sempre il valore di default della sotto-chiave `command`. Possiamo salvare il file e ricaricarlo sul registro senza toccare la lunga sequenza di cifre esadecimali.

## Ta-daan!

Seguendo questa sorta di *guida* che ho descritto potete aggiungere qualunque comando personalizzato al menu contestuale per svolgere i compiti più disparati. 

## Links

[https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash)
