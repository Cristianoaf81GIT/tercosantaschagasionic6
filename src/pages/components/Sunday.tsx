import React, { useState, useEffect } from "react";
import { IonButton, IonRow, IonCol, useIonAlert } from "@ionic/react";
import Swal from "sweetalert2";

const Sunday: React.FC = (): JSX.Element => {
  const [alert] = useIonAlert();
  const [screenWidth, setScreeWidth] = useState<Number>(window.innerWidth);

  const showModal = (item: number): void => {
    const SundayAlertText: Map<number, any> = new Map([
      [
        1,
        {
          title: "1º mistério:",
          text: `"1.Chegando o dia de Pentecostes, estavam todos reu­nidos no mesmo lugar.
          2.De repente, veio do céu um ruído, como se soprasse um vento impetuoso, e encheu 
          toda a casa onde estavam sentados. 3.Apareceu-lhes então uma espécie de línguas de fogo,
          que se repartiram e pousaram sobre cada um deles. 
          4.Ficaram todos cheios do Espírito Santo e começaram a falar em outras línguas, 
          conforme o Espírito Santo lhes concedia que falassem. 
          5.Achavam-se então em Jerusalém judeus piedosos de todas as nações que há debaixo do céu. 
          6.Ouvindo aquele ruído, reuniu-se muita gente e maravilhava-se de que cada um os 
          ouvia falar na sua própria língua. 
          7.Profundamente impressionados, manifestavam a sua admiração: 
          “Não são, porventura, galileus todos estes que falam? 
          8.Como então todos nós os ouvimos falar, cada um em nossa própria língua materna? 
          9.Partos, medos, elamitas; os que habitam a Mesopotâmia, a Judeia, a Capadócia, o Ponto, a Ásia,
          10.a Frígia, a Panfília, o Egito e as províncias da Líbia próximas a Cirene; peregrinos romanos, 
          11.judeus ou prosélitos, cretenses e árabes; ouvimo-los publicarem em nossas línguas as maravilhas de Deus!”.
          12.Estavam, pois, todos atônitos e, sem saber o que pensar, perguntavam uns aos outros:
          “Que significam estas coisas?”. 13.Outros, porém, escarnecendo, 
          diziam: “Estão todos embriagados de vinho doce”."         
          `,
        },
      ],
      [
        2,
        {
          title: "2º mistério:",
          text: `"14.Pedro, então, pondo-se de pé em companhia dos Onze, com voz forte lhes disse: 
          “Homens da Judeia e vós todos que habitais em Jerusalém: seja-vos isto conhecido e prestai 
          atenção às mi­nhas palavras. 15.Estes homens não estão embriagados, como vós pensais, visto
          não ser ainda a hora terceira do dia.* 16.Mas cumpre-se o que foi dito pelo profeta Joel: 
          17.Acontecerá nos últimos dias – é Deus quem fala –, que derramarei do meu Espírito sobre todo ser vivo: 
          profetizarão os vossos filhos e as vossas filhas. Os vossos jovens terão visões, e os vossos anciãos sonharão. 
          18.Sobre os meus servos e sobre as minhas servas derramarei naqueles dias do meu Espírito e profetizarão. 
          19.Farei aparecer prodígios em cima, no céu, e milagres embaixo, na terra: sangue, fogo e vapor de fumaça.
          20.O sol se converterá em trevas e a lua em sangue, antes que venha o grande e glorioso dia do Senhor. 21.E, 
          então, todo o que invocar o nome do Senhor será salvo (Jl 3,1-5)”. 
          22.“Israelitas, ouvi estas palavras: Jesus de Naza­ré, 
          homem de quem Deus tem dado testemunho diante de vós com milagres, prodígios e sinais que Deus
          por ele realizou no meio de vós como vós mesmos o sabeis, 23.depois de ter sido entregue, segundo determinado
          desígnio e presciência de Deus, vós o matastes, crucificando-o por mãos de ímpios. 24.Mas Deus o ressuscitou, 
          rompendo os gri­lhões da morte, porque não era possível que ela o retivesse em seu poder. 25.Pois dele diz Davi: 
          Eu via sempre o Senhor perto de mim, pois ele está à minha direita, para que eu não seja abalado. 26.Alegrou-se por 
          isso o meu coração e a minha língua exultou. Sim, também a minha carne repousará na esperança, 27.pois não deixarás 
          a minha alma na região dos mortos, nem permitirás que o teu Santo conheça a corrupção. 28.Fizeste-me conhecer os 
          caminhos da vida, e me encherás de alegria com a visão de tua face (Sl 15,8-11). 29.Irmãos, seja permitido 
          dizer-vos com franqueza: do patriar­ca Davi dizemos que morreu e foi sepultado, e o seu sepulcro está entre 
          nós até o dia de hoje. 30.Mas ele era profeta e sabia que Deus lhe havia jurado que um dos seus descendentes 
          seria colocado no seu trono. 31.É, portanto, a ressurreição de Cristo que ele previu e anunciou por estas palavras:
          Ele não foi abandonado na região dos mortos, e sua carne não conheceu a corrupção. 32.A este Jesus, Deus o
          ressuscitou: do que todos nós somos testemu­nhas. 33.Exaltado pela direita de Deus, havendo recebido do Pai 
          o Espírito Santo prometido, derramou-o como vós vedes e ouvis. 34.Pois Davi pessoal­mente não subiu ao céu, 
          todavia diz: O Senhor disse a meu Senhor: Senta-te à minha direita 35.até que eu ponha os teus inimigos por 
          escabelo dos teus pés (Sl 109,1). 36.Que toda a casa de Israel saiba, portanto, com a maior certeza de que este 
          Jesus, que vós crucificastes, Deus o constituiu Senhor e Cristo.”* 37.Ao ouvirem essas coisas, ficaram 
          com­pun­gidos no íntimo do coração e indagaram de Pedro e dos demais apóstolos: “Que devemos fazer, irmãos?”. 
          38.Pedro lhes respondeu: “Arre­pen­dei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para remissão 
          dos vossos pecados, e recebereis o dom do Espírito Santo, 39.pois a promessa é para vós, para os vossos filhos 
          e para todos os que ouvirem de longe o apelo do Senhor, nosso Deus”.* 40.Ainda com muitas outras palavras 
          exortava-os, dizendo: “Salvai-vos do meio dessa geração perversa!”. 41.Os que receberam a sua palavra foram 
          batizados. E naquele dia elevou-se a mais ou menos três mil o número de adeptos."
          `,
        },
      ],
      [
        3,
        {
          title: "3º mistério:",
          text: `"2.Nisto levavam um homem que era coxo de nascença e que punham todos os dias à porta do templo, 
          chamada Formosa, para que pedisse esmolas aos que entravam no templo. 
          3.Quando ele viu que Pedro e João iam en­trando no templo, implorou a eles uma esmola. 
          4.Pedro fitou nele os olhos, como também João, e disse: “Olha para nós”. 5.Ele os olhou com 
          atenção, esperando receber deles alguma coisa. 6.Pedro, porém, disse: “Não tenho nem ouro nem
          prata, mas o que tenho, eu te dou: em nome de Jesus Cristo Nazareno, levanta-te e anda!”."         
          `,
        },
      ],
      [
        4,
        {
          title: "4º mistério:",
          text: `"1.Enquanto isso, Saulo só respirava ameaças e morte contra os discípulos do Senhor. 
          Apresentou-se ao príncipe dos sacerdotes,  2.e pediu-lhe cartas para as sinagogas de 
          Damas­co, com o fim de levar presos a Jerusalém todos os homens e mulhe­res que achasse seguindo essa 
          doutrina. 3.Durante a viagem, estando já perto de Damas­co, subitamente o cercou uma luz resplandecente vinda do céu.
          4.Caindo por terra, ouviu uma voz que lhe dizia: “Saulo, Saulo, por que me persegues?”. 5.Saulo disse: “Quem és,
          Senhor?” Respondeu ele: “Eu sou Jesus, a quem tu persegues. [Duro te é recalcitrar contra o aguilhão”. 
          6.Então, trêmulo e atônito, disse ele: “Senhor, que queres que eu faça?”. Respondeu-lhe o Senhor:] 
          “Levanta-te, entra na cidade. Aí te será dito o que deves fazer”.* 7.Os homens que o acompanhavam enchiam-se de espanto, 
          pois ouviam perfeitamente a voz, mas não viam ninguém. 8.Saulo levantou-se do chão. Abrindo, porém, os olhos, não via nada. 
          Tomaram-no pela mão e o introduziram em Damas­co, 9.onde esteve três dias sem ver, sem comer nem beber. 
          10.Havia em Damasco um discípulo chamado Ananias. O Senhor, numa visão, lhe disse: “Ananias!” –.
          “Eis-me aqui, Senhor” – respondeu ele. 11.O Senhor lhe ordenou: “Levanta-te e vai à rua Direita, 
          e pergunta em casa de Judas por um homem de Tarso, chamado Saulo; ele está orando”. 
          12.(Este via numa visão um homem, chamado Ananias, entrar e impor-lhe as mãos para recobrar a vista.) 
          13.Ana­nias respondeu: “Senhor, muitos já me falaram deste homem, quantos males fez aos teus fiéis em Jerusalém.
          14.E aqui ele tem poder dos príncipes dos sacerdotes para prender a todos aqueles que invocam o teu nome”.
          15.Mas o Senhor lhe disse: “Vai, porque este homem é para mim um instrumento escolhido,
          que levará o meu nome dian­te das nações, dos reis e dos filhos de Israel. 16.Eu lhe 
          mostrarei tudo o que terá de padecer pelo meu nome”. 17.Ananias foi. Entrou na casa e, 
          impondo-lhe as mãos, disse: “Saulo, meu irmão, o Senhor, esse Jesus que te apareceu no caminho, 
          enviou-me para que recobres a vista e fiques cheio do Espírito Santo”. 18.No mesmo instante, 
          caíram dos olhos de Saulo umas como que escamas, e recuperou a vista. Levantou-se e foi batizado. 
          19.Depois tomou alimento e sentiu-se fortalecido. Demorou-se por alguns dias com os discípulos que
          se achavam em Damasco. 20.Imediatamente começou a proclamar pelas sinagogas que Jesus é o Filho de Deus. 
          21.Todos os seus ouvintes pasmavam e diziam: “Este não é aquele que perseguia em Jerusalém os 
          que invocam o nome de Jesus? Não veio cá só para levá-los presos aos sumos sacerdotes?”. 
          22.Saulo, porém, sentia crescer o seu poder e confundia os judeus de Da­masco, 
          demonstrando que Jesus é o Cristo. 23.Decorridos alguns dias, os judeus deliberaram, em conselho,
          matá-lo. 24.Essas intenções chegaram ao conhecimento de Saulo. Guardavam eles as portas de dia e 
          de noite, para matá-lo. 25.Mas os discípulos, tomando-o de noite, fizeram-no descer pela muralha dentro de um cesto."

          `,
        },
      ],
      [
        5,
        {
          title: "5º mistério:",
          text: `"18.Mas Jesus, aproximando-se, lhes disse: “Toda autoridade me foi dada no céu e na terra. 
          19.Ide, pois, e ensinai a todas as nações; batizai-as em nome do Pai, do Filho e 
          do Espírito Santo. 20.Ensinai-as a observar tudo o que vos prescrevi. 
          Eis que estou convosco todos os dias, até o fim do mundo”."         
          `,
        },
      ],
    ]);
    if (
      screenWidth <= 1024 &&
      /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      alert({
        cssClass: "alert-body",
        header: SundayAlertText.get(item).title,
        message: SundayAlertText.get(item).text,
        buttons: ["fechar"],
        onDidDismiss: () => {},
      });
    } else {
      Swal.fire({
        title: SundayAlertText.get(item).title,
        text: SundayAlertText.get(item).text,
        confirmButtonText: "fechar",
        confirmButtonColor: "var(--ion-color-primary)",
        backdrop: false,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreeWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {});
  }, [screenWidth]);

  return (
    <IonRow>
      <IonCol size="12">
        <p className="content-body">
          1º A Descida do espírito santo sobre os apóstolos e nossa Senhora.{" "}
          <br />
          <p className="button-text" onClick={() => showModal(1)}>
            (At 2 1-13.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          2º O discurso inflamado de Pedro que converteu muitas pessoas. <br />
          <p className="button-text" onClick={() => showModal(2)}>
            (At 2 14-41.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          3º A cura do homen coxo de nascença em nome de Jesus".
          <br />
          <p className="button-text" onClick={() => showModal(3)}>
            (At 3 6.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          4º A Conversão de Paulo. <br />
          <p className="button-text" onClick={() => showModal(4)}>
            (At 9 1-25.)
          </p>
        </p>
      </IonCol>

      <IonCol size="12">
        <p className="content-body">
          5º A pregação dos apóstolos por todos os cantos da Terra. <br />
          <p className="button-text" onClick={() => showModal(5)}>
            (MT 28 19-20.)
          </p>
        </p>
      </IonCol>
    </IonRow>
  );
};

export default Sunday;
