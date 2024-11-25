export interface LocationType {
  id: number,
  name: string,
  description: string,
  address: string,
  postalCode: string
  coordinates: number[]
}

const locations: LocationType[] = [{
  id: 1,
  name: "Zu Hause",
  description: "Hier wohne ich",
  address: "Ludwig-Klapp-Straße 3",
  postalCode: "12437 Berlin",
  coordinates: [1501430.2213757674, 6885113.958340392],
},{
  id: 2,
  name: "Büchereck ",
  description: "lokaler Bücherladen",
  address: "Ekkehardstraße 1",
  postalCode: "12437 Berlin",
  coordinates: [1501551.186631467, 6885071.834759387],
},{
  id: 3,
  name: "Bahnhof Baumschulenweg",
  description: "S-Bahnhof",
  address: "Baumschulenstraße",
  postalCode: "12437 Berlin",
  coordinates: [1501659.13533162, 6885117.554255853],
},
]

export default locations;
