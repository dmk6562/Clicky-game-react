import React from 'react';
import './Header.css'

const Header = props =>
    <div id='jumbo' className='jumbotron'>

        <div className="row">
            <div className='col-md'>
                <h1>Clicky Game</h1>
                <p>Please click once on every image !</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md'>
                <p>{props.message} </p>
            </div>
            <div className='col-md'>
                <p>Score : {props.score}| High Score :{props.topScore} </p>
            </div>
        </div>
    </div>

export default Header;