import { FC, memo } from 'react';

import classes from './LogIn.module.css';
import { MdiGoogleIcon } from './MdiGoogleIcon';
import { Vector1Icon } from './Vector1Icon';
import { Vector23Icon } from './Vector23Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
  classes?: {
    unsplashQBaZ0nmS2zY?: string;
    helloWelcomeToHomebrid?: string;
    login?: string;
    rectangle1?: string;
    rectangle4?: string;
    logIntoAccount?: string;
    bolakojiGmailCom?: string;
    rectangle2?: string;
    emailAddress?: string;
    password?: string;
    rectangle3?: string;
    keepMeLogedIn?: string;
    forgotenPassword?: string;
    vector1?: string;
    donTHaveAnAccount?: string;
    signIn?: string;
    rectangle5?: string;
    signInWithGoogle?: string;
    mdiGoogle?: string;
    vector?: string;
    vector2?: string;
    vector23?: string;
    unnamed?: string;
    homebridLogoMain1?: string;
  };
}
export const LogIn: FC<Props> = memo(function LogIn(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.unsplashQBaZ0nmS2zY} ${props.classes?.unsplashQBaZ0nmS2zY || ''}`}></div>
      <div className={`${classes.helloWelcomeToHomebrid} ${props.classes?.helloWelcomeToHomebrid || ''}`}>
        Hello,Welcome To Homebrid{' '}
      </div>
      <div className={`${classes.login} ${props.classes?.login || ''}`}>Login</div>
      <div className={`${classes.rectangle1} ${props.classes?.rectangle1 || ''}`}></div>
      <div className={`${classes.rectangle4} ${props.classes?.rectangle4 || ''}`}></div>
      <div className={`${classes.logIntoAccount} ${props.classes?.logIntoAccount || ''}`}>Log into Account</div>
      <div className={`${classes.bolakojiGmailCom} ${props.classes?.bolakojiGmailCom || ''}`}>bolakoji@gmail.com</div>
      <div className={`${classes.rectangle2} ${props.classes?.rectangle2 || ''}`}></div>
      <div className={`${classes.emailAddress} ${props.classes?.emailAddress || ''}`}>Email Address</div>
      <div className={`${classes.password} ${props.classes?.password || ''}`}>Password</div>
      <div className={`${classes.rectangle3} ${props.classes?.rectangle3 || ''}`}></div>
      <div className={`${classes.keepMeLogedIn} ${props.classes?.keepMeLogedIn || ''}`}>Keep me loged in </div>
      <div className={`${classes.forgotenPassword} ${props.classes?.forgotenPassword || ''}`}>Forgoten Password?</div>
      <Vector1Icon className={`${classes.vector1} ${props.classes?.vector1 || ''}`} />
      <div className={`${classes.donTHaveAnAccount} ${props.classes?.donTHaveAnAccount || ''}`}>
        Don't have an account?
      </div>
      <div className={`${classes.signIn} ${props.classes?.signIn || ''}`}>Sign in</div>
      <div className={`${classes.rectangle5} ${props.classes?.rectangle5 || ''}`}></div>
      <div className={`${classes.signInWithGoogle} ${props.classes?.signInWithGoogle || ''}`}>Sign in with Google</div>
      <MdiGoogleIcon className={`${classes.mdiGoogle} ${props.classes?.mdiGoogle || ''}`} />
      <VectorIcon className={`${classes.vector} ${props.classes?.vector || ''}`} />
      <VectorIcon2 className={`${classes.vector2} ${props.classes?.vector2 || ''}`} />
      <Vector23Icon className={`${classes.vector23} ${props.classes?.vector23 || ''}`} />
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}>********</div>
      <div className={`${classes.homebridLogoMain1} ${props.classes?.homebridLogoMain1 || ''}`}></div>
    </div>
  );
});
