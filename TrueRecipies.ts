type RecepieConfig = {
  number: number
  title: string
  description?: string
  ingredients: string[]
  directions?: string[]
}

const trueRecepies: RecepieConfig[] = [
  {
    number: 7,
    title: 'Crisp Lemon Calf Liver',
    ingredients: [
      '6 slices bacon',
      '1/2 lb calf liver',
      '1/4 cup flour',
      '2 tsp dried dill',
      '3 tbsp butter',
      '2 tbsp fresh lemon juice',
      '1 tbsp chopped parsley',
      '1 tbsp lemon zest',
      '1/2 tsp marjoram',
      'salt and pepper'
    ]
  },
  {
    number: 127,
    title: 'Chicken Liver Pate',
    ingredients: [
      '1/2 lb chicken livers',
      '1 small minced onion',
      '2 cloves minced garlic',
      '2 tbsp butter',
      '3 hard boiled egg',
      '1 tbsp good brandy',
      '1/4 tsp ground cloves',
      '1/2 tsp ground mace',
      '1/2 tsp ground sage',
      'salt and pepper'
    ]
  },
  {
    number: 129,
    title: 'Osso Buco',
    ingredients: [
      '6 thick veal shanks',
      '1/2 cup flour for dredging',
      'salt and pepper',
      '2 tbsp olive oil',
      
      '1 cup finely chopped onions',
      '1 cup finely chopped carrots',
      '1 cup finely chopped celery',
      '1/2 cup finely chopped parsnips',
      '2 tbsp unsalted butter',
      
      '1 cup chicken broth',
      '1 cup red wine',
      '1 1/2 can plum tomatoes',

      '1 tbsp dried oregano',
      '1 large sprig rosemary',
      '1 bay leaf'
    ],
    directions: [
      'Dredge veal pieces with flour and sprinkle with salt and pepper.',
      'In a large Dutch oven or heavy lidded casserole, heat olive oil over medium-high heat then add veal pieces, sautéing on all sides til brown. Remove veal pieces to a bowl and set aside.',
      'Add onions, carrots, celery and butter to Dutch oven and sauté, stirring over medium heat until lightly browned.',
      'Deglaze the Dutch oven by adding stock and scraping up all the browned bits from the bottom of the pan, then add wine, tomatoes, oregano, rosemary and bay leaf.',
      'Return veal shanks to the Dutch oven, cover and bake at 180°C (350°F) for 1 hour then reduce to 140°C (275°F) and bake for another 2 to 3 hours or until very tender.',
      'Garnish with chopped parsley and lemon zest and serve with risotto.  Serves 4.'
    ]
  },
  {
    number: 138,
    title: 'Apricot Glazed Pork Loin',
    ingredients: [
      '3 lb pork loin',
      '1 tsp. salt',
      '1/4 tsp pepper',
      '1 cup apricot preserves',
      '1/? ??? dry sherry',
      '2 tbsp rosemary leaves',
      '2 garlic cloves, minced'
    ]
  },
  {
    number: -1,
    title: 'Salt-baked Snapper',
    description: 'Serves two with roasted mixed vegetables and aioli or hollandaise sauce.',
    ingredients: [
      '3 lbs. sea salt',
      '1 egg white',
      '1 tbsp water',
      '1 tsp fennel seed',
      
      '3 lb snapper, gutted, gills removed',
      'herb sprigs (rosemary, thyme, parsley)',
      '2 thick lemon slices',
      '4 tsp olive oil'
    ],
    directions: [
      'Preheat oven to 400.',
      'In a medium sized mixing bowl, whisk egg white til frothy with a fork. Add water and whisk til combined. Add salt all at once and fennel seeds. Mix thoroughly til all the salt is damp and clingy  -- like sand when you are making a sand castle. To test consistency, take a couple tablespoonsful in your palm and make a fist, crushing salt together. When you open your hand, salt should hold together in a ball. If not, froth another egg white with water and add a bit at a time to the salt mixture until it holds together. Don’t add too much or it will be a struggle to crack the salt shell once it’s baked. Set aside.',
      'Line a baking sheet with a sheet of baking parchment and place about ½ cup of salt mixture in the middle. Spread out to the approximate length and width of your fish. Tamp down to a thickness of about ½ inch. Rub fish with olive oil and place on top of the salt. Stuff cavity with lemon slices and herbs. Spoon the rest of the salt mixture on top and sides, pressing over the fish so the fish is completely encased in a ½-inch layer of salt.',
      'Roast for 20 - 25 minutes. Remove from oven and rest for 5 minutes. To serve, transfer to a wooden cutting board and serve.',
      'To serve: At the table, crack the salt shell by tapping with a mallet then carefully remove the salt shards, brushing salt bits away from the fish or they will make the fish too salty. Pull away the top layer of skin, using a sharp thin knife to detach the skin from the gill, fins, and tail. Using a wide fork, lift the meat off the bones and serve onto individual plates. When the top side has been served, remove the bone by lifting the head up and away toward the tail. All the small bones will come away with the spine. Remove the fin bones and serve the bottom half of the fish meat, leaving the skin on the salt crust. Have a martini. You’ve earned it.'
    ]
  },
  {
    number: -1,
    title: 'Hangtown Fry',
    ingredients: [
      '3 eggs',
      '3 tbsp cream',
      '1/4 cup water',
      '3 to 5 raw oysters, shucked',
      '1/2 cup breadcrumbs',
      '1/4 cup flour',
      '6 Tbsp butter',
      '2 thick slices pancetta bacon, fried',
      'salt, pepper'
    ],
    directions: [
      'In a small mixing bowl, beat eggs and cream together. Remove all but 2 Tbsp to another bowl and set aside while you fry the oysters.',
      'In the first bowl, add ¼ cup water to the 2 Tbsp egg mixture and beat together.',
      'Spread breadcrumbs on a plate and flour on another plate.',
      'Dip each oyster into flour, then egg water, then breadcrumbs to coat evenly.',
      'In a skillet over medium-high heat, melt 2 Tbsp of butter and fry oysters just until golden brown. Do not cook all the way through. Set aside.',
      'Wipe skillet clean with paper towel and place over medium heat. Add butter. When butter is bubbling, add beaten eggs from 2nd bowl. Season with salt and pepper to taste. Scramble gently and before egg is completely cooked, add oysters. Continue to scramble gently and when eggs are fully cooked, turn out onto plate. Garnish with bacon slices and enjoy!'
    ]
  },
  {
    number: -1,
    title: 'Chick n Cheese Frittata',
    ingredients: [
      '6 eggs',
      '¼ cup cream',
      '¼ tsp salt, pepper to taste',
      '1 tsp butter',
      '1 large cooked potato, in 1/8-inch slices',
      '½  medium onion, in ¼-inch slices, pan-fried until translucent',
      '½ cup cooked chicken in ½-inch dice',
      '½ cup peas',
      '½ cup diced bell peppers',
      '2 oz cheese thinly sliced'
    ],
    directions: [
      'In a small mixing bowl, beat eggs with cream, salt and pepper.',
      'Over medium heat, melt butter in omelette pan. When butter is bubbling and beginning to brown, pour in a third of the beaten egg to cover bottom of pan. In a single layer, add a third of the potato slices and sprinkle in a third of the chicken, a third of  onions and a third of the cheese. Repeat twice.',
      'Continue cooking over medium heat until egg has mostly set then place under broiler to finish cooking egg and melting cheese. Brown the top.',
      'Cut into wedges and serve with a salad. If you have any left over, this is also great eaten right out of the fridge.'
    ]
  },
  {
    number: -1,
    title: 'Chick n Cheese Frittata',
    ingredients: [
      '6 eggs',
      '¼ cup cream',
      '¼ tsp salt, pepper to taste',
      '1 tsp butter',
      '1 large cooked potato, in 1/8-inch slices',
      '½  medium onion, in ¼-inch slices, pan-fried until translucent',
      '½ cup cooked chicken in ½-inch dice',
      '½ cup peas',
      '½ cup diced bell peppers',
      '2 oz cheese thinly sliced'
    ],
    directions: [
      'In a small mixing bowl, beat eggs with cream, salt and pepper.',
      'Over medium heat, melt butter in omelette pan. When butter is bubbling and beginning to brown, pour in a third of the beaten egg to cover bottom of pan. In a single layer, add a third of the potato slices and sprinkle in a third of the chicken, a third of  onions and a third of the cheese. Repeat twice.',
      'Continue cooking over medium heat until egg has mostly set then place under broiler to finish cooking egg and melting cheese. Brown the top.',
      'Cut into wedges and serve with a salad. If you have any left over, this is also great eaten right out of the fridge.'
    ]
  },
];