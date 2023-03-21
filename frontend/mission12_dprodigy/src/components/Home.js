import React, { Component } from 'react';
import { Header } from './Header';
import { TeamList } from './TeamList';

export class Home extends Component {
  static displayName = Home.name;

  render() {
     return (
        <div class="row">
            <div class="col col-2"></div>
            <div class="col col-8">
                <Header />
                <TeamList />
            </div>
            <div class="col col-2"></div>
        </div>
    );
  }
}
