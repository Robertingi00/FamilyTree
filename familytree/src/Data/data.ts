const data = [
  {
    id: 1,
    parentId: 0,
    name: 'Markús Ármann Einarsson',
    birthDate: 'test',
    spouse: { name: 'Hanna Sesselja Hálfdanardóttir', birthDate: 'test ' },
    children: [
      {
        id: 2,
        parentId: 1,
        name: 'Hálfdan Þórir Markússon',
        birthDate: '24.05.1963',
        spouse: { name: 'Sóley Indriðadóttir', birthDate: '24.09.1964' },
        children: [
          {
            id: 5,
            parentId: 2,
            name: 'Hanna Sesselja Hálfdanardóttir',
            birthDate: '09.05.1958',
            spouse: { name: 'Alfreð Brynjar Kristinsson', birthDate: 'test ' },
            children: [
              {
                id: 12,
                name: 'Kristján Leó Alfreðsson',
                birthDate: '08.06.2013',
                spouse: '',
                children: []
              },
              {
                id: 13,
                name: 'Birta Líf Alfreðsdóttir',
                birthDate: '10.10.2014',
                spouse: "",
                children: []
              },
              {
                id: 14,
                name: 'Katrín Lára Alfreðsdóttir',
                birthDate: '24.4.2016',
                spouse: "",
                children: []
              }
            ]
          },
          {
            id: 6,
            name: 'Bára Fanney Hálfdanardóttir',
            birthDate: '22.09.1988',
            spouse: "",
            children: []
          },
          {
            id: 7,
            name: 'Árny Þóra Hálfdanardóttir',
            birthDate: '04.02.1992',
            spouse: "",
            children: [
              {
                id: 15,
                name: 'Baldur Ingi Daníelsson',
                birthDate: '04.10.2018',
                spouse: "",
                children: []
              }
            ]
          },
          {
            id: 8,
            name: 'Margrét Rósa Háldfanardóttir',
            birthDate: '02.06.1994',
            spouse: {
                id: 16,
                name: 'Bjarki Már Benediktsson',
                birthDate: '25.05.1993',
                spouse: "",
                children: []
            },
            children: []
          },
          {
            id: 9,
            name: 'Sylvía Rún Hálfdanardóttir',
            birthDate: '09.20.1998',
            spouse: "",
            children: []
          },
          {
            id: 10,
            name: 'Róbert Ingi Hálfdanarson',
            birthDate: '09.07.2000',
            spouse: "",
            children: []
          },
          {
            id: 11,
            name: 'Dagbjört Gyða Hálfdanardóttir',
            birthDate: '05.03.2005',
            spouse: "",
            children: []
          }
        ]
      },
      {
        id: 3,
        parentId: 1,
        name: 'Ingibjörg Markúsdóttir',
        birthDate: 'test ',
        spouse: '',
        children: []
      },
      {
        id: 4,
        parentId: 1,
        name: 'Ármann Markússon',
        birthDate: 'test ',
        spouse: '',
        children: []
      }
    ]
  }
];

export default data;
