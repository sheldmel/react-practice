import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Foodie</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Table full of food"/>
        </div>
    </Fragment>
  )
}

export default Header