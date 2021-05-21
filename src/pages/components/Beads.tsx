import React from "react";
import { IonRow, IonCol, IonFabButton } from "@ionic/react";
import { Vibration } from '@ionic-native/vibration';

export const BeadsComponent: React.FC = () => {
  const [colors, setColors] = React.useState({
    item1: "light",
    item2: "light",
    item3: "light",
    item4: "light",
    item5: "light",
    item6: "light",
    item7: "light",
    item8: "light",
    item9: "light",
    item10: "light",
  });

  const changeColor = (color: string, index: number): void => {
    let ObjectItem = `item${index}`;
    setColors({ ...colors, [ObjectItem]: color });
    Vibration.vibrate(50);
  };

  return (
    <IonRow className="beads-row">
      <IonCol size="2">
        <IonFabButton
          size="small"
          color={colors.item10}
          onClick={() => changeColor("primary", 10)}
        />

        <IonFabButton
          size="small"
          color={colors.item9}
          onClick={() => changeColor("primary", 9)}
        />

        <IonFabButton
          size="small"
          color={colors.item8}
          onClick={() => changeColor("primary", 8)}
        />

        <IonFabButton
          size="small"
          color={colors.item7}
          onClick={() => changeColor("primary", 7)}
        />

        <IonFabButton
          size="small"
          color={colors.item6}
          onClick={() => changeColor("primary", 6)}
        />

        <IonFabButton
          size="small"
          color={colors.item5}
          onClick={() => changeColor("primary", 5)}
        />

        <IonFabButton
          size="small"
          color={colors.item4}
          onClick={() => changeColor("primary", 4)}
        />

        <IonFabButton
          size="small"
          color={colors.item3}
          onClick={() => changeColor("primary", 3)}
        />

        <IonFabButton
          size="small"
          color={colors.item2}
          onClick={() => changeColor("primary", 2)}
        />

        <IonFabButton
          size="small"
          className="bead"
          color={colors.item1}
          onClick={() => changeColor("primary", 1)}
        />
      </IonCol>
    </IonRow>
  );
};
