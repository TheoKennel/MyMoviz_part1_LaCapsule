import {React, useState } from 'react';
import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const image = {  "border-top-left-radius": "10px",   "border-top-right-radius": "10px"}

function Movie() {
    const stars = []
    for (let i = 0; i < 10; i++) {
        const element = <FontAwesomeIcon icon={faStar} size="2xs" />
        stars.push(element)
    }
    return (
    <div className={styles.movie__cart}>
        <img src='poster.jpg' alt='Poster' style={image}/>
        <h3>Name</h3>
        <p>Description</p>
        <div className={styles.movie__stars_vote}>
        {stars}
        <p>(Vote count)</p>
        </div>
    </div>
    )
  }
  
  export default Movie;