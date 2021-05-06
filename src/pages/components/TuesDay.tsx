import React, {useState, useEffect} from "react";
import { IonButton, IonRow, IonCol, useIonAlert } from "@ionic/react";
import Swal from 'sweetalert2';

const Tuesday: React.FC = (): JSX.Element => {
  const [alert] = useIonAlert();
  const [screenWidth, setScreeWidth] = useState<Number>(window.innerWidth);

  const showModal = (item: number): void => {
    const TuesDayAlertText: Map<number, any> = new Map([
      [
        1,
        {
          title: "1º mistério:",
          text: `"47.Ele ainda falava, quando apareceu uma multidão de gente; 
          e à testa deles vinha um dos Doze, que se chamava Judas. 
          Achegou-se de Jesus para o beijar. 48.Jesus perguntou-lhe: 
          “Judas, com um beijo trais o Filho do Homem!”.
          54.Prenderam-no então e conduziram-no à casa do príncipe dos sacerdotes. 
          Pedro seguia-o de longe."          
        `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"12.Pilatos falou-lhes outra vez: 
          “E que quereis que eu faça daquele a quem chamais o rei dos judeus?”. 
          13.Eles tornaram a gritar: “Crucifica-o!”. 14.Pilatos replicou: 
          “Mas que mal fez ele?”. Eles clamavam mais ainda: “Crucifica-o!”. 
          15.Querendo Pilatos satisfazer o povo, soltou-lhes Barra­bás e entregou Jesus, 
          depois de açoitado, para que fosse crucificado. (= Mt 27,27-31 = Jo 19,2s)"          
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"22.Conduziram Jesus ao lugar chamado Gólgota, 
          que quer dizer lugar do crânio. 
          23.Deram-lhe de beber vinho misturado com mirra, 
          mas ele não o aceitou. 24.Depois de o terem crucificado,
          repartiram as suas vestes, tirando à sorte sobre elas, 
          para ver o que tocaria a cada um. 
          25.Era a hora terceira quando o crucificaram."
          `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"44.Era quase à hora sexta e em toda a terra houve trevas 
          até a hora nona.* 45.Escureceu-se o sol e o véu do templo 
          rasgou-se pelo meio. 46.Jesus deu então um grande brado e disse: 
          “Pai, nas tuas mãos entrego o meu espírito”. 
          E, dizendo isso, expirou.*"
          `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"32.Vieram os soldados e quebraram as pernas 
          do primeiro e do outro, que com ele foram crucificados. 
          33.Chegando, porém, a Jesus, como o vissem já morto, 
          não lhe quebraram as pernas, 34.mas um dos soldados 
          abriu-lhe o lado com uma lança e, imediatamente, 
          saiu sangue e água."
          `,
        },
      ],
    ]);
    if (screenWidth <= 1024 && /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        
        alert({
          cssClass: 'alert-body',
          header: TuesDayAlertText.get(item).title,
          message: TuesDayAlertText.get(item).text,
          buttons: ["fechar"],
          onDidDismiss: () => {},
        });
        
    } else {
        
        Swal.fire( {
            title: TuesDayAlertText.get(item).title,
            text: TuesDayAlertText.get(item).text,
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
          1º A traição de Judas e a prisão de Jesus. <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (LC 22 47-48,54.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º A condenação de Jesus a morte. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (MC 15 12-15.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º Jesus é pregado na cruz. <br />
          <p className="button-text" onClick={() => showModal(3)}>(MC 15 22-25.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º Jesus entrega-se ao pai e morre na cruz. <br />
          <p className="button-text" onClick={() => showModal(4)}>(LC 23 44-46.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º Jesus é transpassado pela lança do soldado. <br />
          <p className="button-text" onClick={() => showModal(5)}>(JO 19 32-34.)</p>
        </p>
      </IonCol>
      
    </IonRow>       
  );
};

export default Tuesday;
