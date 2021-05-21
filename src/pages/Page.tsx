import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFab,
  IonFabButton,   
} from "@ionic/react";
import React from "react";
import { useParams, useLocation } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import SplashScreen from "../components/SplashScreenContainer";
import HowToPray from "./components/HowToPray";
import Monday from "./components/Monday";
import Tuesday from "./components/TuesDay";
import Wednesday from "./components/Wednesday";
import Thursday from "./components/Thursday";
import Friday from "./components/Friday";
import Saturday from "./components/Saturday";
import Sunday from "./components/Sunday";
import { BeadsComponent } from "./components/Beads";

import rosaryIcon from "../components/menu/rosary.svg";
import "./Page.css";


function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

interface ResolveContentProps {
  title: string | null;
}


const ShowBeads: React.FC = (): JSX.Element => {
  
  const [show, setShow] = React.useState(false);  

  const handleShow = () => {    
    let currentValue = show;
    setShow(!currentValue);
  }
  return (
    <div>            
      {
        show === true && <BeadsComponent/>
      }    
    <IonFab 
      vertical="bottom" 
      horizontal="end" 
      slot="fixed" 
      className="fab" 
      onClick={() => handleShow()}
    >     
      <IonFabButton>
        <IonIcon icon={rosaryIcon}/>
      </IonFabButton>      
    </IonFab>
    </div>
  );
}

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const query = useQuery();

  const ResolveContent: React.FC<ResolveContentProps> = ({ title }) => {
    const content = () => {
      if (title) {
        switch (title) {
          case "Como Rezar":
            return <HowToPray/>;
          case "Segunda-feira":
            return <Monday />;
          case "Terça-feira":
            return <Tuesday/>
          case "Quarta-feira":
            return <Wednesday/>
          case "Quinta-feira":
            return <Thursday/>
          case "Sexta-feira":
            return <Friday/>
          case "Sábado":
            return <Saturday/>
          case "Domingo":
            return <Sunday/>
          default:
            break;
        }
      }
    };

    return (
      <React.Fragment>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h1 className="content-title-h1">{title}</h1>
            </IonCol>
          </IonRow>
          {content()}
        </IonGrid>
      </React.Fragment>
    );
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">{query.get("title")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name === "splash" ? (
          <SplashScreen />
        ) : (
          <div>
            <IonHeader>
              <IonToolbar color="primary">
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
                <IonTitle>{"Terço das santas chagas"}</IonTitle>
              </IonToolbar>
            </IonHeader>

            <ExploreContainer>
              <ResolveContent title={String(query.get("title"))} />
            </ExploreContainer>
            {
              query.get('title') !== 'Como Rezar' &&
              (<ShowBeads/>)
            }
            
          </div>
        )}        
      </IonContent>      
    </IonPage>
  );
};

export default Page;
