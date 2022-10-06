import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-lg-12'>
            <Tabs>
              <TabPanel>
                <div className='rn-testimonial-content text-center'>
                  <div className='inner'>
                    <p>
                    We have worked with iLogos on several projects and had an overall good experience with them. It was especially the fact that we share the commitment and dedication to create great games.
                    </p>
                  </div>
                  <div className='author-info'>
                    <h6>
                      <span>Rodrigo Terra  </span> - CTE at ARVORE 
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className='rn-testimonial-content text-center'>
                  <div className='inner'>
                    <p>
                    the studio provides a great combination of technical skills and strong communication, which is something you do not always get from an external team.
                    </p>
                  </div>
                  <div className='author-info'>
                    <h6>
                      <span>Simon Benson </span> - Producer at Playstation Immersive Lab
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='rn-testimonial-content text-center'>
                  <div className='inner'>
                    <p>
                    The XP of working with Hakawati Studio to create a game for us was fantastic. You guys were really professional and open for feedback.
                    </p>
                  </div>
                  <div className='author-info'>
                    <h6>
                      <span>Maddalena Crosti </span> - XR and Innovation Program Manager

                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className='testimonial-thumb-wrapper'>
                <Tab>
                  <div className='testimonial-thumbnai'>
                    <div className='thumb'>
                      <img src='./assets/images/client/rodrigo-terra.jpeg' alt='Testimonial Images' />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className='testimonial-thumbnai'>
                    <div className='thumb'>
                      <img src='./assets/images/client/Simon-Benson.png' alt='Testimonial Images' />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className='testimonial-thumbnai'>
                    <div className='thumb'>
                      <img src='./assets/images/client/Maddalena-Crosti.jpeg' alt='Testimonial Images' />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
