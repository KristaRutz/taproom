import { v4 } from "uuid";

const kegList = [
  {
    itemName: "Superfuzz",
    type: "Blood Orange Pale Ale",
    desc:
      "Is a mind-bending whirl of the aromas and flavors of blood orange and Northwest hops. Orange peel added to the whirlpool, and Blood Orange in the fermenter.",
    origin: "Seattle, WA, USA",
    brewer: "Elysian Brewing",
    price: 189,
    pintsRemaining: 124,
    abv: 6.4,
    ibu: 45,
    created: new Date(),
    lastUpdated: new Date(),
    id: v4(),
  },
  {
    itemName: "Manny's",
    type: "Pale Ale",
    desc:
      "A careful selection of Northwest hops, premium barley, and our unique yeast give this ale a rich and complex malty middle with a snappy hop finish. Crisp, clean and smooth with hints of citrus and fruit.",
    origin: "Seattle, WA, USA",
    brewer: "Georgetown Brewing Co.",
    price: 169,
    pintsRemaining: 124,
    abv: 5.4,
    ibu: 38,
    created: new Date(),
    lastUpdated: new Date(),
    id: v4(),
  },
  {
    itemName: "Dirtyface",
    type: "Amber Lager",
    desc:
      "Finally, a beer that pays homage to the hard workers in our Valley. The trail crews and farmers, the lumberjacks and firefighters, we brew this for you! With these folk in mind, we’ve created an Amber Lager that features a smooth, medium body, with a rich toasted malt aroma. Dirtyface's initial malty sweetness finishes fresh and clean... unlike its name. No need to wash up, just wash down.",
    origin: "Leavenworth, WA, USA",
    brewer: "Icicle Brewing Company",
    price: 169,
    pintsRemaining: 124,
    abv: 5.0,
    ibu: 21,
    created: new Date(),
    lastUpdated: new Date(),
    id: v4(),
  },
  {
    itemName: "Big Chocolate Love",
    type: "Porter",
    desc:
      "Twice the chocolate malt as in our Valentine's Day Beer! Big in flavor, fills you full of warm aromas of coffee and chocolate, has a light smoky finish, and a clean palate. Single hopped: all Simcoe, all the time. Originally brewed for Pike's Chocofest in February 2014.",
    origin: "Edmonds, WA, USA",
    brewer: "Salish Sea Brewing Company",
    price: 179,
    pintsRemaining: 124,
    abv: 7.0,
    ibu: 21,
    created: new Date(),
    lastUpdated: new Date(),
    id: v4(),
  },
  {
    itemName: "Northwest Red",
    type: "Red Ale",
    desc:
      "Our Northwest Red Ale provides a distinctly Northwest hop character balanced with a restrained malt sweetness. We use 2 Row barley along with Best Maltz Red X to create a rich, red color and a smooth, satisfying taste. A hint of chocolate seals the deal.",
    origin: "Seattle, WA, USA",
    brewer: "Stoup Brewing",
    price: 179,
    pintsRemaining: 124,
    abv: 5.0,
    ibu: 40,
    created: new Date(),
    lastUpdated: new Date(),
    id: v4(),
  },
];

export default kegList;
