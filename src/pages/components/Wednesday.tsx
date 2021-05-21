import React, {useState, useEffect} from "react";
import { IonButton, IonRow, IonCol, useIonAlert } from "@ionic/react";
import Swal from 'sweetalert2';

const Wednesday: React.FC = (): JSX.Element => {
  const [alert] = useIonAlert();
  const [screenWidth, setScreeWidth] = useState<Number>(window.innerWidth);

  const showModal = (item: number): void => {
    const WednesDayAlertText: Map<number, any> = new Map([
      [
        1,
        {
          title: "1º mistério:",
          text: `"15.Perguntou-lhe Jesus: “Mulher, por que choras? Quem procuras?”. 
          Supondo ela que fosse o jardineiro, res­pondeu: “Senhor, se tu o tiraste,
           dize-me onde o puseste e eu o irei buscar”. 16.Disse-lhe Jesus: “Maria!” 
           Voltando-se ela, exclamou em hebraico: “Rabôni!” (que quer dizer Mestre)."                    
        `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"15.Enquanto iam conversando e discorrendo entre si, o mesmo Jesus aproximou-se deles e caminhava com eles. 
          16.Mas os olhos estavam-lhes como que vendados e não o reconheceram.
          "28.Aproximaram-se da aldeia para onde iam e ele fez como se quisesse passar adiante. 
          29.Mas eles forçaram-no a parar: “Fica conosco, já é tarde e já declina o dia”. Entrou então com eles. 
          30.Aconteceu que, estando sentado conjuntamente à mesa, ele tomou o pão, abençoou-o, partiu-o e serviu-lho.
          31.Então, se lhes abriram os olhos e o reconheceram... mas ele desapareceu."
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"36.Enquanto ainda falavam dessas coisas, Jesus apresentou-se no meio deles e disse-lhes: 
          “A paz esteja convosco!”. 37.Perturbados e espantados, pensaram estar vendo um espírito. 
          38.Mas ele lhes disse: “Por que estais perturbados, e por que essas dúvidas nos vossos corações? 
          39.Vede minhas mãos e meus pés, sou eu mesmo; apalpai e vede: um espírito não tem carne nem ossos, 
          como vedes que tenho”. 40.E, dizendo isso, mostrou-lhes as mãos e os pés. 41.Mas, 
          vacilando eles ainda e estando transportados de alegria, 
          perguntou: “Tendes aqui alguma coisa para comer?”."
          `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"26.Oito dias depois, estavam os seus discípulos outra vez no mesmo lugar e Tomé com eles.
           Estando trancadas as portas, veio Jesus, pôs-se no meio deles e disse: 
           “A paz esteja convosco!”. 
           27.Depois disse a Tomé: “Introduz aqui o teu dedo, e vê as minhas mãos. 
           Põe a tua mão no meu lado. Não sejas incrédulo, mas homem de fé”. 
           28.Respondeu-lhe Tomé: “Meu Senhor e meu Deus!”."
         `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"16.Os onze discípulos foram para a Galileia, para a montanha que Jesus lhes tinha designado. 
          17.Quando o viram, adoraram-no; entretanto, alguns hesitavam ain­da. 
          18.Mas Jesus, aproximando-se, lhes disse: “Toda autoridade me foi dada no céu e na terra. 
          19.Ide, pois, e ensinai a todas as nações; batizai-as em nome do Pai, do Filho e do Espírito Santo. 
          20.Ensinai-as a observar tudo o que vos prescrevi. Eis que estou convosco todos os dias, até o fim do mundo”."
          `,
        },
      ],
    ]);
    if (screenWidth <= 1024 && /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        
        alert({
          cssClass: 'alert-body',
          header: WednesDayAlertText.get(item).title,
          message: WednesDayAlertText.get(item).text,
          buttons: ["fechar"],
          onDidDismiss: () => {},
        });
        
    } else {
        
        Swal.fire( {
            title: WednesDayAlertText.get(item).title,
            text: WednesDayAlertText.get(item).text,
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
          1º Jesus ressucitado aparece a Maria Madalena. <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (JO 20 15-16.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º Jesus ressucitado acompanha os discípulos Emaús. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (LC 24 15-16.28-31)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º Jesus aparece aos seus discípulos desejando-lhes a paz. <br />
          <p className="button-text" onClick={() => showModal(3)}>(LC 24 36-41.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º Jesus cura a incredulidade de Tomé. <br />
          <p className="button-text" onClick={() => showModal(4)}>(JO 20 26-28.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º Jesus envia os apóstolos em missão. <br />
          <p className="button-text" onClick={() => showModal(5)}>(MT 28 16-20.)</p>
        </p>
      </IonCol>
      
    </IonRow>       
  );
};

export default Wednesday;
