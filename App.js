import React from 'react';
import VolumeBalok from './src/00persiapan/VolumeBalok';
import HelloWorld from './src/00persiapan/HelloWorld';
import BelajarLayout from './src/01Layout/BelajarLayout';
import TugasLayout from './src/01Layout/TugasLayout';
import VolumeKeliling from './src/00persiapan/VolumeKeliling';
import Menu from './src/02Komponen/Kasir/Menu';
import KomponenCustom from "./src/02Komponen/KomponenCustom";
import SimpeSiak from './src/02Komponen/SimpleSiak';
import Cuaca1 from "./src/04API/Cuaca1";
import Cuaca2 from "./src/04API/Cuaca2";
export default class App extends React.Component{
  render (){
    return (
      <Cuaca1/>
      );
  }
}
