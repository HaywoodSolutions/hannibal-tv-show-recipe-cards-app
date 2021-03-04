type RecepieDescription = {
  number: number
  title: string
  description?: string
  ingredients: string[]
  directions?: string[],
  season: number
  episode: number
}


const showRecepies: RecepieDescription[] = [
  {
    number: 1,
    title: 'Protein Scramble',
    description: 'Something to start the day',
    ingredients: [
      '3 medium sized eggs',
      '2 sausage',
      'Pinch of parsley',
      '1/4 fresh tomato off the vine',
      '1 onion',
      'Minced garlic',
      'Salt and pepper'
    ],
    directions: [
      'Cook the sausages',
      'Brown the onions and garlic in virgin olive oil at a low heat',
      'Whish the eggs together in a bowl with salt and pepper',
      'Place eggs into pan with onions and garlic, keep stiring until looked all way though',
      'Cut the sausages into thirds, then cut tomato into wedges',
      'Place into bowl and ready to serve with a bit of parsley'
    ],
    season: 1,
    episode: 1
  },
  {
    number: 2,
    title: 'Amuse-Bouche',
    description: 'Pork loin with Cumberland Sauce of red fruits',
    ingredients: [
      '1 thinly sliced pork lion',
      '1 orange',
      'Cup white sugar, granulated',
      '1 cup cold water',
      '1/2 cup homemade or storebought red currant jelly',
      '2 tbsp ruby port',
      '1 cinnamon stick'
    ],
    directions: [
      'Fill a small saucepan with the cold water.',
      'Using a sturdy peeler, remove the peel of the orange and lemon in strips about an inch long. You’ll want to trim off any white pith on the underside of the peel.',
      'Do that by placing one strip of peel at a time inside-up on a cutting board. Shave off all white parts using a sharp paring knife. Discard the white and place the cleaned peel in the cold water.',
      'Once all the peel has been cleaned of pith, cut it into strips as thin as a sheet of paper. Place them back into the cold water. Now to remove the bitterness.',
      'Add the sugar and place over a high heat. When it comes to a boil, strain the mixture, and reserve the peel.',
      'Place the red currant jelly, ruby port and cinnamon stick in a small saucepan over a medium heat. Whisk regularly until the mixture starts to simmer. Add the lemon and orange zest and turn off the heat.',
      'Cool the finished sauce. Serve chilled with cold cuts, cheeses or pork loin.'
    ],
    season: 1,
    episode: 2
  },
  {
    number: 3,
    title: 'Œuf',
    description: 'Boudin Noir (a traditional French blood sausage)',
    ingredients: [
      '4 blood sausages',
      '1 tablespoon sweet butter',
      '2 tablespoons vegetable oil',
      '1/3 cup Calvados',
      '3/4 cup heavy cream',
      '2 large or 3 medium apples, sliced',
      'Dash of nutmeg',
      'Salt and pepper to taste'
    ],
    directions: [
      "Preheat oven to 250 degrees.",
      'Prick sausages in several spots with sharp knife. Saute over medium-low heat in butter and oil 5 to 8 minutes, turning occasionally to brown all over. Remove from pan and place on dish in oven while preparing sauce (boudin sausage has fragile skin that will burst over high heat and loose stuffing).',
      'Skim excess fat from pan, turn heat to high and deglaze pan with Calvados. Let Calvados boil for 30 seconds, then add apples. Cook apples for a minute. Add cream and seasonings. Reduce cream by half. Serve over or next to warm sausages.'
    ],
    season: 1,
    episode: 4
  },
  {
    number: 4,
    title: 'Coquilles',
    description: '"Foie gras au torchon" with a late harvest of vidal sauce with dried and fresh figs',
    ingredients: [
      '4 blood sausages',
      '1 tablespoon sweet butter',
      '2 tablespoons vegetable oil',
      '1/3 cup Calvados',
      '3/4 cup heavy cream',
      '2 large or 3 medium apples, sliced',
      'Dash of nutmeg',
      'Salt and pepper to taste'
    ],
    directions: [
      "Preheat oven to 250 degrees.",
      'Prick sausages in several spots with sharp knife. Saute over medium-low heat in butter and oil 5 to 8 minutes, turning occasionally to brown all over. Remove from pan and place on dish in oven while preparing sauce (boudin sausage has fragile skin that will burst over high heat and loose stuffing).',
      'Skim excess fat from pan, turn heat to high and deglaze pan with Calvados. Let Calvados boil for 30 seconds, then add apples. Cook apples for a minute. Add cream and seasonings. Reduce cream by half. Serve over or next to warm sausages.'
    ],
    season: 1,
    episode: 4
  }
];