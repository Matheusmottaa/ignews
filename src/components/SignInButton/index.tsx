import {FaGithub} from "react-icons/fa"; 
import {FiX} from "react-icons/fi"

import styles from "./styles.module.scss"; 

export function SingInButton(){ 

  const isUserLoggedIn = true; 

  return isUserLoggedIn ? (
    <button 
    className={styles.signInButton}
    type="button">
      <FaGithub color="#04d361"/>
      John Doe
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    className={styles.signInButton}
    type="button">
      <FaGithub color="#eba417"/>
      Sing in with Github
    </button>
  ); 
}
