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
                      Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                      those interested. Sections Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className='author-info'>
                    <h6>
                      <span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className='rn-testimonial-content text-center'>
                  <div className='inner'>
                    <p>
                      Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                      those interested. Sections Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className='author-info'>
                    <h6>
                      <span>Fatima Asrafy </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='rn-testimonial-content text-center'>
                  <div className='inner'>
                    <p>
                      Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                      for those interested. Sections Bonorum et Malorum original.
                    </p>
                  </div>
                  <div className='author-info'>
                    <h6>
                      <span>Jannat Tumpa </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className='testimonial-thumb-wrapper'>
                <Tab>
                  <div className='testimonial-thumbnai'>
                    <div className='thumb'>
                      <img src='./assets/images/client/testimonial-1.jpg' alt='Testimonial Images' />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className='testimonial-thumbnai'>
                    <div className='thumb'>
                      <img src='./assets/images/client/testimonial-2.jpg' alt='Testimonial Images' />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className='testimonial-thumbnai'>
                    <div className='thumb'>
                      <img src='./assets/images/client/testimonial-3.jpg' alt='Testimonial Images' />
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
