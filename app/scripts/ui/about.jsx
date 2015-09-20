
var React = window.React = require('react');

var About = React.createClass({

    getInitialState: function() {
    return { active: false };
},

render: function() {
    return (
        <div className="about">
        <h1>"UNSUPPORTED PLATFORM"</h1>
        <div className="copy">
        Us here at stokr have encountered that line many times when trying to find a game
        in our Steam library to play on the go. When using a Macbook, we think you shouldn't have
        to be locked out from your own content. That's why we made stokr.
        </div>
        <br />
        <h1>HOW IT WORKS</h1>
        <div className="copy">Create a stokr account on the site and let us link your Steam account. Then download our
        Mac OSX app and log in. Then, simply start up your Steam account, you'll get a notice
        regarding in-home streaming, select the PC that pops up, and you're good to go!
        You're free to install and play any game you want, and play it remotely with your
        OSX machine.
        </div>
        <h1>WHAT'S THE CATCH?</h1>
        <div className="copy">
            Unfortunately, servers aren't free. &#9785; However, they are pretty cheap! For a small monthly
        fee, you'll be able to play your Steam games anywhere on any OSX machine. We think it's worth
        the trade off. If you don't trust us, test out our free trial! We promise once you've played
        Skyrim on the go, you'll never want to ditch us.
        </div>
        <div className="try">
            <span onClick={this.props.onClick} className="signup">SIGN ME UP</span>
        </div>
        <div className="footer">
            stokr made with <i className="fa fa-heart-o"></i> at <a href="http://www.hackthenorth.com">Hack the North</a>
        <br/>
        thank you to <a href="http://store.steampowered.com"><i className="fa fa-steam"></i></a> for taking
            all our <i className="fa fa-money"></i> and <i className="fa fa-hourglass-end"></i> from us
        </div>
        </div>
);
}
});


module.exports = About;

