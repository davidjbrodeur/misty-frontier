# Misty Frontier Ruleset

## What

A website to gather information on an old school RPG campaign based on the West Marches principle, old Warhammer Fantasy and Middle-Earth Battle Companies.

## Why

This is for a closed circle of people and hence why it is in french, our native language. It's meant to put all player rules easily accessible.

## How

HTML and CSS website with few JS (JQuery).

## TODO

- Pages (do them like this: https://oldschoolessentials.necroticgnome.com/srd/index.php/Main_Page):
  (also need to make "templates" as I go, and just load them with jquery. like stats sheet, etc.
  all put my data in a huge json object that i'll put in an empty "data.js" where I'll only have "data = {json}")
  - Exploration rules
  - Combat rules
  - Downtime
    - What can be recruited, how to recruit, etc.
- Make sure everything is hyperlinked and with definitions
- Hidden pages (DM pages for now):
  - Create the "hidden page" tricks (aka a small invisible button + password to get access)
  - Additional rules:
    - Magic item level-up
    - AER/fiefdom rules
    - Boats/etc. rules
  - Campaign (Gygax73 challenge + demon souls + all my best hexes and dungeon ideas)
  - Tables & generators
    - Magic items
    - Monster/Human/Npc reactions
    - Random encounters per hex type
    - Random encounters per dungeon type
    - 5RD generator
    - NPC generator (personality trait x1, physical trait x1, one thing known about him, one goal, one secret)
    - Traps
    - Events
    - Echo Resounding tables to generate places, peoples, etc.
    - Downtime rules
  - Monsters & characters stats (see Middle Earth Strategy)
  - Campaign notes
    - Characters
    - Events, timeline, macro info
    - Echo Resounding notes on locations, hexes, etc.
  - DM checklist/prep for games
- Write down final notes on the world
- Put it on world anvil
- Gygax challenge
- Landing page fluff
- Enlever les lignes rouges
- Gitpage
- Envoyer aux joueurs

## TIPS

<dfn title="Un domaine est un territoire appartenant à un seigneur">Domaines</dfn>

## Campaign notes

- Maybe make a hexflower career path?
- Maybe have the starting area be keep on the borderland?

## Notes

- Have the duel rules include more complex stuff and the normal combat rules only include normal weapons
  Duel
  the most attack : attack first
  win = morale check
  can force people into duel with might dice

  - Mettre un disease generator basé sur mon H&C. Inclure les notes de curses.
  - Checker les drugs et cie de Mordheim

  Parry = tu roll over le A de l'adversaire

- Magic weapon automatically have their weapon special ability below + something else as per the weapon:
<p>
          Les armes sont utilisées en combat pour modifier les attributs du
          personnage, par exemple la <strong>S</strong> ou les
          <strong>A</strong>. Les armes fonctionnent avec des “tags”. Chaque
          “tag” donne une habileté spéciale (mais facultative) à l’arme, sauf
          exception.
        </p>
        <ul>
          <li>
            <strong>Polearm</strong> : Si le personnage utilise l’action de
            combat HOLD et qu’il est chargé, il frappe en premier avec un bonus
            de +1 F/S. Si la cible est de la cavalerie, elle doit faire un jet
            de maintien en sel.
          </li>
          <li>
            <strong>Two-Handed</strong> : Il est possible de réduire le nombre
            d’attaque de moitié (arrondi inférieur) pour avoir +1d3 S lors du
            To-Wound. On ne peut avoir rien dans la seconde main (torche,
            bouclier, etc.).
          </li>
          <li>
            <strong>Quick</strong>: Il est possible d’avoir +1d2 A en diminuant
            le S de 1.
          </li>
          <li>
            <strong>Impact</strong> : Il est possible de volontairement frapper
            en dernier pour diminuer de 1 la T de l’attaquant et du défendant.
            Si la cible est plus petite que l’attaquant, elle doit faire un jet
            de S ou être jeté Prone.
          </li>
          <li>
            <strong>Reload(X)</strong>: L’arme ne peut tirer qu’une fois par
            tour et ne peut tirer en se déplaçant. Le X indique la force avec
            laquelle cette arme attaque.
          </li>
          <li>
            <strong>Improvised</strong>: Les armes improvisées/roturières ne
            peuvent attaquer qu'une fois par tour.
          </li>
          <li>
            <strong>Thrown</strong>: Ces armes peuvent être aussi utilisées au
            tir mais sont lancées et retirées du personnage jusqu’à la fin du
            combat.
          </li>
          <li>
            <strong>Heavy</strong>: +1 S en mêlée avec cette arme si le
            personnage possède 4 ou plus en S.
          </li>
          <li>
            <strong>Small</strong>: Peut être dissimulé sans problème et ne
            compte pas dans le nombre total d’armes possédées sur le personnage.
          </li>
          <li>
            <strong>Feint</strong>: On réduit le F de 1d3, mais les jets
            To-Wound ratés peuvent être reroll
          </li>
          <li>
            <strong>Shield</strong> : Améliore l'armure (<strong>T</strong>)
          </li>
        </ul>
