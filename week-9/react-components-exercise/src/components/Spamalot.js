import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot = () => [...Array(500)].map(() => <Spam />)

export default Spamalot

