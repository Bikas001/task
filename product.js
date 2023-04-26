
const { faker } = require('@faker-js/faker');
const fs = require('fs')

generateProduct();
async function generateProduct () {
  let products = []
  for (let id = 0; id < 10; id++) {
    let images= []

    let title =  faker.commerce.productName()
    let price =  faker.commerce.price()
    let country =  faker.address.country()
    let city =  faker.address.city()
    let streetAddress =  faker.address.streetAddress()
    let shortDescription =  faker.commerce.productDescription()
    let currencyCode =  faker.finance.currencyCode()
    let currencySymbol = faker.finance.currencySymbol()
    let rating = Math.floor(Math.random() * 101);

    for(let img=0; img< 3; img++){
        images.push(
            {
                "title": `image ${img}`,
                "url" :faker.image.imageUrl()
            }
        )
    }
    let tags = [];
    let tags2 = [];
    for(let i=0; i < 5; i++){
      let word = faker.word.adjective(5);
      tags.push(word)
      let word2 = faker.word.adjective(6);
      tags2.push(word2)
    }
    

    products.push({
      "id": id,
      "price": price,
      "title" : title,
      "shortDescription": shortDescription,
      "images": images,
      "currencyCode": currencyCode,
      "country": country,
      "city": city,
      "streetAddress": streetAddress,
      "rating": rating,
      "star": Math.floor(Math.random() * 6),
      "currencySymbol": currencySymbol,
      "tags": tags,
      "tags2": tags2
    })
  }

  let db = {
    "products": products
  }

  const jsonString = JSON.stringify(db)
  fs.writeFile('db.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
  })
}
