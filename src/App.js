
import React, {useEffect } from "react";
import {
  setupIonicReact,
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import { homeOutline, school, radio, albums } from "ionicons/icons";


import Home from "./pages/Home";
import Result from "./pages/Result";
import Files from "./pages/Files";
import Live from "./pages/Live";
import AllItems from "./pages/AllItems";
import Offstage from "./pages/Offstage";
import Error from "./pages/Error";
import Maintain from "./pages/Maintain";
import Mobile from "./pages/Mobile";
import withSplashScreen from "./components/withSplashScreen";
import { BrowserView, MobileView } from "react-device-detect";
import "../src/css/App.css";
import OneSignal from 'react-onesignal';


setupIonicReact({ mode: "md" });

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: "edac7906-c7da-4a69-a975-f707911dec7"
    });
  }, []);
  return (
    <div>
      {maintain ? (
        <Maintain />
      ) : (
        <>
          <BrowserView>
            <Mobile />
          </BrowserView>
          <MobileView>
            <IonApp>
              <IonContent className="ion-padding">
                <IonReactRouter>
                  <IonTabs>
                    <IonRouterOutlet>
                      <Route path="/" exact={true} component={Home} />
                      <Route path="/files" component={Files} />
                      <Route path="/offstage" component={Offstage} />
                      <Route path="/live" component={Live} />
                      <Route path="/result" component={Result} />
                      <Route path="/allresults" component={AllItems} />
                      <Route component={Error} />
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">
                      <IonTabButton tab="home" href="/">
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                      </IonTabButton>

                      <IonTabButton tab="live" href="/live">
                        <IonIcon icon={radio} />
                        <IonLabel>Live</IonLabel>
                      </IonTabButton>

                      <IonTabButton tab="allresults" href="/allresults">
                        <IonIcon icon={school} />
                        <IonLabel>Result</IonLabel>
                      </IonTabButton>

                      <IonTabButton tab="allitems" href="/files">
                        <IonIcon icon={albums} />
                        <IonLabel>Schedule</IonLabel>
                      </IonTabButton>
                    </IonTabBar>
                  </IonTabs>
                </IonReactRouter>
              </IonContent>
            </IonApp>
          </MobileView>
        </>
      )}
    </div>
  );
}

export default withSplashScreen(App);
