import React from 'react';
import Copyrights from './Copyrights';
import Menu from './Menu'

const text = 'Copyrights: M. Kowacka';

const footerItems = [
    {text: <i className="fab fa-linkedin"></i>, url:'https://www.linkedin.com/in/wojciech-walkiewicz-0a166476?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBQWws%2BQyTxiR0ewCXaWauQ%3D%3D'},
    {text: <i className="fab fa-facebook-square"></i>, url:'https://www.facebook.com/wojciech.walkiewicz.7'},
    {text: <i className="fab fa-vimeo"></i>, url:'https://vimeo.com/user18604501/videos/sort:plays/format:detail'},
]

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Copyrights text ={text}/>
                <Menu items ={footerItems}/>
            </footer>
        )
    }
}

export default Footer;