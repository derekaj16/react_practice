import React, { Component } from 'react';

export class Header extends Component {
    static displayName = Header.name;

    render() {
        return (
            <div>
                <h1 class="text-center m-5">MARCH MADNESS</h1>
                <h4 class="mb-5">
                    Welcome to the page that has everything you need to know about
                    the teams of March Madness. In each of the sections below, you
                    will find the NEED-TO-KNOW information about each of the teams.
                    Make your bracket predictions wisely.
                </h4>
            </div> 
        );
    }
}
