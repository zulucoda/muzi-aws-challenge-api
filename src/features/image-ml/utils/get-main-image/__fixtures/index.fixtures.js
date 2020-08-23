const carFixture = {
  Labels: [
    {
      Name: 'Transportation',
      Confidence: 99.93138122558594,
      Instances: [],
      Parents: [],
    },
    {
      Name: 'Automobile',
      Confidence: 99.93138122558594,
      Instances: [],
      Parents: [
        {
          Name: 'Vehicle',
        },
        {
          Name: 'Transportation',
        },
      ],
    },
    {
      Name: 'Vehicle',
      Confidence: 99.93138122558594,
      Instances: [],
      Parents: [
        {
          Name: 'Transportation',
        },
      ],
    },
    {
      Name: 'Car',
      Confidence: 99.93138122558594,
      Instances: [
        {
          BoundingBox: {
            Width: 0.8012311458587646,
            Height: 0.7096776366233826,
            Left: 0.07885406166315079,
            Top: 0.17769117653369904,
          },
          Confidence: 99.93138122558594,
        },
      ],
      Parents: [
        {
          Name: 'Vehicle',
        },
        {
          Name: 'Transportation',
        },
      ],
    },
    {
      Name: 'Human',
      Confidence: 99.51825714111328,
      Instances: [],
      Parents: [],
    },
    {
      Name: 'Person',
      Confidence: 99.51825714111328,
      Instances: [
        {
          BoundingBox: {
            Width: 0.06243634968996048,
            Height: 0.2661672532558441,
            Left: 0.9345789551734924,
            Top: 0.25589948892593384,
          },
          Confidence: 99.51825714111328,
        },
        {
          BoundingBox: {
            Width: 0.06422433257102966,
            Height: 0.12716101109981537,
            Left: 0.7966723442077637,
            Top: 0.23652340471744537,
          },
          Confidence: 99.2885971069336,
        },
        {
          BoundingBox: {
            Width: 0.12922118604183197,
            Height: 0.35513946413993835,
            Left: 0.009509549476206303,
            Top: 0.28652286529541016,
          },
          Confidence: 98.6319808959961,
        },
        {
          BoundingBox: {
            Width: 0.057487618178129196,
            Height: 0.2102523297071457,
            Left: 0.8546112179756165,
            Top: 0.3115125000476837,
          },
          Confidence: 97.82268524169922,
        },
        {
          BoundingBox: {
            Width: 0.06288125365972519,
            Height: 0.10111518949270248,
            Left: 0.06771509349346161,
            Top: 0.24144110083580017,
          },
          Confidence: 95.57999420166016,
        },
        {
          BoundingBox: {
            Width: 0.03852469474077225,
            Height: 0.11609899252653122,
            Left: 0.8834155201911926,
            Top: 0.27340391278266907,
          },
          Confidence: 84.05589294433594,
        },
        {
          BoundingBox: {
            Width: 0.03824549913406372,
            Height: 0.06553389877080917,
            Left: 0.747306227684021,
            Top: 0.25534504652023315,
          },
          Confidence: 82.43119049072266,
        },
        {
          BoundingBox: {
            Width: 0.029044844210147858,
            Height: 0.04609137773513794,
            Left: 0.18980054557323456,
            Top: 0.24439479410648346,
          },
          Confidence: 76.76163482666016,
        },
      ],
      Parents: [],
    },
    {
      Name: 'Car Show',
      Confidence: 98.60197448730469,
      Instances: [],
      Parents: [
        {
          Name: 'Vehicle',
        },
        {
          Name: 'Car',
        },
        {
          Name: 'Transportation',
        },
      ],
    },
    {
      Name: 'Machine',
      Confidence: 79.52047729492188,
      Instances: [],
      Parents: [],
    },
    {
      Name: 'Wheel',
      Confidence: 79.52047729492188,
      Instances: [
        {
          BoundingBox: {
            Width: 0.07167602330446243,
            Height: 0.17643257975578308,
            Left: 0.8022571802139282,
            Top: 0.44184303283691406,
          },
          Confidence: 79.52047729492188,
        },
      ],
      Parents: [
        {
          Name: 'Machine',
        },
      ],
    },
    {
      Name: 'Sedan',
      Confidence: 70.07281494140625,
      Instances: [],
      Parents: [
        {
          Name: 'Vehicle',
        },
        {
          Name: 'Car',
        },
        {
          Name: 'Transportation',
        },
      ],
    },
  ],
  LabelModelVersion: '2.0',
};

module.exports = {
  carFixture,
};
