
var React = window.React = require('react');

var Banner = React.createClass({

    getInitialState: function() {
        return { active: false };
    },

    render: function() {
        return (
            <div className="banner">

                <div className="middle">
                    <img className="logo" src="../images/stokr_grey.svg" />
                    <div className="subtitle">
                        your entire steam library:
                        <br />
                        anywhere, anytime, on OSX
                    </div>
                </div>
                <div className="borderlands">
                    Borderlands, 2K Games
                </div>
                <div className="more">
                    find out more
                    <i className="fa fa-chevron-down scroll"></i>
                </div>
            </div>
        );
    }
});


module.exports = Banner;

