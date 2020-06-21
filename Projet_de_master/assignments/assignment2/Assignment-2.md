# Module 3 Coding Assignment


Woo-hoo! Vous pouvez faire du codage! Passionnant!

** Temps pour terminer: ** 1-2 heures. Cela peut vous prendre moins de temps que cela si vous avez bien absorbé le matériau de ce module.

** Posez des questions dans les discussions si vous êtes coincé! Nous apprenons tous, et le fait de rester coincé puis décollé (même avec l'aide de quelqu'un) peut être une expérience d'apprentissage très précieuse! **

** Ne soyez pas effrayé par le nombre de points ci-dessous. Ce n'est vraiment pas tellement. Je voulais juste tout expliquer aussi clairement que possible et le décomposer en étapes plus petites. **

Voici ce dont vous aurez besoin pour terminer la mission:

1. (Si vous ne l'avez pas déjà fait) Créez un compte GitHub.com et un référentiel que vous utiliserez pour cette classe.

2. (Si vous ne l'avez pas déjà fait) Suivez les instructions de la vidéo de configuration du développement (début du module 1) sur la façon de créer un référentiel et de le configurer de sorte que vous puissiez héberger et afficher vos pages Web finies sur GitHub Pages, c'est-à-dire GitHub Nom de domaine .io. Vous devrez fournir cette URL pour votre évaluation par les pairs.

3. Créez un dossier dans votre référentiel qui servira de dossier de conteneur pour votre solution à cette affectation. Tu peux appeler ça comme tu le veux. Par exemple, `module2-solution` ou` mod2_solution`, etc. Créez un fichier `index.html` dans le dossier du conteneur de solution, par exemple,` module2-solution / index.html`.

4. L'implémentation de la page que vous allez créer doit suivre les illustrations de maquette ci-dessous. Vous disposez de 3 maquettes: ordinateur de bureau, tablette et mobile. Votre implémentation doit être JUSTE 1 page, PAS 3 pages. En d'autres termes, vous allez créer une page unique et réactive.

5. Votre page doit inclure un fichier CSS. Aucun style en ligne autorisé. Votre fichier CSS doit être placé dans un dossier `css` sous le dossier du conteneur de solution, par exemple,` module2-solution / css`.

6. Vous n'êtes PAS autorisé à utiliser un framework CSS (ou Javascript) pour cette mission, y compris Twitter Bootstrap CSS Framework. Aucun fichier CSS de framework ne doit même être référencé dans votre index.html, même si vous ne les utilisez pas. ** Cependant, vous POUVEZ utiliser le cadre réactif simple que nous avons développé dans la leçon 24 comme point de départ pour cette tâche. **

7. Vous devez implémenter les points d'arrêt suivants qui seront considérés comme des ordinateurs de bureau, des tablettes et des mobiles. Le navigateur doit afficher une version de bureau du site lorsque la largeur de la fenêtre du navigateur est de 992 pixels et plus. La vue tablette ne doit apparaître que si la largeur de la fenêtre du navigateur est comprise entre 768 pixels et 991 pixels, inclusivement. La vue mobile ne doit apparaître que si la largeur du navigateur est égale ou inférieure à 767 px.

8. Votre site est très simple. Il se compose d'un en-tête de page et de 3 sections (le tout sur une seule ligne dans la vue du bureau). Chaque section contient du texte. Vous pouvez faire du texte factice / "lorem ipsum", cela n'a pas d'importance. La disposition des sections à l'écran dépend de la largeur de la fenêtre du navigateur. (_Conseil: utilisez les requêtes des médias abordées dans la leçon 23._)

9. Disposition: dans la vue du bureau (992 pixels et plus), chacune des 3 sections doit occuper un espace égal à l'écran. Lorsque vous agrandissez ou rétrécissez la fenêtre du navigateur, chaque section doit devenir plus large ou plus étroite. (_Conseil: utilisez des pourcentages pour définir la largeur et utilisez la propriété 'float'. Voir la leçon 24_). Pour une référence visuelle de cette vue, voir l'illustration de la maquette du bureau ci-dessous.

10. Disposition: Dans la vue de la tablette (entre 768 px et 991 px, inclusivement), les 2 premières sections doivent être dans la première ligne et être de taille égale. La 3ème section doit être dans la deuxième rangée et occuper toute la rangée seule. Pour une référence visuelle de cette vue, voir l'illustration de la maquette de la tablette ci-dessous.

11. Disposition: dans la vue mobile (égale ou inférieure à 767 px), chaque section doit occuper la ligne entière. Pour une référence visuelle de cette vue, voir l'illustration de la maquette mobile ci-dessous.

12. Région de titre de section: Chaque section doit avoir une région de titre de section qui est toujours positionnée dans le coin supérieur droit de la section, quelle que soit la vue (bureau, tablette ou mobile). Copiez les titres de l'illustration maquette (c.-à-d. Poulet, boeuf, sushi) ou créez le vôtre. (_Conseil: utilisez le positionnement et les décalages relatifs et absolus comme indiqué dans la leçon 22._)

13. Espacement: Faites attention à l'espacement indiqué dans les illustrations de la maquette. Notez l'espacement entre les sections (horizontales et verticales). Notez l'espacement horizontal entre les bords de la section et les bords de la fenêtre du navigateur. Notez également l'espacement entre le texte factice dans chaque section et les bords de la section. Enfin, assurez-vous que le texte factice est suffisamment "poussé" pour qu'il ne chevauche pas la région du titre de la section. (_Conseil: utilisez les marges et le remplissage et utilisez border-box comme dimensionnement de la boîte, comme indiqué dans la leçon 19._)

14. Bordures et couleurs: Chaque section doit avoir une couleur d'arrière-plan définie sur une certaine couleur (de votre choix). Définissez la couleur d'arrière-plan de chaque région de titre de section sur une couleur unique (de votre choix). Assurez-vous que la couleur d'arrière-plan permet toujours à l'utilisateur d'afficher le texte dans les régions de section et de titre de section. Selon la couleur que vous choisissez, vous souhaiterez peut-être changer la couleur du texte afin qu'il soit facile à lire. Définissez une bordure noire sur la section et la région de titre de section d'une épaisseur de 1 px. ** Avertissement: bien que le fait de ne pas spécifier de bordures et de couleurs selon les exigences ne nuise pas tellement à votre note, ne pas le faire rendra la tâche de vos pairs beaucoup plus difficile à évaluer par pairs pour le reste de votre devoir, ce qui pourrait entraîner une note beaucoup plus faible. **

15. (FACULTATIF) _Vous ne serez PAS noté sur ce_, mais vous voudrez peut-être définir explicitement une famille de polices pour le texte de votre page, afin que vous ne soyez pas bloqué avec la famille de polices par défaut du navigateur. En outre, définissez la taille de police de l'en-tête et du titre de la section à 75% plus grande et 25% plus grande (respectivement) que la taille de police du texte factice.

Voici l'illustration maquette de la version bureau du site. Votre résultat final devrait être très proche de cette maquette.

 ! [bureau] (images / desktop.png)

Voici l'illustration maquette de la version tablette du site. Votre résultat final devrait être très proche de cette maquette. Notez que dans cette vue, la 3e section occupe la ligne entière.

 ! [tablette] (images / tablet.png)

Voici l'illustration maquette de la version mobile du site. Votre résultat final devrait être très proche de cette maquette.

 ! [mobile] (images / mobile.png)