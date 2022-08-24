import React from 'react';
import alimentacao from '../../assets/images/alimentacao.svg' 
import outros from '../../assets/images/outros.svg' 
import saude from '../../assets/images/saude.svg' 
import transporte from '../../assets/images/transporte.svg' 
import utilidades from '../../assets/images/utilidades.svg' 
import { ImageIconTema } from '../UI';

export default (type) => {
  const Images ={
    Restaurante : <ImageIconTema src={alimentacao} alt="Restaurante"/>,
    Utilidades : <ImageIconTema src={utilidades} alt="Utilidades"/>,
    Saude : <ImageIconTema src={saude} alt="Saude"/>,
    Transporte : <ImageIconTema src={transporte} alt="Transporte"/>,
    default : <ImageIconTema src={outros} alt="Outros"/>
  };
  return Images[type] || Images.default;
}



