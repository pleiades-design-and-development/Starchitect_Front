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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <Link to='/Sun'><a className="sun" title="sun">Sun</a></Link>
          <Link to='/Mercury'><a className="mercury" title="mercury">Mercury</a></Link>
          <Link to='/Venus'><a className="venus" title="venus">Venus</a></Link>
          <Link to='/Earth'><a className="earth" title="earth">Earth</a></Link>
          <Link to='/Mars'><a className="mars" title="mars">Mars</a></Link>
          <Link to='/Jupiter'><a className="jupiter" title="jupiter">Jupiter</a></Link>
          <Link to='/Saturn'><a className="saturn" title="saturn">Saturn</a></Link>
          <Link to='/Uranus'><a className="uranus" title="uranus">Uranus</a></Link>
          <Link to='/Neptune'><a className="neptune" title="neptune">Neptune</a></Link>
=======
=======
>>>>>>> Stashed changes
          <Link className='solar_system_link' className="sun" title="sun" to="/Sol">Sun</Link>
          <Link className='solar_system_link' className="mercury" title="mercury" to="/Mercury">Mercury</Link>
          <Link className='solar_system_link' className="venus" title="venus" to="/Venus">Venus</Link>
          <Link className='solar_system_link' className="earth" title="earth" to="/Earth">Earth</Link>
          <Link className='solar_system_link' className="mars" title="mars" to="/Mars">Mars</Link>
          <Link className='solar_system_link' className="jupiter" title="jupiter" to="/jupiter">Jupiter</Link>
          <Link className='solar_system_link' className="saturn" title="saturn" to="/Saturn">Saturn</Link>
          <Link className='solar_system_link' className="uranus" title="uranus" to="/Uranus">Uranus</Link>
          <Link className='solar_system_link' className="neptune" title="neptune" to="/Neptune">Neptune</Link>
>>>>>>> Stashed changes
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
                  <Link to='/Saturn'><div className="planet"><div className="ring"></div></div></Link>
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
              <Link to='/Sun'><div id="sun"></div></Link>
=======
              <div id="sun"><Link to='/Sol' id='sun_link'></Link></div>
>>>>>>> Stashed changes
=======
              <div id="sun"><Link to='/Sol' id='sun_link'></Link></div>
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
    );
  }
}
