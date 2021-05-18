import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import prayIcon from '../components/menu/pray.svg';
import mondayIcon from '../components/menu/monday.svg';
import tuesDayIcon from '../components/menu/tuesDay.svg';
import wednesdayIcon from '../components/menu/wednesday.svg';
import thursdayIcon from '../components/menu/thursday.svg';
import fridayIcon from '../components/menu/friday.svg';
import saturdayIcon from '../components/menu/saturday.svg';
import sundayIcon from '../components/menu/sunday.svg';
import Logo from '../components/menu/logo.jpg';

import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Como Rezar',
    url: '/page/comorezar?title=Como Rezar',
    iosIcon: prayIcon,
    mdIcon: prayIcon
  },
  {
    title: 'Segunda-Feira',
    url: '/page/segunda?title=Segunda-feira',
    iosIcon: mondayIcon,
    mdIcon: mondayIcon
  },
  {
    title: 'Terça-Feira',
    url: '/page/segunda?title=Terça-feira',
    iosIcon: tuesDayIcon,
    mdIcon: tuesDayIcon
  },
  {
    title: 'Quarta-Feira',
    url: '/page/segunda?title=Quarta-feira',
    iosIcon: wednesdayIcon,
    mdIcon: wednesdayIcon
  },
  {
    title: 'Quinta-Feria',
    url: '/page/segunda?title=Quinta-feira',
    iosIcon: thursdayIcon,
    mdIcon: thursdayIcon
  },
  {
    title: 'Sexta-Feira',
    url: '/page/segunda?title=Sexta-feira',
    iosIcon: fridayIcon,
    mdIcon: fridayIcon
  },
  {
    title: 'Sábado',
    url: '/page/segunda?title=sábado',
    iosIcon: saturdayIcon,
    mdIcon: saturdayIcon
  },
  {
    title: 'Domingo',
    url: '/page/segunda?title=domingo',
    iosIcon: sundayIcon,
    mdIcon: sundayIcon
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader style={ styles.listHeader }>
            
            <img src={ Logo } style={ styles.listHeaderImage }/>

            <p style={styles.listHeaderParagraph}>
              Terço das Santas Chagas
            </p>

          </IonListHeader>          

          {appPages.map((appPage, index) => {
            return (
              
              <IonMenuToggle key={index} autoHide={false}>               
                
                <IonItem 
                  className={location.pathname === appPage.url ? 'selected' : ''} 
                  routerLink={appPage.url} routerDirection="none" 
                  lines="none" 
                  detail={false}
                >
                  <IonIcon 
                    slot="start" 
                    ios={appPage.iosIcon} 
                    md={appPage.mdIcon} 
                    color="primary"
                  />
                  
                  <IonLabel><p>{appPage.title}</p></IonLabel>
                
                </IonItem>

              </IonMenuToggle>
            );
          })}

        </IonList>

      </IonContent>

    </IonMenu>
  );
};

const styles = {
  listHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  listHeaderParagraph: {
    color:'var(--ion-color-primary)',
    fontSize: 16
  },
  listHeaderImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '100px',
    borderRadius: '50%'
  }
}

export default Menu;
