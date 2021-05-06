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
          text: `"1.Dirigiu-se Jesus para o monte das Oliveiras. 
            2.Ao romper da manhã, voltou ao templo e todo o povo veio a ele. 
            Assentou-se e começou a ensinar. 3.Os escribas e os fariseus 
            trou­xeram-lhe uma mulher que fora apanhada em adultério. 
            4.Puseram-na no meio da multidão e disseram a Jesus: 
            "Mestre, agora mesmo esta mulher foi apanhada em adultério. 
            5.Moisés mandou-nos na Lei que apedrejássemos tais mulheres. Que dizes tu sobre isso?."
            6.Perguntavam-lhe isso, a fim de pô-lo à prova e poderem acusá-lo. Jesus, 
            porém, se inclinou para a frente e escrevia com o dedo na terra. 
            7.Como eles insistissem, ergueu-se e disse-lhes: 
            "Quem de vós estiver sem pecado, seja o primeiro a lhe atirar uma pedra."
            8.Inclinando-se novamente, escrevia na terra. 
            9.A essas palavras, sentindo-se acusados pela sua própria consciência,
            eles se foram retirando um por um, até o último, 
            a começar pelos mais idosos, de sorte que Jesus ficou sozinho, 
            com a mulher diante dele. 10.Então, ele se ergueu e vendo ali apenas a mulher, 
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
          text: `"5.Chegou, pois, a uma localidade da Samaria, chamada Sicar, 
          junto das terras que Jacó dera a seu filho José. 6.Ali havia o poço de Jacó. 
          E Jesus, fatigado da viagem, sentou-se à beira do poço. Era por volta do meio-dia. 
          7.Veio uma mulher da Samaria tirar água. Pediu-lhe Jesus: “Dá-me de beber”. 
          8.(Pois os discípulos tinham ido à cidade comprar mantimentos.) 
          9.Aquela samaritana lhe disse: “Sendo tu judeu, como pedes de beber a mim, que sou samaritana!...”. 
          (Pois os judeus não se comunicavam com os samaritanos.) 
          10.Respondeu-lhe Jesus: “Se conhecesses o dom de Deus, e quem é que te diz: Dá-me de beber, 
          certamente lhe pedirias tu mesma e ele te daria uma água viva”. 
          11.A mulher lhe replicou: “Senhor, não tens com que tirá-la, e o poço é fundo... donde tens, pois, 
          essa água viva? 12.És, porventura, maior do que o nosso pai Jacó, que nos deu este poço, 
          do qual ele mesmo bebeu e também os seus filhos e os seus rebanhos?”. 
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
          text: `"1.Lázaro caiu doente em Betânia, onde estavam Maria e sua irmã Marta. 
          2.Maria era quem ungira o Senhor com o óleo perfumado e lhe enxugara os pés com os seus cabelos. 
          E Lázaro, que estava enfermo, era seu irmão. 3.Suas irmãs mandaram, pois, dizer a Jesus: “Senhor, 
          aquele que tu amas está enfermo”. 4.A essas palavras, disse-lhes Jesus: 
          “Esta enfermidade não causará a morte, mas tem por finalidade a glória de Deus. 
          Por ela será glorificado o Filho de Deus”. 5.Ora, Jesus amava Marta, Maria, sua irmã, 
          e Lázaro. 6.Mas, embora tivesse ouvido que ele estava enfermo, demorou-se ainda 
          dois dias no mesmo lugar. 7.Depois, disse a seus discípulos: “Voltemos para a Judeia”. 
          8.“Mestre” – responderam eles –, “há pouco os judeus te queriam apedrejar, e voltas para lá?”. 
          9.Jesus respondeu: “Não são doze as horas do dia? Quem caminha de dia não tropeça, 
          porque vê a luz deste mundo. 10.Mas quem anda de noite tropeça, porque lhe falta a luz”. 
          11.Depois dessas palavras, ele acrescentou: “Lázaro, nosso amigo, dorme, mas vou despertá-lo.” 
          12.Disseram-lhe os seus discípulos: “Senhor, se ele dorme, há de sarar”. 13.Jesus, entretanto, 
          falara da sua morte, mas eles pensavam que falasse do sono como tal. 1
          4.Então, Jesus lhes declarou abertamente: “Lázaro morreu. 
          15.Alegro-me por vossa causa, por não ter estado lá, para que creiais. Mas vamos a ele.” 
          16.A isso Tomé, chamado Dídimo, disse aos seus condiscípulos: “Vamos também nós, para morrermos com ele”. 
          17.À chegada de Jesus, já havia quatro dias que Lázaro estava no sepulcro. 
          18.Ora, Betânia distava de Jerusalém cerca de quinze estádios. 
          19.Muitos judeus tinham vindo a Marta e a Maria, para lhes apresentar condolências pela morte de seu irmão. 
          20.Mal soube Marta da vinda de Jesus, saiu-lhe ao encontro. Maria, porém, estava sentada em casa.
          21.Marta disse a Jesus: “Senhor, se tivesses estado aqui, meu irmão não teria morrido! 
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
          13.O mercenário, porém, foge, porque é mercenário e não se importa com as ovelhas. 
          14.Eu sou o bom-pastor. Conheço as minhas ovelhas e as minhas ovelhas conhecem a mim, 
          15.como meu Pai me conhece e eu conheço o Pai. Dou a minha vida pelas minhas ovelhas. 
          16.Tenho ainda outras ovelhas que não são deste aprisco. Preciso conduzi-las também, 
          e ouvirão a minha voz e haverá um só rebanho e um só pastor.
          17.O Pai me ama, porque dou a minha vida para a retomar. 
          18.Ninguém a tira de mim, mas eu a dou de mim mesmo e tenho o poder de a dar, 
          como tenho o poder de a reassumir. Tal é a ordem que recebi de meu Pai”.
          19.A propósito dessas palavras, ori­gi­nou-se nova divisão entre os judeus. 
          20.Muitos deles diziam: “Ele está possuído do demônio. 
          Ele delira. Por que o escutais vós?”.
          21.Outros diziam: “Estas palavras não são de quem está endemoninhado. 
          Acaso pode o demônio abrir os olhos a um cego?”. 
          22.Celebrava-se em Jerusalém a festa da Dedicação. Era inverno. 
          23.Jesus passeava no templo, no pórtico de Salomão. 
          24.Os judeus rodearam-no e perguntaram-lhe: “Até quando nos deixarás na incerteza? 
          Se tu és o Cristo, dize-nos claramente”. 
          25.Jesus respondeu-lhes: “Eu vo-lo digo, mas não credes. As obras que faço em nome de meu Pai, 
          estas dão testemunho de mim. 26.Entretanto, não credes, porque não sois das minhas ove­lhas. 
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
            (JO 8 1-11.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º Jesus se oferece como Água viva. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (JO 4 5-14.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º Jesus consola a irmã de Lázaro. <br />
          <p className="button-text" onClick={() => showModal(3)}>(JO 11 1-25.)</p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º Jesus se manifesta como o bom pastor <br />
          <p className="button-text" onClick={() => showModal(4)}>(JO 10 11-28.)</p>
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
