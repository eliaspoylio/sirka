export interface IEvent {
  id: string;
  name: {
    fi: string;
    en: string;
    sv: string;
    zh: string;
  },
  sourceType: {};
  infoUrl: string;
  modifiedAt: number;
  location: {
    lat: {};
    lon: {};
    address: {
      streetAddress: string;
      postalCode: string;
      locality: string;
    }
  },
  description: {
    intro: string;
    body: string;
    images: [
      {
        url: string;
        copyrightHolder: string;
        licenseType: {}
      }
    ]
  },
  tags: [
    {
      id: string;
      name: string;
    }
  ],
  eventDates: {
    startingDay: number;
    endingDay: number;
    additionalDescription: [
      {
        langCode: string;
        text: string;
      }
    ]
  }
}


