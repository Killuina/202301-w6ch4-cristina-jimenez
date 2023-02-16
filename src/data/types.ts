interface ThingDataStructure {
  thing: string;
}

interface ThingStructure extends ThingDataStructure {
  id: number;
}

export type ThingsAlreadyKnown = ThingStructure[];
