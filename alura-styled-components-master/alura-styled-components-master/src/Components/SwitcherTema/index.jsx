import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { ImageIcon } from '../UI';


const claro = <ImageIcon src={ThemeOn} alt="Tema Claro"/>;
const escuro = <ImageIcon src={ThemeOff} alt="Tema Escuro"/>;


export default ({tema}) => (tema? escuro:claro);
