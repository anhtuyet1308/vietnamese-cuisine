import React, { Component } from 'react';
import pho from './img/pho.jpg';
import bunCha from './img/bun-cha.jpg';
import bunDauMamTom from './img/bun-dau-mam-tom.jpg';
import tra from './img/tra.jpg';


export default class North extends Component {
  render() {
    return (
      <>
        <h1 id="pho">Pho - Rice Noodle Soup</h1>
        <img src={pho} alt="pho" />
        <p>
          "Pho" is a traditional food in the North of Vietnam specifically and
          the whole of Vietnam generally. "Pho" first appeared in the North of Vietnam
          in the 1900s  and it was a creative cuisine based on Chinese and French
          food. "Pho" is Vietnamese breakfast, lunch, dinner. It includes a broth
          and white soft rice noodles. The broth is cooked by beef bone for at least
          7 hours and there is also some special ingredients such as cinnamon,
          anise, clove, coriander, ginger, onions. In the North of Vietnam "Pho"
          is served with a slice of lime, chillies and scallion on top. But the
          southern Vietnamese would like to add more bean sprouts and some herbs.
          A famous author in Vietnam, Thach Lam wrote: "Phở is a special gift of
          Hanoi, it is not only in Hanoi but it is just the most delicious when
          it is served in Hanoi". There are many types of Phở dishes such as Chicken
          Pho, Sauteed Pho, wine-sauced Pho, sour Phở.
          <br/><br/>
          Pho is not only a food, but also cuisine- culture- economy in Vietnam
          urban. On September 22 2009 "Pho" was added in The Shorter Oxford
          English Dictionary.
          (<a className="source-link" href="https://en.wikipedia.org/wiki/Pho" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="bun-cha">Bun Cha</h1>
        <img src={bunCha} alt="bun cha" />
        <p>
          Bun Cha is one of the most special cuisines in Hanoi, the capital in Vietnam.
          In Hanoi, people usually eat Bun Cha for lunch. Bun Cha is consisted of small
          rice noodles, grilled meat, fish sauce for dipping, along with fresh vegetables and herbs.
          The secret recipe of Bun Cha includes a meat ball which is made by a shoulder
          of a pork seasoning with finely chopped onions, salts, peppers, sugars,
          olis and fish sauce, which is then grilled perfectly. Don't forget about
          the very important and delicious sauce!
          <br/><br/>
          Bun Cha is not a delicacy but it is special by its own and it is missed
          by anyone who just even tries it once. It has captured not only the hearts
          of the Vietnamese people but also those of tourists with its delicate and
          exquisite taste.
          (<a className="source-link" href="https://en.wikipedia.org/wiki/Bun_cha" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="bun-dau-mam-tom">Bun Dau Mam Tom</h1>
        <img src={bunDauMamTom} alt="bun dau mam tom" />
        <p>
          Bun dau mam tom is thin vermicelli noodles served with fried crispy
          tofus, shrimp paste, herbs and vegetables. "Bun dau mam tom" is a
          street food which people can easily look for on Hanoi streets. It is
          a simple dish but must be cooked meticulously and skillfully. If any
          ingredient is missed, half of this dish's soul will seem lost. Tofu
          should be homemade and fried perfectly until it is crispy outside but
          soft and moist inside. The pork belly is boiled carefully and cut into
          slices. The sophisticated taste of the shrimp paste is complicated in
          its own right, and many restaurants have their own secret recipe for
          this.
          (<a className="source-link" href="https://vi.m.wikipedia.org/wiki/B%C3%BAn_%C4%91%E1%BA%ADu_m%E1%BA%AFm_t%C3%B4m" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="tra">Tra</h1>
        <img src={tra} alt="vietnamese tea" />
        <p>
          Tra means tea. It is a popular drink in all of Vietnam, but it is the most popular in the North
          of Vietnam. Tea is drank at weddings, parties, meetings, and on the
          streets. It is not too difficult to look for a cup of tea throughout the various small
          beverage shops on the streets of the North. The tea contains fresh tea leaves
          that are cooked in boiled fresh water (well water mixed with rice water) or dewed on
          lotus leaves or flowers. Tea is not only a favourite beverage, but drinking
          tea is also an art.
          (<a className="source-link" href="http://nvbac.com/tra-thu/nghe-thuat-uong-tra-o-viet-nam" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>
      </>
    );
  }
}
