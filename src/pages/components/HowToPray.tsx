import {IonRow, IonCol } from '@ionic/react';

const styles: any = {
  contentBody: {
    textAlign: 'justify',
    textJustify: 'distribute',
    fontSize: '0.9rem',
    marginTop: 0,
    padding: 0,
    color: '#5d5d5d !important',
  }
}

const HowToPray: React.FC = () => {
    return (
        <IonRow>
          <IonCol size="12" className="content-title">
            No início:
          </IonCol>

          <IonCol size="12">
            <p style={styles.contentBody}>
              Fazer o sinal da Cruz, rezar o creio e após…
            </p>                  
            <p style={styles.contentBody}>
              Oh! Jesus, Divino Redentor, tende Misericórdia de nós e do
              mundo inteiro. Deus Santo, Deus Forte, Deus Imortal, tende
              piedade de nós e do mundo inteiro. Graça, Misericórdia, Meu
              Jesus; nos perigos presentes, cobri-nos com Vosso
              preciosíssimo Sangue.
            </p>                  
            <p style={styles.contentBody}>
              Eterno Pai, tende Misericórdia de nós, pelo Sangue de Jesus
              Cristo, Vosso Filho Unigênito, tende Misericórdia de nós,
              Vos suplicamos. Amém.
            </p>
          </IonCol>

          <IonCol size="12">
            <p className="content-title">Contas grandes:</p>
            <p style={styles.contentBody}>
              Eterno Pai, eu Vos ofereço as santas Chagas de Nosso Senhor
              Jesus Cristo; Para curar as de nossas almas.</p>
            <p className="content-title">Contas pequenas:</p>
            <p style={styles.contentBody}>
              Meu Jesus, perdão e misericórdia: Pelos méritos de Vossas
              Santas Chagas.</p>
            <p className="content-title">Terminando o rosário:</p>
            <p style={styles.contentBody}>
              deve-se rezar três vezes: Eterno Pai, eu Vos ofereço as Santas
              Chagas de Nosso Senhor Jesus Cristo; Para curar as de nossas
              almas. Amém.</p>
          </IonCol>          
        </IonRow>
      );
} 



export default HowToPray;