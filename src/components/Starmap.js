import React from 'react';

import {Link} from 'react-router-dom';

export default class Starmap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '80vh'}}>
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
              <div className="ring">
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

        {/*<Link to='/Sun'><img id='sun' style={{width: '20em'}} src="Sun.png" alt="sun"/></Link>
        <Link to='/Earth'><img classNameName='planets earth' src="p-earth.png" alt="earth"/></Link>
        <Link to='/Jupiter'><img classNameName='planets jupiter' src="p-jupiter.png" alt="jupiter"/></Link>
        <Link to='/Mars'><img classNameName='planets mars' src="p-mars.png" alt="mars"/></Link>*/}
      </div>
    );
  }
}
