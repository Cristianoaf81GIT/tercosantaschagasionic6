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
          text: `"5.Disse-lhe Tomé: “Senhor, não sabemos para onde vais. 
          Como podemos conhecer o caminho?”. 6.Jesus lhe respondeu: 
          “Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai senão por mim. 
          7.Se me conhecêsseis, também certamente conheceríeis meu Pai; 
          desde agora já o conheceis, pois o tendes visto”."
          "                    
        `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"46.Chegaram a Jericó. Ao sair dali Jesus, seus discípulos e numerosa multidão,
           estava sentado à beira do caminho, mendigando, Bartimeu, que era cego, 
           filho de Timeu. 47.Sabendo que era Jesus de Nazaré, começou a gritar: 
           “Jesus, filho de Davi, tem compaixão de mim!”. 48.Muitos o repreendiam, 
           para que se calasse, mas ele gritava ainda mais alto: “Filho de Davi, 
           tem compaixão de mim!”. 49.Jesus parou e disse: “Chamai-o”. Chamaram o cego, 
           dizendo-lhe: “Coragem! Levanta-te, ele te chama”. 50.Lançando fora a capa,
            o cego ergueu-se de um salto e foi ter com ele. 51.Jesus, tomando a palavra, 
            perguntou-lhe: “Que queres que te faça?” “Rabôni” –, respondeu-lhe o cego – 
            “que eu veja!”.  52.Jesus disse-lhe: “Vai, a tua fé te salvou”. No mesmo instante, 
            ele recuperou a vista e foi seguindo Jesus pelo caminho."
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"1.“Eu sou a videira verdadeira, e meu Pai é o agri­cul­tor. 
          Todo ramo que não der fruto em mim, ele o cortará;
          2.e podará todo o que der fruto, para que produza mais fruto.
           3.Vós já estais puros pela palavra que vos tenho anunciado. 
           4.Permanecei em mim e eu permanecerei em vós. O ramo não pode dar fruto por si mesmo, 
           se não permanecer na videira. Assim também vós: não podeis tampouco dar fruto, 
           se não permanecerdes em mim. 5.Eu sou a videira; vós, os ramos. 
           Quem permanecer em mim e eu nele, esse dá muito fruto; porque 
           sem mim nada podeis fazer. ADVERTISEMENT 6.Se alguém não permanecer 
           em mim será lançado fora, como o ramo. Ele secará e hão de ajuntá-lo 
           e lançá-lo ao fogo, e será queimado."
         `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"1.Jesus entrou em Jeri­có e ia atra­vessando a cidade.
          2.Havia aí um homem muito rico chamado Zaqueu, chefe dos recebedores de impostos. 
          3.Ele procurava ver quem era Jesus, mas não o conseguia por causa da multidão, 
          porque era de baixa estatura. 4.Ele correu adiante, subiu a um sicômoro para o ver, 
          quando ele passasse por ali. 5.Chegando Jesus àquele lugar e levantando os olhos, 
          viu-o e disse-lhe: “Zaqueu, desce depressa, porque é preciso que eu fique hoje em tua casa.” ADVERTISEMENT 6.Ele desceu a toda a pressa e recebeu-o alegremente. 7.Vendo isso, todos murmuravam e diziam: “Ele vai hospedar-se em casa de um pecador...”. 8.Zaqueu, entretanto, de pé diante do Senhor, disse-lhe: “Senhor, vou dar a metade dos meus bens aos pobres e, se tiver defraudado alguém, restituirei o quádruplo”. 9.Disse-lhe Jesus: “Hoje entrou a salvação nesta casa, porquanto também este é filho de Abraão. 10.Pois o Filho do Homem veio procurar e salvar o que estava perdido”."
          `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"22.Logo depois, Jesus obrigou seus discípulos a entrar na barca e a passar 
          antes dele para a outra margem, enquanto ele despedia a multidão. 
          23.Feito isso, subiu à montanha para orar na solidão. E, 
          chegando a noite, estava lá sozinho. 24.Entretanto, já a boa distância da margem, 
          a barca era agitada pelas ondas, pois o vento era contrário. 
          25.Pela quarta vigília da noite, Jesus veio a eles, caminhando sobre o mar.
          26.Quando os discípulos o perceberam caminhando sobre as águas, ficaram com medo: 
          “É um fantasma!” – disseram eles –, soltando gritos de terror. 
          27.Mas Jesus logo lhes disse: “Tranquilizai-vos, sou eu. Não tenhais medo!”."
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
          1º Jesus se revela como o caminho a verdade e a vida. <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (JO 14 5-7.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º Jesus cura o cego bartimeu. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (MC 10 46-52)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º Jesus se apresenta como a videira verdadeira. <br />
          <p className="button-text" onClick={() => showModal(3)}>(JO 15 1-6.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º O encontro de Jesus com Zaqueu. <br />
          <p className="button-text" onClick={() => showModal(4)}>(LC 19 1-10.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º Jesus anda sobre as águas. <br />
          <p className="button-text" onClick={() => showModal(5)}>(MT 14 22-27.)</p>
        </p>
      </IonCol>
      
    </IonRow>       
  );
};

export default Fryday;
