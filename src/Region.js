import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import North from './North.js';
import Middle from './Middle.js';
import South from './South.js';
import banhMi from './img/banh-mi.jpg';
import bunBoHue from './img/bun-bo-hue.jpg';
import bunCha from './img/bun-cha.jpg';
import bunDauMamTom from './img/bun-dau-mam-tom.jpg';
import caoLau from './img/cao-lau.jpg';
import comHen from './img/com-hen.jpg';
import comTam from './img/com-tam.jpg';
import lauMam from './img/lau-mam.jpg';
import pho from './img/pho.jpg';
import tra from './img/tra.jpg';


export default class Region extends Component {
  getPageJsx() {
    let jsx;
    switch (this.props.page) {
      case 'north':
        jsx = (<North/>);
        break;
      case 'middle':
        jsx = (<Middle/>);
        break;
      case 'south':
        jsx = (<South/>);
        break;
      default:
        jsx = (<></>);
    }
    return jsx;
  }

  render() {
    return (
      <>
        <main className="main-content">
          {this.getPageJsx()}
        </main>
        <div className="left-col">
          <section>
            <Link to="/south" onClick={() => this.props.updatePage('south', 'banh-mi')}>
              <h2>Banh Mi</h2>
              <img src={banhMi} alt="banh mi" />
            </Link>
          </section>
          <section>
            <Link to="/middle" onClick={() => this.props.updatePage('middle', 'bun-bo-hue')}>
              <h2>Bun Bo Hue</h2>
              <img src={bunBoHue} alt="bun bo hue" />
            </Link>
          </section>
          <section>
            <Link to="/north" onClick={() => this.props.updatePage('north', 'bun-cha')}>
              <h2>Bun Cha</h2>
              <img src={bunCha} alt="bun cha" />
            </Link>
          </section>
          <section>
            <Link to="/north" onClick={() => this.props.updatePage('north', 'bun-dau-mam-tom')}>
              <h2>Bun Dau Mam Tom</h2>
              <img src={bunDauMamTom} alt="bun dau mam tom" />
            </Link>
          </section>
          <section>
            <Link to="/middle" onClick={() => this.props.updatePage('middle', 'cao-lau')}>
              <h2>Cao Lau</h2>
              <img src={caoLau} alt="cao lau" />
            </Link>
          </section>
          <section>
            <Link to="/middle" onClick={() => this.props.updatePage('middle', 'com-hen')}>
              <h2>Com Hen</h2>
              <img src={comHen} alt="com hen" />
            </Link>
          </section>
          <section>
            <Link to="/south" onClick={() => this.props.updatePage('south', 'com-tam')}>
              <h2>Com Tam</h2>
              <img src={comTam} alt="com tam" />
            </Link>
          </section>
          <section>
            <Link to="/south" onClick={() => this.props.updatePage('south', 'lau-mam')}>
              <h2>Lau Mam</h2>
              <img src={lauMam} alt="lau mam" />
            </Link>
          </section>
          <section>
            <Link to="/north" onClick={() => this.props.updatePage('north', 'pho')}>
              <h2>Pho</h2>
              <img src={pho} alt="pho" />
            </Link>
          </section>
          <section>
            <Link to="/north" onClick={() => this.props.updatePage('north', 'tra')}>
              <h2>Tra</h2>
              <img src={tra} alt="vietnamese tea" />
            </Link>
          </section>
        </div>
      </>
    );
  }
}
