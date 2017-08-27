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
          <Link className='solar_system_link' className="sun" title="sun" to="/Sun">Sun</Link>
          <Link className='solar_system_link' className="mercury" title="mercury" to="/Mercury">Mercury</Link>
          <Link className='solar_system_link' className="venus" title="venus" to="/Venus">Venus</Link>
          <Link className='solar_system_link' className="earth" title="earth" to="/Earth">Earth</Link>
          <Link className='solar_system_link' className="mars" title="mars" to="/Mars">Mars</Link>
          <Link className='solar_system_link' className="jupiter" title="jupiter" to="/Jupiter">Jupiter</Link>
          <Link className='solar_system_link' className="saturn" title="saturn" to="/Saturn">Saturn</Link>
          <Link className='solar_system_link' className="uranus" title="uranus" to="/Uranus">Uranus</Link>
          <Link className='solar_system_link' className="neptune" title="neptune" to="/Neptune">Neptune</Link>
        </div>
        <div id="universe" className="scale-stretched set-speed">
          <div id="galaxy">
            <div id="solar-system">
              <div id="mercury" className="orbit">
                <div className="pos">
                  <Link to='/Mercury'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="venus" className="orbit">
                <div className="pos">
                  <Link to='/Venus'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="earth" className="orbit">
                <div className="pos">
                  <div className="orbit">
                    <div className="pos">
                      <Link to='/Moon'><div className="moon"></div></Link>
                    </div>
                  </div>
                  <Link to='/Earth'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="mars" className="orbit">
                <div className="pos">
                  <Link to='/Mars'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="jupiter" className="orbit">
                <div className="pos">
                  <Link to='/Jupiter'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="saturn" className="orbit">
                <div className="pos">
                  <div className="planet">
                    <Link to='/Saturn'><div className="ring"></div></Link>
                  </div>
                </div>
              </div>
              <div id="uranus" className="orbit">
                <div className="pos">
                  <Link to='/Uranus'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="neptune" className="orbit">
                <div className="pos">
                  <Link to='/Neptune'><div className="planet"></div></Link>
                </div>
              </div>
              <div id="sun"><Link to='/Sun' id='sun_link'></Link></div>
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
