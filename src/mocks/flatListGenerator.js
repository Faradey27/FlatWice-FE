const uuid = require('uuid/v4');

const TITLES = [
  'Апартаменты с двумя спальнями в центре',
  'СВОБОДНА!Посуточно, почасово! Есть все для комфорта!',
  'Сдам в аренду свою 2-комнатную в 5-ти минутах ходу от м. Дорогожичи',
  'Сдам шикарный Кадор! Куня студия и спальня отдельно! Впервые!',
  'Квартира в центре долгосрочно малогаборитная от хозяина',
  'Сдам посуточно жильё в Сергеевке',
  'Новострой ЖК Магнат, Центр на пр. Яворницкого. Квартира 3 к.',
  'Сдам на долгий срок 1комнатную квартиру Дружба',
  'Оренда 3-кімнатної квартири по вул.Любінській',
  'вул. Пр.Шевченка Двокімнатна квартира в центрі площа ринок',
];

const NAMES = [
  'Андрей Пряников',
  'Игорь Власников',
  'Слава Васильев',
  'Пряник Пряникович',
  'Владислав Едович',
  'Миша',
  'Николай',
];

const NUMBERS = [
  '0637777777',
  '+380630000000',
  '80630000000',
  '380630000000',
];

const EMAIL = [
  'bla@gmail.com',
  'long-long-bla@gmail.com',
  's@gmail.com',
  's@s.com',
  'some@s.com',
];

const SHORT_DESC = [
  `Здам в оренду двокімнатну квартиру в центрі міста по вулиці Проспект Шевченка.
  В квартирі є все необхідне для проживання 4 осіб (2+2): двоспальне ліжко та
  двоспальний розкладний диван та інші меблі, з техніки:телевізор
  з кабельним телебаченням понад 150 каналів,інтернет,газова плита,
  пральна машинка автомат, фен, праска, порохотяг. Ціна в вихідні і
  святкові дні інша тому оточняйте по телефону, Приємного відпочинку у
  Львові. ціна за будні`,
  `
  Аренда 2-к квартиры, пер.Феодосийский 14-А

    17/22 этаж нового жилого дома
    общая площадь - 65 кв.м

    2 спальни:
    в 1-й большая двуспальная кровать,
    в 2-й раскладной диван

    холл, закрытый балкон, кухня, 2 санузла, стиральная машинка

    евроремонт, мебель, техника, кондиционеры

    все коммуникации, интернет

    Удобная парковка авто, рядом детская площадка, магазины, салоны, банки.
    Ближайшее метро "Димеевская", автобусная остановка под домом

    Аренда + коммунальные
  `,
  `
    Хороший ремонт. Хорошая мебель и вся быт.техника, интернет 45 эт.
    дома. Сдам семье, или студентам. По цене можно еще договориться.
    Больше фото по ссылке: http://clkmein.com/q7MsC9
  `,
  `
    Дом расположен Приморская 30а, историческом месте.возле крепости,
    пляж между горой крепостной и горой пол Вани! Древний генуэзский причал! Пляж
    галечный оборудованный навесами лежаками! Дом огорожен забором, кодовые замки
    на калитках и на подъездах! Во дворе стоянка, детская площадка посажены крымские деревья!
    Квартира находится на 3 этаже с видом на крепость! В квартире есть все что нужно, вай фай,
    кондиционер, стиральная машина, спутник ТВ, утюг, микроволновая печь! + 380 - Показать номер - ! +79787327140!
  `,
];

const TAGS = [
  ['киев', 'центр'],
  ['чернигов', 'smart квартира', 'новострой'],
  ['львов', 'smart квартира', 'большой дом'],
  ['киев', 'маленькая', 'комната'],
  ['киев', '3', 'комната'],
];

const PHOTOS = [
  'https://olxua-ring04.akamaized.net/images_slandocomua/533566132_1_644x461_shikarnaya-2k-kvartira-dragomanova-2-poznyaki-kiev.jpg',
  'https://olxua-ring12.akamaized.net/images_slandocomua/533571298_1_1000x700_kvartira-posutochno-bulvar-lesi-ukrainki-11-kiev.jpg',
  'https://olxua-ring04.akamaized.net/images_slandocomua/534123692_12_1000x700_novostroy-zhk-magnat-tsentr-na-pr-yavornitskogo-kvartira-3-k-.jpg',
  'https://olxua-ring09.akamaized.net/images_slandocomua/458053304_1_1000x700_sovremennaya-kvartira-s-pochasovoy-oplatoy-v-samom-tsentre-odessa.jpg',
  'https://olxua-ring11.akamaized.net/images_slandocomua/507714764_1_1000x700_svobodna-segodnya-2-h-komnatnaya-kiev.jpg',
  'https://olxua-ring12.akamaized.net/images_slandocomua/533571298_1_1000x700_kvartira-posutochno-bulvar-lesi-ukrainki-11-kiev.jpg',
  'https://olxua-ring12.akamaized.net/images_slandocomua/534124516_4_1000x700_zdayu-1-kmnatnu-tsentr-vroremont-ukomplektovana-nedvizhimost.jpg',
];

const AVATARS = [
  'http://agar-balkan.ga/public/images/favicon/apple-icon-72x72.png',
  'http://homefixer.co.za/wp-content/uploads/2011/05/images-150x150.png',
  'http://www.netteask.com/avatar/18.jpg',
];

const selectRandomElementFromArr = (arr) => {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

const randomDate = (date1, date2) => {
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
  const nextDate1 = new Date(date1 || '01-01-1970').getTime();
  const nextDate2 = new Date(date2 || new Date().toLocaleDateString()).getTime();

  if (nextDate1 > nextDate2) {
    return new Date(getRandomArbitrary(nextDate2, nextDate1)).getTime();
  }

  return new Date(getRandomArbitrary(nextDate1, nextDate2)).getTime();
};


const generate = (count) => {
  const flats = [];

  while (flats.length < count) {
    flats.push({
      id: uuid(),
      title: selectRandomElementFromArr(TITLES),
      price: Math.floor((Math.random() + 1) * 4200), // eslint-disable-line
      currency: 'грн',
      currencyLabel: 'грн',
      author: {
        avatar: selectRandomElementFromArr(AVATARS),
        name: selectRandomElementFromArr(NAMES),
        phoneNumber: selectRandomElementFromArr(NUMBERS),
        email: selectRandomElementFromArr(EMAIL),
      },
      createdAt: randomDate('12/13/2017', '01/01/2017'),
      updatedAt: randomDate('12/13/2017', '01/01/2017'),
      location: {
        x: 1,
        y: 1,
        adress: {
          country: 'UA',
          city: 'Kiev',
          street: 'best street',
          house: '24',
        },
      },
      shortDescription: selectRandomElementFromArr(SHORT_DESC),
      description: selectRandomElementFromArr(SHORT_DESC),
      categories: ['rent'],
      tags: selectRandomElementFromArr(TAGS),
      mainPhoto: selectRandomElementFromArr(PHOTOS),
      photos: [],
      videos: [],
    });
  }

  return flats;
};

module.exports = { generate };
