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
} from "@ionic/react";
import React from "react";
import { useParams, useLocation } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import SplashScreen from "../components/SplashScreenContainer";
import HowToPray from './components/HowToPray';
import "./Page.css";

function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

interface ResolveContentProps {
  title: string | null;
}

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const query = useQuery();

  const ResolveContent: React.FC<ResolveContentProps> = ({ title }) => {
    const content = () => {
      if (title) {
        switch (title) {
          case "Como Rezar":
            return <HowToPray/>
          case "Segunda-feira":
            return `Conteúdo segunda feira`;
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
                  <IonMenuButton/>
                </IonButtons>
                <IonTitle>{"Terço das santas chagas"}</IonTitle>
              </IonToolbar>
            </IonHeader>

            <ExploreContainer>
              <ResolveContent title={String(query.get("title"))} />
            </ExploreContainer>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
