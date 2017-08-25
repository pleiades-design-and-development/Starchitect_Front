import React from 'react';

import {Link} from 'react-router-dom';

export default class Starmap extends React.Component {

  render() {
    return (
      <div className="set-speed view-2D zoom-close data-close controls-close">
        <div id="data">
          <Link to='/Sun'><a className="sun" title="sun">Sun</a></Link>
          <Link to='/Mercury'><a className="mercury" title="mercury">Mercury</a></Link>
          <Link to='/Venus'><a className="venus" title="venus">Venus</a></Link>
          <Link to='/Earth'><a className="earth" title="earth">Earth</a></Link>
          <Link to='/Mars'><a className="mars" title="mars">Mars</a></Link>
          <Link to='/Jupiter'><a className="jupiter" title="jupiter">Jupiter</a></Link>
          <Link to='/Saturn'><a className="saturn" title="saturn">Saturn</a></Link>
          <Link to='/Uranus'><a className="uranus" title="uranus">Uranus</a></Link>
          <Link to='/Neptune'><a className="neptune" title="neptune">Neptune</a></Link>
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
              <Link to='/Sun'><div id="sun"></div></Link>
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
