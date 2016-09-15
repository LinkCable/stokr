
var React = window.React = require('react');

var Gaming = React.createClass({

    getInitialState: function() {
        return { active: false };
    },

    render: function() {
        return (
            <div className="gaming">
                <i className="fa fa-steam-square"></i>
                <div className="tagline">
                    ANY GAME ON STEAM, YOURS TO PLAY ON OS X
                </div>
            </div>
        );
    }
});


module.exports = Gaming;

