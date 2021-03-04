type Recepie = {
  number: number|"???"
  title: string,
  ingredients: string[]
  instructions?: string,
  directions?: string
}

const recepies: Recepie[] = [
  {
    number: 7,
    title: "Crisp Lemon Calf Liver",
    ingredients: [
      "6 slices bacon",
      "1/2 lb calf liver",
      "1/4 cup flour",
      "3 tsp dried dill",
      "3 tbsp butter",
      "2 tbsp fresh lemon juice",
      "1 tbsp chopped parsley",
      "1 tbsp lemon zest",
      "1/2 tsp marjoram",
      "salt and pepper"
    ]
  },
  {
    number: 42,
    title: "Mutton Chops",
    ingredients: [
      "8 mutton chops",
      "2 cardamom pods",
      "1 tsp peppercorns",
      "2 ???at masala",
      "5 ????",
      "2 tbsp ginger paste",
      "3 tbsp gram flour",
      "1 tbsp lemon juice",
      "2 tbsp mustard",
      "salt and pepper"
    ],
    directions: "Beat the mutton chops with a hammer until they are softerned. Mix the raw papaya paste, ginger, garlic paste, salt and marinate the mutton chops in this mixture for an hour atleast.\nDry roast the gram flour in a pan till it gies out a nice aroma."
  },
  {
    number: 45,
    title: "Veal Piccata",
    ingredients: [
      "1 ??? scallops",
      "salt and pepper",
      "3 tsp olive oil",
      "3 cloves garlic",
      "1/? ??? white wine",
      "1/2 cup chicken broth",
      "3 tbsp capers",
      "1 lemon peeled",
      "2 tbsp butter",
      "4 tbsp parsley"
    ],
    directions: "Dust veal/chicken with flour. Season with salt and peper. Saute in oil until lightly browned. Remove meat from pan and keep warm. Add garlic, sautle 1 minute. Add broth and wine, bring to a boil. Reduce to 1/3 cup. Stir in capers and lemon slices. Return to boil and add butter."
  },
  {
    number: 49,
    title: "Pork Liver w. Bacon",
    ingredients: [
      "6 rashers of bacon",
      "3 large onions",
      "salt and pepper",
      "1/? ?? pork liver",
      "????",
      "1/2 cup flour",
      "2 tbsp butter",
      "1 tsp chili flakes",
      "1 tbsp mustard pouder",
      "Worcester's Sauce"
    ],
    directions: "In a 12-inch skillet, cook the bacon slices. This should take about 20 minutes. Remove bacon slices from skillet, and set aside, but do not drain off the bacon grease. To the bacon grease in skillet, add sliced ontions; season with salt and pepper. Cook onion slices over medium to medium-high heat."
  },
  {
    number: 74,
    title: "Braised Ox Cheeks w. Port",
    ingredients: [
      "2 ox cheeks",
      "2 tbsp olive oil",
      "3 carrots, diced",
      "1 leek, sliced thick",
      "1 onion, sliced",
      "1 cup port",
      "3 cups beef stock",
      "1/4 cup balsamic",
      "3 sprigs fresh rosemary",
      "salt and pepper"
    ]
  },
  {
    number: 97,
    title: "Beef Tongue w. Horseradish",
    ingredients: [
      "???"
    ]
  },
  {
    number: 121,
    title: "Heart Tartare",
    ingredients: [
      "???"
    ]
  },
  {
    number: 127,
    title: "Prosciutto Roses",
    ingredients: [
      "Very thinly sliced prosciutto",
      "2 tablespoons olive oil",
      "2 tablespoons white wine vinegar",
      "Squeeze of lemon juice",
      "Salt and ground pepper",
      "Parsley garnish"
    ],
    instructions: "Cut the prosciutto slices in half lengthwise. Starting from the short end, gently roll each slice, like a jelly-roll. The edge of the prosciutto with the strip of fat will be the top of each rose. Stand each roll upright."
  },
  {
    number: 127,
    title: "Chicken Liver Pate",
    ingredients: [
      "1/2 lb chicken livers",
      "1 small minced onion",
      "2 cloves minced garlic",
      "2 tbsp butter",
      "3 hard boiled eggs",
      "1 tbsp good brandy",
      "1/4 tsp ground cloves",
      "1/2 tsp ground mace",
      "1/2 tsp ground sage",
      "salt and pepper"
    ],
    directions: "Seperate livers from the gall bladders. Trim chicken livers of threads and gall and chop livers into 1 inch pieces. Fry onions and garlic in 250g butter until soft. Add the chicken liver pieces to the softerned onions and fry until the livers are firm but still pink inside."
  },
  {
    number: 129,
    title: "Osso Buco",
    ingredients: [
      "6 thick veal shanks",
      "1/2 cup flour for dredging",
      "1/4 cup olive oil",
      "3 tablespoon unsalted butter",
      "3 cup finely chopped onions",
      "1 cup finely chopped celery",
      "1 tablespoon dried oregano",
      "2 tablespoons tomato paste",
      "1 can plum tomatoes",
      "1 cup chicken broth",
      "1 large sprig thyme",
      "1 bay leaf",
      "salt and pepper",
      "1 arrowroot"
    ]
  },
  {
    number: 130,
    title: "Wagyu Beef",
    ingredients: [
      "???"
    ]
  },
  {
    number: 138,
    title: "Apricot Glazed Pork Loin",
    ingredients: [
      "3 large pork loin",
      "1 tsb salt",
      "1/4 tsp pepper",
      "1 cup apricot preserves",
      "1/? ?? sherry",
      "2 tbsp rosemary leaves",
      "2 garlic cloves, minced"
    ]
  },
  {
    number: "???",
    title: "Veal Osso Buco",
    ingredients: [
      "2 slices thick pancetta",
      "2 1/2 veal shanks",
      "1/4 cup olive oil",
      "1 cup diced carrot",
      "1/2 cup diced celery",
      "1 large diced onion",
      "5 garlic cloves mashed",
      "5 anchovy fillets",
      "5 tbsp capers",
      "salt and peper"
    ]
  },
  {
    number: "???",
    title: "Beef Consomme",
    ingredients: [
      "???"
    ]
  },
];
