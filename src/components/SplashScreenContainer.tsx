import { useState, useEffect } from 'react';
import './SplashScreenContainer.css';
import { useHistory } from 'react-router-dom';
import { IonProgressBar } from '@ionic/react';

const SplashScreen: React.FC = () => {
    
    const [progress, setProgress] = useState<number>(0.0);
    const history = useHistory();
    const TIMEOUT = 0.1666666666666666666666666666667;
    const goToHomeScreen: Function = (): void => {
        setTimeout(() => {
           history.push('/page/comorezar?title=Como Rezar')
        }, 2000)
    }

    const changeProgressBar: Function = (): void => {
        const interval = setTimeout(() => {
            setProgress( ( progress + TIMEOUT ))
        }, 100)
        
        if ( progress >= 0.9999999999999999 ) {
            clearTimeout( interval );
            goToHomeScreen()            
        }
        
    }

    useEffect(() => {
        changeProgressBar();        
    },[progress])

    return(
        <div className="container-splash">
            <img src='../../assets/logo.jpg'/>
            
            <div className="progress-container">
                <IonProgressBar color="danger" type="determinate" value={progress}/>
            </div>         
        </div>
    )
};

export default SplashScreen;