export type CountryId =
  | "ukraine"
  | "britain"
  | "canada"
  | "latvia"
  | "uae"
  | "poland"
  | "portugal"
  | "turkey"
  | "usa"
  | "hungary"
  | "croatia"
  | "czech"
  | "montenegro"
  | "switzerland";

export type Country = { id: CountryId };

export type PinPx = { x: number; y: number }; 

export type MapKey = "mob" | "tab" | "desk";

export type MapDef = { src: string; width: number; height: number };


export type ClientLogo = {
  src: string;
  alt: string;
};
