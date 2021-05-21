import React, {useState, useEffect} from "react";
import { IonButton, IonRow, IonCol, useIonAlert } from "@ionic/react";
import Swal from 'sweetalert2';

const Fryday: React.FC = (): JSX.Element => {
  const [alert] = useIonAlert();
  const [screenWidth, setScreeWidth] = useState<Number>(window.innerWidth);

  const showModal = (item: number): void => {
    const FridayAlertText: Map<number, any> = new Map([
      [
        1,
        {
          title: "1º mistério:",
          text: `"41.Depois se afastou deles à distância de um tiro de pedra e,
           ajoelhando-se, orava: 42.“Pai, se é de teu agrado, 
           afasta de mim este cálice! Não se faça, todavia, a minha vontade,
            mas sim a tua”. 43.Apareceu-lhe então um anjo do céu para confortá-lo. 
            44.Ele entrou em agonia e orava ain­da com mais instância, e 
            seu suor tornou-se como gotas de sangue a escorrer pela terra. 
            45.Depois de ter rezado, levantou-se, foi ter com os discípulos 
            e achou-os adormecidos de tristeza. 46.Disse-lhes: “Por que dormis? 
            Levantai-vos, orai, para não cairdes em tentação”."
          `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"17.Levaram então consigo Jesus. Ele próprio carregava a sua cruz para fora da cidade,
           em direção ao lugar chamado Calvário, em hebraico Gólgota.
           18.Ali o crucificaram, e com ele outros dois, um de cada lado, e Jesus no meio."
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"33.Chegados que foram ao lugar chamado Calvário, ali o crucificaram,
           como também os ladrões, um à direita e outro à esquerda. 34.E Jesus dizia: 
           “Pai, perdoa-lhes; porque não sabem o que fazem”. 
           Eles dividiram as suas vestes e as sortearam."
          `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"25.Junto à cruz de Jesus estavam de pé sua mãe, a irmã de sua mãe,
           Maria, mulher de Cléofas, e Maria Madalena. 26.Quando Jesus viu sua mãe 
           e perto dela o discípulo que amava, disse à sua mãe: “Mulher, eis aí teu filho”.
            27.Depois disse ao discípulo: “Eis aí tua mãe”.
            E dessa hora em diante o discípulo a recebeu como sua mãe."
          `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"44.Era quase à hora sexta e em toda a terra houve trevas até a hora nona. 
          45.Escureceu-se o sol e o véu do templo rasgou-se pelo meio. 
          46.Jesus deu então um grande brado e disse: “Pai, nas tuas mãos entrego o meu espírito”. 
          E, dizendo isso, expirou.
           47.Vendo o centurião o que acontecia, deu glória a Deus e disse: 
           “Na verdade, este homem era um justo”. 
           48.E toda a multidão dos que assistiam a esse espetáculo e viam o 
           que se passava voltou batendo no peito. 49.Os amigos de Jesus, 
           como também as mulheres que o tinham seguido desde a Galileia, 
           conservavam-se a certa distância, e observavam estas coisas."
          `,
        },
      ],
    ]);
    if (screenWidth <= 1024 && /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        
        alert({
          cssClass: 'alert-body',
          header: FridayAlertText.get(item).title,
          message: FridayAlertText.get(item).text,
          buttons: ["fechar"],
          onDidDismiss: () => {},
        });
        
    } else {
        
        Swal.fire( {
            title: FridayAlertText.get(item).title,
            text: FridayAlertText.get(item).text,
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
          1º A tristeza mortal e a angonia de Jesus no Getsêmani. <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (LC 22 41-46.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º Jesus carrega a cruz. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (JO 19 17-18)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º A crucificação de Jesus. <br />
          <p className="button-text" onClick={() => showModal(3)}>(LC 23 33-34.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º Jesus nos dá Maria, sua própria mãe, como nossa mãe. <br />
          <p className="button-text" onClick={() => showModal(4)}>(JO 19 25-27.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º A morte de Jesus na cruz. <br />
          <p className="button-text" onClick={() => showModal(5)}>(LC 23 44-49.)</p>
        </p>
      </IonCol>
      
    </IonRow>       
  );
};

export default Fryday;
