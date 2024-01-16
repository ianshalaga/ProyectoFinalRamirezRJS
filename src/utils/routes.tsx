import { toUrlFormat } from "./utils";

export const urls = {
  home: "/",
  category: "/albums",
  item: "/album",
  cart: "/cart",
  checkout: "/checkout",
};

export interface Route {
  [key: string]: {
    url: string;
    text: string;
  };
}

export const routes: Route[] = [
  {
    home: {
      url: urls.home,
      text: "Inicio",
    },
  },
  {
    store: {
      url: urls.category,
      text: "Tienda",
    },
  },
  {
    soulEdgeBlade: {
      url: urls.category + "/" + toUrlFormat("Soul Edge / Blade"),
      text: "Soul Edge / Blade",
    },
  },
  {
    soulCalibur: {
      url: urls.category + "/" + toUrlFormat("Soulcalibur"),
      text: "Soulcalibur",
    },
  },
  {
    soulCaliburII: {
      url: urls.category + "/" + toUrlFormat("Soulcalibur II"),
      text: "Soulcalibur II",
    },
  },
];
