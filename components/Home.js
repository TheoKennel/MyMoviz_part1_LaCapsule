import {React, useState } from 'react';
import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
import Movie from './Movie'

const imageStyle1 = {'width': '180px', 'height':'55px', 'margin-left': '10px'}
const imageStyle2 = {'width': '180px', 'height':'75px', 'margin-left': '10px'}

function Home() {
  
  const [open, setOpen] = useState(false)
  const hide = () => {
    setOpen(false)
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen)
  };

  const cartHome = []
  for (let i = 0; i < 10; i++) {
    cartHome.push(<Movie/>)
    
  }
  return (
    <div> 
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>   
        </h1> */}
        <div className={styles.headerStyle}>
        <div className={styles.header__img}>
          <img src="logo.png" alt="Logo" style={imageStyle1} />
          <img src="logoletter.png" alt="Letter logo" style={imageStyle2} />
          </div>
        <Popover
        placement="bottom"
          content={
            <div>
              <p>Movie 1</p>
              <p>Movie 2</p>
            </div>
          }
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
            >
          <Button type='primary' className={styles.header__button}>♥ 4 movie(s)</Button>
        </Popover>
        </div>
        <div className={styles.body}>
          <h3>LAST RELEASES</h3>
        <div className={styles.body__cart}>
          {cartHome}
        </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
