import React from 'react';
import './Footer.css'

export default function Footer(props) {
  return (
    <footer className="footer">
       <div>
            <div>
                <p>Powered by <a className="link" href="https://coinpaprika.com/"> coinpaprika.com</a></p>
            </div>
        </div>
        <hr/>
        <div>
            <div>
                <p >© 2020 Copyright: Test. Site by: Timmy Bergkvist</p>
            </div>
        </div>
    </footer>
  );
}