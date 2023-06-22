const City = require("../../models/City");

const citiesCreate = async () => {
  const cities = [
    {
      name: "Santiago",
      country: "Chile",
      isCapital: true,
    },
    {
      name: "Lima",
      country: "Peru",
      isCapital: true,
    },
  ];

  await City.bulkCreate(cities);
};

module.exports = citiesCreate;
