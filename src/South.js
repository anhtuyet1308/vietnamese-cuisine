import React, { Component } from 'react';
import comTam from './img/com-tam.jpg';
import banhMi from './img/banh-mi.jpg';
import lauMam from './img/lau-mam.jpg';


export default class South extends Component {
  render() {
    return (
      <>
        <h1 id="com-tam">Com Tam</h1>
        <img src={comTam} alt="com tam" />
        <p>
          Com Tam is a speciality in Southern Vietnam, especially in Ho Chi
          Minh City (Saigon). The dish is cooked with broken rice which is
          "broken grains of rice left over from the traditional drying and
          milling process".
          (<a className="source-link" href="https://www.theguardian.com/cities/2014/oct/30/com-tam-broken-rice-ho-chi-minh-city-real-street-food" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
          A long time ago, the broken grains were used to feed chickens, hens
          or pigs. But nowadays, Com Tam is a famous food so the price of the
          broken grains is increasing. Com Tam was influenced by western food
          which is usually served with eggs. Com Tam is served with grilled
          pork, shredded pork skin, a steamed pork with egg quiche with lightly
          fried spring onions on top and sweet fish sauce aside. Not only in
          Southern Vietnam, Com Tam is served in many Vietnamese restaurants
          abroad.
          (<a className="source-link" href="https://en.wikipedia.org/wiki/C%C6%A1m_t%E1%BA%A5m" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="banh-mi">Banh Mi</h1>
        <img src={banhMi} alt="banh mi" />
        <p>
          Banh Mi is a innovation from French baguettes. The baguette is baked
          by rice flour and inside served with pork sausage, pates, mayonnaise,
          vegetables such as coriander leaves, cucumbers, pickles, and then
          seasoned with a pinch of chilli, salt and peppers. Banh Mi is a typical
          street food for students and workers because of its reasonable price.
          Banh Mi is eaten for breakfast, lunch, dinner and can also work as a
          snack. Banh Mi has been served for more than 150 years after Vietnam's
          independence. Banh Mi has also been somewhat popularized around the
          world following Vietnamese immigration to other countries.
          (<a className="source-link" href="https://en.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="lau-mam">Lau Mam</h1>
        <img src={lauMam} alt="lau mam" />
        <p>
          Bun Mam came from Cambodia and has since become a speciality of Mekong
          Delta (South-West Vietnam). At the beginning the broth is only cooked
          with fermented fish, lemon grasses, and chillies. Nowadays squid, grilled
          pork, and vegetables are added to make the dish more colorful and flavorful.
          Even though the dish came from Cambodia, the people of Mekong Delta
          have further innovated the food and popularized it to be one of the most
          favourite dishes in Vietnam.
          (<a className="source-link" href="https://en.wikipedia.org/wiki/B%C3%BAn_m%E1%BA%AFm" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>
      </>
    );
  }
}
