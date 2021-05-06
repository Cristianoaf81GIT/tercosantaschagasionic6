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
  
  const BeadsComponent: React.FC = () => {
    
    const [colors, setColors] = React.useState({
      item1: 'light',
      item2: 'light',
      item3: 'light',
      item4: 'light',
      item5: 'light',
      item6: 'light',
      item7: 'light',
      item8: 'light',
      item9: 'light',
      item10: 'light',
    });

    const changeColor = (color: string, index: number): void => {
      let ObjectItem = `item${index}`;
      setColors({...colors, [ObjectItem]: color});      
    }

    return (
      <IonRow className="beads-row">
        <IonCol size="2">
          
            <IonFabButton size="small" color={colors.item10} onClick={() => changeColor('primary',10)}/>
            <IonFabButton size="small" color={colors.item9} onClick={() => changeColor('primary',9)}/>
            <IonFabButton size="small" color={colors.item8} onClick={() => changeColor('primary',8)}/>
            <IonFabButton size="small" color={colors.item7} onClick={() => changeColor('primary',7)}/>
            <IonFabButton size="small" color={colors.item6} onClick={() => changeColor('primary',6)}/>         
        
          
            <IonFabButton size="small" color={colors.item5} onClick={() => changeColor('primary',5)}/>
            <IonFabButton size="small" color={colors.item4} onClick={() => changeColor('primary',4)}/>
            <IonFabButton size="small" color={colors.item3} onClick={() => changeColor('primary',3)}/>
            <IonFabButton size="small" color={colors.item2} onClick={() => changeColor('primary',2)}/>
            <IonFabButton size="small" className="bead" color={colors.item1} onClick={() => changeColor('primary',1)}/>
          
        </IonCol>       
      </IonRow>     
    );
  };

  const handleShow = () => {    
    let currentValue = show;
    setShow(!currentValue);
  }
  return (
    <div>            
      {
        show === true && <BeadsComponent/>
      }    
    <IonFab vertical="bottom" horizontal="end" slot="fixed" className="fab" onClick={() => handleShow()}>     
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
