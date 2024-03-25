import {
  setupIonicReact,
  IonApp,
  IonContent,
  IonRouterLink,
} from "@ionic/react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import { homeOutline, school, radio, albums } from "ionicons/icons";

import Home from "./pages/Home";
import Result from "./pages/Result";
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import Files from "./pages/Files";
import Live from "./pages/Live";
import withSplashScreen from "./components/withSplashScreen";
import AllItems from "./pages/AllItems";
import "../src/css/App.css";
import Offstage from "./pages/Offstage";
import Error from "./pages/Error";
import { BrowserView, MobileView } from "react-device-detect";
import Mobile from "./pages/Mobile";

setupIonicReact({ mode: "md" });
function App() {
  return (
    <div>
        <BrowserView>
        <Mobile/>
      </BrowserView>
      <MobileView>

      
        <IonApp>
          <IonContent className="ion-padding">
            <IonReactRouter>
              <IonTabs>
                <IonRouterOutlet>
                  <Route path="/" render={() => <Home />} exact={true} />
                  <Route path="/files" render={() => <Files />} />
                  <Route path="/offstage" render={() => <Offstage />} />
                  <Route path="/live" render={() => <Live />} />
                  <Route path="/result" render={() => <Result />} />
                  <Route path="/allresults" render={() => <AllItems />} />
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
    </div>
    // <Routes>
    //       <Route path="/" element={<SharedLayout />}>
    //         <Route index element={<Home />} />

    // <Route path="all-items" element={<h1>All items</h1>} />
    // <Route path="stage-details" element={<h1>stage details</h1>} />
    // <Route path="live" element={<h1>Live</h1>} />
    // <Route path="result" element={<Result />} />
    //         <Route path="*" element={<h1>SORRY MAN !</h1>} />
    //       </Route>
    //     </Routes>
  );
}

export default withSplashScreen(App);
