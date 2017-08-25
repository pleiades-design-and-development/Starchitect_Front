import React from 'react';

import {Link} from 'react-router-dom';

export default class Starmap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="set-speed view-2D zoom-close data-close controls-close">
        <div id="data">
          <a className="sun" title="sun" href="#sunspeed">Sun</a>
          <a className="mercury" title="mercury" href="#mercuryspeed">Mercury</a>
          <a className="venus" title="venus" href="#venusspeed">Venus</a>
          <a className="earth" title="earth" href="#earthspeed">Earth</a>
          <a className="mars" title="mars" href="#marsspeed">Mars</a>
          <a className="jupiter" title="jupiter" href="#jupiterspeed">Jupiter</a>
          <a className="saturn" title="saturn" href="#saturnspeed">Saturn</a>
          <a className="uranus" title="uranus" href="#uranusspeed">Uranus</a>
          <a className="neptune" title="neptune" href="#neptunespeed">Neptune</a>
        </div>
        <div id="universe" className="scale-stretched set-speed">
          <div id="galaxy">
            <div id="solar-system">
              <div id="mercury" className="orbit">
                <div className="pos">
                  <div className="planet"></div>
                </div>
              </div>
              <div id="venus" className="orbit">
                <div className="pos">
                  <div className="planet"></div>
                </div>
              </div>
              <div id="earth" className="orbit">
                <div className="pos">
                  <div className="orbit">
                    <div className="pos">
                      <div className="moon"></div>
                    </div>
                  </div>
                  <div className="planet"></div>
                </div>
              </div>
              <div id="mars" className="orbit">
                <div className="pos">
                  <div className="planet"></div>
                </div>
              </div>
              <div id="jupiter" className="orbit">
                <div className="pos">
                  <div className="planet"></div>
                </div>
              </div>
              <div id="saturn" className="orbit">
                <div className="pos">
                  <div className="planet">
                    <div className="ring"></div>
                  </div>
                </div>
              </div>
              <div id="uranus" className="orbit">
                <div className="pos">
                  <div className="planet"></div>
                </div>
              </div>
              <div id="neptune" className="orbit">
                <div className="pos">
                  <div className="planet"></div>
                </div>
              </div>
              <div id="sun"></div>
            </div>
          </div>
        </div>

        {/*<Link to='/Sun'><img id='sun' style={{width: '20em'}} src="Sun.png" alt="sun"/></Link>
        <Link to='/Earth'><img classNameNameName='planets earth' src="p-earth.png" alt="earth"/></Link>
        <Link to='/Jupiter'><img classNameNameName='planets jupiter' src="p-jupiter.png" alt="jupiter"/></Link>
        <Link to='/Mars'><img classNameNameName='planets mars' src="p-mars.png" alt="mars"/></Link>*/}
      </div>
    );
  }
}
