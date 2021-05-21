import React, {useState, useEffect} from "react";
import { IonButton, IonRow, IonCol, useIonAlert } from "@ionic/react";
import Swal from 'sweetalert2';

const Sunday: React.FC = (): JSX.Element => {
  const [alert] = useIonAlert();
  const [screenWidth, setScreeWidth] = useState<Number>(window.innerWidth);

  const showModal = (item: number): void => {
    const SundayAlertText: Map<number, any> = new Map([
      [
        1,
        {
          title: "1º mistério:",
          text: `"1.No primeiro dia da semana, muito cedo, dirigiram-se ao se­pulcro com os 
          aromas que haviam preparado.2.Acharam a pedra removida longe da abertura do sepulcro.
           3.Entraram, mas não encontraram o corpo do Senhor Jesus. 4.Não sabiam elas o que pensar, 
           quando apareceram em frente delas dois personagens com vestes resplandecentes. 
           5.Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: 
           “Por que buscais entre os mortos aquele que está vivo?  
           6.Não está aqui, mas ressuscitou. Lembrai-vos de como ele vos disse, 
           quando ainda estava na Galileia: 
           7.O Filho do Homem deve ser entregue nas mãos dos pecadores e crucificado, 
           mas ressuscitará ao terceiro dia”."
          `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"1.Depois disso, tornou Jesus a ma­nifestar-se aos seus discípulos 
          junto ao lago de Tibería­des. Manifestou-se deste modo: 
          2.Estavam juntos Simão Pedro, Tomé (chamado Dídimo), 
          Natanael (que era de Caná da Galileia), os filhos de Zebedeu e outros dois dos seus discípulos. 
          3.Disse-lhes Simão Pedro: “Vou pescar”. Responderam-lhe eles: 
          “Também nós vamos contigo”. Partiram e entraram na barca. Naquela noite, porém, nada apanharam.
           4.Chegada a manhã, Jesus estava na praia. Todavia, os discípulos não o reconheceram. 
           5.Perguntou-lhes Jesus: “Amigos, não tendes acaso alguma coisa para comer?”. – “Não”, responderam-lhe. 
           6.Disse-lhes ele: “Lançai a rede ao lado direito da barca e achareis”. 
           Lançaram-na, e já não podiam arrastá-la por causa da grande quantidade de peixes. 
           7.Então, aquele discípulo a quem Jesus amava, disse a Pedro: “É o Senhor!”. 
           Quando Simão Pedro ouviu dizer que era o Senhor, cingiu-se com a túnica 
           (porque estava nu) e lançou-se às águas. 8.Os outros discípulos vieram na barca, 
           arrastando a rede dos peixes (pois não estavam longe da terra, senão cerca de duzentos côvados). 
           9.Ao saltarem em terra, viram umas brasas preparadas e um peixe em cima delas, e pão. 
           10.Disse-lhes Jesus: “Trazei aqui alguns dos peixes que agora apanhastes”. 
           11.Subiu Simão Pedro e puxou a rede para a terra, cheia de cento e cinquenta e 
           três peixes grandes. Apesar de serem tantos, a rede não se rompeu.
           12.Disse-lhes Jesus: “Vinde, comei”. Nenhum dos discípulos ousou perguntar-lhe: “Quem és tu?” –,
           pois bem sabiam que era o Senhor. 13.Jesus aproximou-se, tomou o pão e lhos deu,
           e do mesmo modo o peixe. 14.Era esta já a terceira vez que Jesus se manifestava 
           aos seus discípulos, depois de ter ressuscitado."
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"15.Tendo eles comido, Jesus perguntou a Simão Pedro: “Simão, filho de João,
           amas-me mais do que estes?”. Respondeu ele: “Sim, Senhor, tu sabes que te amo”. 
           Disse-lhe Jesus: “Apascenta os meus cordeiros”. 16.Perguntou-lhe outra vez: “Simão, 
           filho de João, amas-me?”. Respondeu-lhe: “Sim, Senhor, tu sabes que te amo”. 
           Disse-lhe Jesus: “Apascenta os meus cordeiros”. 17.Perguntou-lhe pela terceira vez: 
           “Simão, filho de João, amas-me?”. Pedro entristeceu-se porque lhe perguntou pela terceira 
           vez: “Amas-me?” –, e respondeu-lhe: “Senhor, sabes tudo, tu sabes que te amo”. 
           Disse-lhe Jesus: “Apascenta as minhas ovelhas."
          `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"1.Chegando o dia de Pentecostes, estavam todos reu­nidos no mesmo lugar. 
          2.De repente, veio do céu um ruído, como se soprasse um vento impetuoso, 
          e encheu toda a casa onde estavam sentados. 3.Apareceu-lhes então uma espécie de línguas de 
          fogo, que se repartiram e pousaram sobre cada um deles. 4.Ficaram todos cheios do Espírito 
          Santo e começaram a falar em outras línguas, conforme o Espírito Santo lhes concedia que falassem. 
          5.Achavam-se então em Jerusalém judeus piedosos de todas as nações que há debaixo do céu. 
          6.Ouvindo aquele ruído, reuniu-se muita gente e maravilhava-se de que cada um os ouvia 
          falar na sua própria língua. 7.Profundamente impressionados, manifestavam a sua admiração: 
          “Não são, porventura, galileus todos estes que falam? 8.Como então todos nós os ouvimos falar,
          cada um em nossa própria língua materna? 9.Partos, medos, elamitas; os que habitam a Mesopotâmia, 
          a Judeia, a Capadócia, o Ponto, a Ásia,* 10.a Frígia, a Panfília, o Egito e as províncias da Líbia 
          próximas a Cirene; peregrinos romanos, 11.judeus ou prosélitos, cretenses e árabes; ouvimo-los
          publicarem em nossas línguas as maravilhas de Deus!”.* 12.Estavam, pois, todos atônitos e, 
          sem saber o que pensar, perguntavam uns aos outros: “Que significam estas coisas?”. 
          13.Outros, porém, escarnecendo, diziam: “Estão todos embriagados de vinho doce”."
          `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"21.Disse-lhes outra vez: “A paz esteja convosco! Como o Pai me enviou, 
          assim também eu vos envio a vós”. 22.Depois dessas palavras, soprou sobre eles dizendo-lhes: 
          “Recebei o Espírito Santo. 23.Àqueles a quem perdoardes os pecados, lhes serão perdoados; 
          àqueles a quem os retiverdes, lhes serão retidos”."
          `,
        },
      ],
    ]);
    if (screenWidth <= 1024 && /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        
        alert({
          cssClass: 'alert-body',
          header: SundayAlertText.get(item).title,
          message: SundayAlertText.get(item).text,
          buttons: ["fechar"],
          onDidDismiss: () => {},
        });
        
    } else {
        
        Swal.fire( {
            title: SundayAlertText.get(item).title,
            text: SundayAlertText.get(item).text,
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
          1º A Ressureição de jesus. <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (LC 24 1-7.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º Jesus aparece pela terceira vez aos discípulos e pede para que
          joguem as redes de pesca do outro lado da barca. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (JO 21 1-14)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º O primado de Pedro: "Tu me amas? apascenta as minhas ovelhas". <br />
          <p className="button-text" onClick={() => showModal(3)}>(JO 21 15-17.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º Os apóstolos e nossa Senhora. <br />
          <p className="button-text" onClick={() => showModal(4)}>(At 2 1-13.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º Jesus envia o espírito santo. <br />
          <p className="button-text" onClick={() => showModal(5)}>(JO 20 21-23.)</p>
        </p>
      </IonCol>
      
    </IonRow>       
  );
};

export default Sunday;
