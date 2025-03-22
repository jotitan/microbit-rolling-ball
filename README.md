# Bille sur un plateau

L'objectif du projet est d'afficher une petite bille qui se déplace sur le plateau en fonction de l'inclinaison.

## Fonctionnement

Quand on incline la carte, le point qui est affiché suit l'angle de la carte.

## Les entrées

La carte de plusieurs capteurs : thermomètre, boussole, inclinaison.
La fonction *input.rotation* permet de récupérer l'inclinaison de la carte : 
``` javascript
input.rotation(Rotation.Roll) // Angle de l'inclinaison gauche / droite
input.rotation(Rotation.Pitch) // Angle de l'inclinaison haut / bas
```

## Etapes

* Créer une classe point (x, y) pour simplifier la suite
* La fonction forever est une boucle "while", écrire le code dedans
* A chaque tour, récupérer l'inclinaison haut / bas et gauche / droite
* Convertissez ces angles pour les afficher sur la matrice 5x5 en considérant le point du milieu (2,2) comme la position "à plat sur une table".
* ⚠️ N'oubliez pas d'éteindre une led avant d'en rallumer une
* Vous allez devoir définir des bornes au dela desquelles l'inclinaison a une limite, comme des bords sur la carte
* Vous pouvez améliorer votre code en modifiant la valeur de ces bornes à la volée (l'augmenter avec B, le diminuer avec A)

## Aide
* Pour allumer un point : 
``` javascript
led.plot(x,y);
```
* Pour éteindre un point : 
``` javascript
led.unplot(x,y);
```
