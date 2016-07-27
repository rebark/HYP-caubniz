# HYP Project 2015-2016
**Website**: [caubniz2.altervista.org](http://caubniz2.altervista.org/)

**Group:** Beretta Carolina, Costantini Lorenzo, Dell'Orto Alessandro

**Framework:** Bootstrap

**Template:** none

The P-IDM schema pdf contains only the P-IDM schema of the design project with the explanation of the new symbols we introduced (as required by the technology project specification). For a more detailed explanation of the design decision and the C-IDM and L-IDM see the ppt file delivered on Beep.

## Design
La cartella design contiene la consegna della prima parte del progetto:
+ il file html generato da pencil funziona se aperto con firefox o Edge (mentre non visualizza le immagini in Chrome)
+ il file di pencil quando aperto per la prima volta apre un progetto vuoto, per visualizzarlo bisogna andare in document-->open e selezionare il file del progetto



## Changes and improvements from Design Project

+ We implemented clickable breadcrumbs, eliminating the "go back to category" links that were displayed in the mock up. We also handled the go back link dynamically, so that they adapt to the user navigation.

+ We have implemented the FAQs also for the "Smartphone and Tablet for TIMvision" assistance service page, with respect to the mockup version of the page which had only the description section.

+ The categories which didn't have any implemented SL, Assistance Services or Devices reachable from that page, were kept as non clickable in the final implementation (e.g. Assistance Services -> Line Management).

+ In the P-IDM diagram, we interpreted Description and FAQs of Assistance Services as separated pages even if they are loaded at the same time when the user access to the page. We took this decision because visually, from the user perspective, they can be considered different pages and also, by making this choice, we could specify in the diagram that the entry point marker goes to the description section and that the outgoing link to the corresponding device is clickable only in the description page.
