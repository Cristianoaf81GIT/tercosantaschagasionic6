import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import SplashScreen from '../components/SplashScreenContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>      

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          name === 'splash' 
          ? <SplashScreen/> 
          : (
              <div>
                <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>{name}</IonTitle>
                </IonToolbar>
                </IonHeader>

                <ExploreContainer name={name} />

              </div>
            )
        }
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
