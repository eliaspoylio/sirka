export interface IPlace {
  id: string;
  name: {
    fi: string;
    en: string;
    sv: string;
    zh: string
  };
  sourceType: {};
  infoUrl: string;
  modifiedAt: number;
  location: {
    lat: {};
    lon: {};
    address: {
      streetAddress: string;
      postalCode: string;
      locality: string
    }
  };
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
  };
  tags: [
    {
      id: string;
      name: string
    }
  ];
  openingHours: {
    hours: [
      {
        weekdayId: number;
        opens: {
          hours: number;
          minutes: number;
          seconds: number
        };
        closes: {
          hours: number;
          minutes: number;
          seconds: number
        };
        open24h: true
      }
    ];
    openinghoursException: string
  }
}
