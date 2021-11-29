import React, { Component } from "react"
import styles from './drama.module.css'

class HeaderMenuButton extends Component {
    constructor() {
      super();
      this.state = {
        darkBtn: 0
      };
    }
  
    changeColor = (btn) => {
      this.setState({ darkBtn: btn });
      // console.log(this.state.darkBtn)
    };

    btns = ["전체", "기본정보", "등장인물", "공식영상", "함께 볼만한 웹드라마"];
  
    render() {
      return (
        <div className={styles.btnmenu}>
          {this.btns.map((btn, i) => (
            <div key={i} className={styles.btnmenu}>
            <button
              // key={i}
              onClick={this.changeColor.bind(this, i)}
              className={this.state.darkBtn === i ? styles.selectedMenu : ((i == 0) ? styles.firstunselectedMenu : styles.unselectedMenu) }
            >
              {btn}
            </button>
            {(i != this.btns.length - 1) && !(i === this.state.darkBtn || i + 1 === this.state.darkBtn) && <div className={styles.verticalDivider}></div>}
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default HeaderMenuButton;