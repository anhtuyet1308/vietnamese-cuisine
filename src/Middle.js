import React, { Component } from 'react';
import caoLau from './img/cao-lau.jpg';
import bunBoHue from './img/bun-bo-hue.jpg';
import comHen from './img/com-hen.jpg';


export default class Middle extends Component {
  render() {
    return (
      <>
        <h1 id="cao-lau">Cao Lau</h1>
        <img src={caoLau} alt="cao lau" />
        <p>
          Cao Lau is a speciality in Hoian, Danang. Cao Lau's ingredients are
          noodles, a little bit of broth, sliced pork , vegetables and herbs. The
          noodles are the soul of the dish. They are not normal rice noodles; they are
          prepared and cooked carefully. Firstly, rice must be sank overnight
          in a mixture of water and ashes from the burnt wood in Culao Cham,
          which is 16 km away from Hoian. Secondly, the rice is milled with water
          from Ba Le's well which was built by the Cham People a thousand years
          ago. Many restaurants have tried to serve Cao Lau, but were unsuccessful
          due to the difficulty of its cooking technique.
          (<a className="source-link" href="https://en.wikipedia.org/wiki/Cao_l%E1%BA%A7u" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="bun-bo-hue">Bun Bo Hue</h1>
        <img src={bunBoHue} alt="bun bo hue" />
        <p>
          Hue is the name of the city where Bun Bo was first created. In Hue,
          it is simply called "Bun Bo". Bun Bo is served in luxury restaurants,
          popular restaurants, and on the street. People eat Bun Bo whenever and
          wherever they want, all day. The dish can be a warm breakfast, a quick
          lunch or just a simple dinner with friends and family. The most important
          ingredient of this food is a broth which is cooked with lemon grass,
          beef shank, pork bones, pork hocks, shrimp paste and fish sauce. Each
          chef has a secret recipe to balance the amount of lemon grass and shrimp
          paste. Bun Bo is served with rice noodles, broth, sliced beef, pork and
          some vegetables on top. Bun Bo is a famous dish in Vietnam and each area
          adjusts the recipe according to their taste. If you have a chance to
          visit Hue, you should not miss out on Bun Bo there!
          (<a className="source-link" href="https://en.wikipedia.org/wiki/B%C3%BAn_b%C3%B2_Hu%E1%BA%BF" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>

        <h1 id="com-hen">Com Hen</h1>
        <img src={comHen} alt="com hen" />
        <p>
          Com Hen was a dish that was presented to the king when Vietnam was a
          Feudal System. Nowadays Com Hen is a speciality of Hue.
          The dish is served with white rice, baby mussel or basket clams,
          some vegetable on top and mussel soup. Com Hen is usually served very
          spicy because it is a part of the culture and tastes of people in the
          middle of Vietnam. They really like their spices!
          (<a className="source-link" href="http://www.trankiemdoan.net/van/taptruyen/chuyenkhao/ckvh_comhen.htm" rel="noopener noreferrer" target="_blank">
            Source
          </a>)
        </p>

        <div className="divider"></div>
      </>
    );
  }
}
