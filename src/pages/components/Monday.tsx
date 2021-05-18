import React, {useState, useEffect} from "react";
import { IonButton, IonRow, IonCol, useIonAlert } from "@ionic/react";
import Swal from 'sweetalert2';


const Monday: React.FC = (): JSX.Element => {
  const [alert] = useIonAlert();
  const [screenWidth, setScreeWidth] = useState<Number>(window.innerWidth);

  const showModal = (item: number): void => {
    const mondayAlertText: Map<number, any> = new Map([
      [
        1,
        {
          title: "1º mistério:",
          text: `"3.Os escribas e os fariseus 
            trou­xeram-lhe uma mulher que fora apanhada em adultério. 
            4.Puseram-na no meio da multidão e disseram a Jesus: 
            "Mestre, agora mesmo esta mulher foi apanhada em adultério. 
            5.Moisés mandou-nos na Lei que apedrejássemos tais mulheres. Que dizes tu sobre isso?."
            6.Perguntavam-lhe isso, a fim de pô-lo à prova e poderem acusá-lo. Jesus, 
            porém, se inclinou para a frente e escrevia com o dedo na terra. 
            7.Como eles insistissem, ergueu-se e disse-lhes: 
            "Quem de vós estiver sem pecado, seja o primeiro a lhe atirar uma pedra."
            8.Inclinando-se novamente, escrevia na terra. 
            10.Então, ele se ergueu e vendo ali apenas a mulher, 
            perguntou-lhe: "Mulher, onde estão os que te acusavam? Ninguém te condenou?." 
            11.Res­pondeu ela: "Ninguém, Senhor". Disse-lhe então Jesus: "Nem eu te condeno. 
            Vai e não tornes a pecar"."
        `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"9.Aquela samaritana lhe disse: “Sendo tu judeu, como pedes de beber a mim, que sou samaritana!...”. 
          (Pois os judeus não se comunicavam com os samaritanos.) 
          10.Respondeu-lhe Jesus: “Se conhecesses o dom de Deus, e quem é que te diz: Dá-me de beber, 
          certamente lhe pedirias tu mesma e ele te daria uma água viva”. 
          13.Respondeu-lhe Jesus: “Todo aquele que beber des­ta água tornará a ter sede, 
          14.mas o que beber da água que eu lhe der jamais terá sede. 
          Mas a água que eu lhe der virá a ser nele fonte de água, que jorrará até a vida eterna”."
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"21.Marta disse a Jesus: “Senhor, se tivesses estado aqui, meu irmão não teria morrido! 
          22.Mas sei também, agora, que tudo o que pedires a Deus, Deus te concederá”. 
          23.Disse-lhe Jesus: “Teu irmão ressurgirá”. 
          24.Respondeu-lhe Marta: “Sei que há de ressurgir na ressurreição no último dia”. 
          25.Disse-lhe Jesus: “Eu sou a ressurreição e a vida. Aquele que crê em mim, ainda que esteja morto, viverá."
          `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"11.Eu sou o bom-pastor. O bom-pastor expõe a sua vida pelas ovelhas.
          12.O mercenário, porém, que não é pastor, a quem não pertencem as ovelhas, 
          quando vê que o lobo vem vindo, abandona as ovelhas e foge; 
          o lobo rouba e dispersa as ovelhas.          
          27.As minhas ovelhas ouvem a minha voz, eu as conheço e elas me seguem. 
          28.Eu lhes dou a vida eterna; elas jamais hão de perecer, e ninguém as roubará de minha mão."          
          `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"39.Um dos malfeitores, ali crucificados, blasfemava contra ele: “Se és o Cristo, 
          salva-te a ti mesmo e salva-nos a nós!”. 40.Mas o outro o repreendeu: “Nem sequer temes a Deus, 
          tu que sofres no mesmo suplício? 
          41.Para nós isto é justo: recebemos o que mereceram os nossos crimes, mas este não fez mal algum.”
          42.E acrescentou: “Jesus, lembra-te de mim, quando tiveres entrado no teu Reino!”. 
          43.Jesus respondeu-lhe: “Em verdade te digo: hoje estarás comigo no paraíso”."                   
          `,
        },
      ],
    ]);
    if (screenWidth <= 1024 && /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     
      alert({
        cssClass: 'content-body',
        header: mondayAlertText.get(item).title,
        message: mondayAlertText.get(item).text,
        buttons: ["fechar"],
        onDidDismiss: () => {},
      });
      
    } else {
     
      Swal.fire( {
        title: mondayAlertText.get(item).title,
        text: mondayAlertText.get(item).text,
        confirmButtonText: 'fechar',
        confirmButtonColor: 'var(--ion-color-primary)',
        backdrop: false
      } ); 

    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreeWidth(window.innerWidth);
    });
    return window.removeEventListener('resize', () => {});
  }, [screenWidth]);

  return (
    <IonRow>
      <IonCol size="12">
        <p className="content-body">
          1º Jesus perdoa a mulher adultera. <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (JO 8 3-8.10-11)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º Jesus se oferece como Água viva. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (JO 4 9-10.13-14)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º Jesus consola a irmã de Lázaro. <br />
          <p className="button-text" onClick={() => showModal(3)}>(JO 11 21-25.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º Jesus se manifesta como o bom pastor <br />
          <p className="button-text" onClick={() => showModal(4)}>(JO 10 11-12.27-28)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º Jesus perdoa o bom ladrão <br />
          <p className="button-text" onClick={() => showModal(5)}>(LC 23 39-43.)</p>
        </p>
      </IonCol>
      
    </IonRow>       
  );
};

export default Monday;
