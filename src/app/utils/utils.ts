export const getYesNo = (value) => {
  if (value === 'Sí') {
    return 'Yes';
  } else if (value === 'No') {
    return 'No';
  } else if (value === '') {
    return '-';
  } else if (value === undefined) {
    return '-';
  } else {
    return value;
  }
};

export const toRemoveQuotes = value => {
  if (!value) {
    return;
  }
  let pos = 0;
  if (value.startsWith('"')) {
    pos = 1;
  }
  // const value1 = value.substr(pos, len - 1);
  const value1 = value.substr(pos);
  const value2 = value1.replace(/["']/g, '');
  return value2;
};

export const translateComposition = value => {
  if (value === 'Arena') {
    return 'Sand';
  } else if (value === 'Arena / Algas') {
    return 'Sand / Algae';
  } else if (value === 'Arena / Arcilla') {
    return 'Sand / Clay';
  } else if (value === 'Arena / Bolos') {
    return 'Sand / Crushed Stone';
  } else if (value === 'Arena / Bolos / Grava') {
    return 'Sand / Crushed Stone / Gravel';
  } else if (value === 'Arena / Bolos / Roca') {
    return 'Sand / Crushed Stone / Rock ';
  } else if (value === 'Arena / Canto rodado') {
    return 'Sand / Pebbles';
  } else if (value === 'Arena / Cemento') {
    return 'Sand / Cement';
  } else if (value === 'Arena / Fango') {
    return 'Arena / Mud';
  } else if (value === 'Arena / Grava') {
    return 'Sand / Gravel';
  } else if (value === 'Arena / Grava fina') {
    return 'Sand / Fine Gravel';
  } else if (value === 'Arena / Roca') {
    return 'Sand / Rock';
  } else if (value === 'Arena / Roca / Grava') {
    return 'Sand / Rock / Gravel';
  } else if (value === 'Bolos') {
    return 'Crushed Stone';
  } else if (value === 'Bolos / Grava') {
    return 'Crushed Stone / Gravel';
  } else if (value === 'Bolos / Grava / Gravilla') {
    return 'Crushed Stone / Gravel / Fine Gravel';
  } else if (value === 'Bolos / Guijarros') {
    return 'Crushed Stone / Pebbles';
  } else if (value === 'Bolos / Hormigón') {
    return 'Crushed Stone / Concrete';
  } else if (value === 'Bolos / Roca') {
    return 'Crushed Stone / Rock';
  } else if (value === 'Bolos / Roca / Grava') {
    return 'Crushed Stone / Rock / Gravel';
  } else if (value === 'Bolos / Roca / Grava / Arena') {
    return 'Crushed Stone / Rock / Gravel / Sand';
  } else if (value === 'Bolos / Roca / Gravilla') {
    return 'Crushed Stone / Rock / Fine Gravel'
  } else if (value === 'Bolos grandes') {
    return 'Big Crushed Stone';
  } else if (value === 'Cantos / Arena') {
    return 'Small Stone / Sand';
  } else if (value === 'Cantos finos / Arena') {
    return 'Fine Small Stone / Sand';
  } else if (value === 'Cemento') {
    return 'Cement';
  } else if (value === 'Conchas de bivalvos') {
    return 'Bivalve Seashell';
  } else if (value === 'Grava') {
    return 'Gravel';
  } else if (value === 'Guijarros') {
    return 'Pebbles';
  } else if (value === 'Roca') {
    return 'Rock';
  } else if (value === 'Roca / Arena / Hierba') {
    return 'Rock / Sand / Grass';
  } else if (value === 'Roca / Grava') {
    return 'Rock / Gravel';
  } else {
    return value;
  }


};

export const translateTypeOfSand = (value) => {

  if (value === 'Blanca') {
    return 'White';
  } else if (value === 'Blanca / Dorada') {
    return 'White / Golden';
  } else if (value === 'Blanca / Oscura') {
    return 'White / Dark';
  } else if (value === 'Blanca y fina') {
    return 'White and thin';
  } else if (value === 'Clara') {
    return 'Clear';
  } else if (value === 'Dorada') {
    return 'Golden';
  } else if (value === 'Dorada / Oscura') {
    return 'Golden / Dark';
  } else if (value === 'Fina y dorada') {
    return 'Thin and golden';
  } else if (value === 'Fina y dorada/oscura') {
    return 'Thin and golden/dark';
  } else if (value === 'Fina y gris') {
    return 'Thin and gray';
  } else if (value === 'Grano grueso / Beige') {
    return 'Coarse grain / Beige';
  } else if (value === 'Grano grueso / Beige clara') {
    return 'Coarse grain / Light beige';
  } else if (value === 'Grano grueso / Gris') {
    return 'Corarse grain / Gray';

  } else if (value === 'Grano medio / color claro') {
    return 'Medium grain / Light color';
  } else if (value === 'Gris') {
    return 'Gray';
  } else if (value === 'Gris clara') {
    return 'Light gray';
  } else if (value === 'Gruesa y dorada') {
    return 'Thick and golden';

  } else if (value === 'Oscura') {
    return 'Dark';
  } else {
    return value;
  }
};

export const translateBathingConditions = value => {
  if (value === 'Aguas limpias y tranquilas') {
    return 'Clean and calm waters';
  } else if (value === 'Aguas tranquilas') {
    return 'Calm waters';
  } else if (value === 'Aguas tranquilas / Oleaje fuerte') {
    return 'Calm waters / Strong waves';
  } else if (value === 'Aguas tranquilas / Oleaje moderado') {
    return 'Calm waters / Moderate swell';
  } else if (value === 'Aguas tranquilas / Ventosa') {
    return 'Calm waters / Windy';
  } else if (value === 'Fuerte oleaje') {
    return 'Strong waves';
  } else if (value === 'Oleaje fuerte') {
    return 'Strong waves';
  } else if (value === 'Oleaje fuerte / Ventosa') {
    return 'Strong waves / Windy';
  } else if (value === 'Oleaje moderado') {
    return 'Moderate swell';
  } else if (value === 'Oleaje moderado - cuidado con corrientes') {
    return 'Moderate swell - watch out for currents';
  } else if (value === 'Oleaje moderado / Fondo rocoso') {
    return 'Moderate swell / Rocky bottom';
  } else if (value === 'Oleaje moderado / fuerte') {
    return 'Moderate / strong swell';
  } else if (value === 'Oleaje moderado / Oleaje fuerte') {
    return 'Moderate / strong swell';
  } else if (value === 'Oleaje moderado / Ventosa') {
    return 'Moderate waves / Windy';
  } else if (value === 'Oleaje suave') {
    return 'Soft waves';
  } else if (value === 'Poco oleaje') {
    return '';
  } else if (value === 'Ventosa') {
    return 'Little waves';
  } else if (value === 'Ventosa / Aguas tranquilas') {
    return 'Windy / Still water';
  } else if (value === 'Ventosa / Oleaje moderado') {
    return 'Windy / moderate swell';
  } else {
    return value;
  }
};

export const translateOcuppancy = value => {
  if (value === 'Alto') {
    return 'High';
  } else if (value === 'Bajo') {
    return 'Low';

  } else if (value === 'Medio') {
    return 'Average';

  } else if (value === 'Medio / Alto') {
    return 'Average / High';

  } else if (value === 'Medio / Bajo') {
    return 'Average / Low';

  } else if (value === 'Muy bajo') {
    return 'Very Low';

  } else if (value === 'Nulo') {
    return 'Non-existent';
  } else {
    return value;
  }
};

export const translateMetros = value => {

  if (!value) {
    return;
  }
  const value1 = value.replace(/metros/g, 'meters');
  const value2 = value1.replace(/bajamar/g, 'low tide');
  const value3 = value2.replace(/pleamar/g, 'high tide');
  return value3;
};

export const translateTypeOfAccess = value => {
  if (value === 'A pie') {
    return 'On foot';
  } else if (value === 'A pie / Coche') {
    return 'On foot / Car';
  } else if (value === 'A pie / Coche / Barco') {
    return 'On foot / Car / Boat';
  } else if (value === 'A pie difícil') {
    return 'On foot difficult';
  } else if (value === 'A pie difícil / Barco') {
    return 'On foot easy / Boat';
  } else if (value === 'A pie difícil / Coche') {
    return 'On foot difficult / Car';
  } else if (value === 'A pie difícil / Coche / Barco') {
    return 'On foot difficult / Car / Boat';
  } else if (value === 'A pie fácil') {
    return 'On foot easy';
  } else if (value === 'A pie fácil / Barco') {
    return 'On foot easy / Boat';
  } else if (value === 'A pie fácil / Bici') {
    return 'On foot easy / Bike';
  } else if (value === 'A pie fácil / Bici / Coche') {
    return 'On foot easy / Bike / Car';
  } else if (value === 'A pie fácil / Coche') {
    return 'On foot easy / Car';
  } else if (value === 'A pie fácil / Coche / Barco') {
    return 'On foot easy / Car / Boat';
  } else if (value === 'A pie muy difícil') {
    return 'On foot very difficult';
  } else if (value === 'Barco') {
    return 'Boat';
  } else if (value === 'Coche') {
    return 'Car';
  } else if (value === 'Coche / Barco') {
    return 'Car / Boat';
  } else if (value === '' || value === undefined) {
    return '-';
  }
};

export const translateYesNoIntoSpanish = value => {
  if (value) {
    return 'Sí';
  } else {
    return 'No';
  }
};

export const translateOccupancyIntoSpanish = value => {
  if (value === 'High') {
    return 'Alto';
  } else if (value === 'Low') {
    return 'Bajo';
  } else if (value === 'Average') {
    return 'Medio';

  } else if (value === 'Average / High') {
    return 'Medio / Alto';

  } else if (value === 'Average / Low') {
    return 'Medio / Bajo';

  } else if (value === 'Very Low') {
    return 'Muy bajo';

  } else if (value === 'Non-existent') {
    return 'Nulo';
  } else {
    return value;
  }
};

export const includeDistance = (distance, userDistance) => {

  distance = distance.replace(',', '.');
  // include floating point number
  const regex = /\d+(\.\d+)?/g;
  const matchesArray = distance.match(regex);
  let dbDistance;
  if (matchesArray.length === 1) {
    dbDistance = matchesArray[0];
  } else if (matchesArray.length === 2) {
    dbDistance = matchesArray[1];
  }
  if (dbDistance <= userDistance) {
    return true;
  } else {
    // console.log(dbDistance + '>' + userDistance);
    return false;
  }

};

export const includeLength = (length, userDistance) => {

  length = length.replace('.', '');
  // include floating point number
  const regex = /\d+(\.\d+)?/g;
  const matchesArray = length.match(regex);
  let dbDistance;
  if (matchesArray.length === 1) {
    dbDistance = matchesArray[0];
  } else if (matchesArray.length === 2) {
    dbDistance = matchesArray[1];
  }
  if (dbDistance <= userDistance) {
    return true;
  } else {
    // console.log(dbDistance + ">" + userDistance);
    return false;
  }

};

export const logarithmicSlider = position => {
  const minp = 0;
  const maxp = 100;

  const minv = Math.log(50);
  const maxv = Math.log(28000);
  const scale = (maxv - minv) / (maxp - minp);

  return Math.exp(minv + scale * (position - minp));
};

export const logPositionSlider = (value: number) => {
  const minp = 0;
  const maxp = 100;

  const minv = Math.log(50);
  const maxv = Math.log(28000);
  const scale = (maxv - minv) / (maxp - minp);

  return (Math.log(value) - minv) / scale + minp;
};

export interface GeneralInfo {
  termino_municipal: string;
  provincia: string;
  comunidad_autonoma: string;
  longitud: string;
  anchura: string;
  grado_ocupacion: string;
  paseo_maritimo: string;
  nombre_alternativo: string;
  nombre_alternativo_2: string;
  descripcion: string;
  images: string;
}

const rad = (x: number) => {
  return x * Math.PI / 180;
};

export const getDistance = (p1: {lat: number, lng: number}, p2: { lat: number, lng: number}) => {
  const R = 6378137; // Earth’s mean radius in meter
  const dLat = rad(p2.lat - p1.lat);
  const dLong = rad(p2.lng - p1.lng);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d; // returns the distance in meter
};

export const parseCoordinate = (x: string): number =>{
  return parseFloat(x.replace(',', '.'));
};
