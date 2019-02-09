import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mainVn from './img/main.jpg';
import northVn from './img/north-vn.jpg';
import middleVn from './img/middle-vn.jpg';
import southVn from './img/south-vn.jpg';


export default class Home extends Component {
  render() {
    return (
      <>
        <main className="main-content">
          <h1>The Adventure of Tastes</h1>
          <p>
            Vietnam has a long story over 2000 years. The food is therefore very
            divergent for each area. The cuisine of each area is affected by
            weather, geography, culture. We can divide the eating and drinking
            preferences in Vietnam into three main areas: the North, the Middle and
            the South of Vietnam.
          </p>
          <img className="main-img" src={mainVn} alt="vietnam" />
          <p>Experience the diversity of Vietnamese cuisine!</p>
        </main>
        <div className="left-col">
          <section>
            <Link to="/north" onClick={() => this.props.updatePage('north')}>
              <img src={northVn} alt="north of vietnam" />
              <h2>The North of Vietnam</h2>
            </Link>
            <p>
              The North is where the capital city of Hanoi is, and it is the
              oldest area in Vietnam. The taste of the North is considered the
              standard of the traditional Vietnamese food.
            </p>
          </section>
          <section>
            <Link to="/middle" onClick={() => this.props.updatePage('middle')}>
              <img src={middleVn} alt="middle of vietnam" />
              <h2>The Middle of Vietnam</h2>
            </Link>
            <p>
              The middle of Vietnam often suffers from extreme weather. People
              struggle with living, but their extraordinary palate tells us a
              different story of their lives.
            </p>
          </section>
          <section>
            <Link to="/south" onClick={() => this.props.updatePage('south')}>
              <img src={southVn} alt="south of vietnam" />
              <h2>The South of Vietnam</h2>
            </Link>
            <p>
              It is the youngest land of Vietnam, where the culture is influenced
              by countries such as China, India, France and Cambodia.
            </p>
          </section>
        </div>
      </>
    );
  }
}
