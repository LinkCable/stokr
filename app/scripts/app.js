
var React = window.React = require('react'),
    mountNode = document.getElementById("app");

import Banner from './ui/banner.jsx';
import About from './ui/about.jsx';
import Gaming from './ui/gaming.jsx';
import Signup from './ui/signup.jsx';

var top;
var about;
var gaming;

var App = React.createClass({

    getInitialState: function() {
        return { page: "home" };
    },

    componentWillMount : function() {
        if (this.state.page === "home"){
            top = <Banner onClick={this.handleButtonClick} />;
        }
        else {
            top = <Signup onClick={this.signUp} />;
        }
    },

    componentDidMount: function() {
        about= React.findDOMNode(this.refs.about);
        gaming= React.findDOMNode(this.refs.gaming);
    },

    componentWillUpdate: function() {
        if (this.state.page === "signup") {
            top = <Signup/>;

            $( ".about" ).fadeOut( "slow", function() {
                about.className = "hidden";
            });
            $( ".gaming" ).fadeOut( "slow", function() {
                gaming.className = "hidden";
            });
        }
        if (this.state.page === "home") {
            top = <Banner />;
            about.className = "about";
        }
    },

    handleButtonClick: function(e) {
        console.log(e.target.className);
        var app = this;
        if(e.target.className === "signup") {
            this.setState({ page: "signup"}, function(){
                app.componentWillUpdate();
                this.forceUpdate();
            });
        }
    },

    signUp: function(e) {
      top.className = "sign-completed";
    },

    render: function() {
        return (
            <div className="app">
                {top}
                <Gaming ref="gaming" />
                <About ref="about" onClick={this.handleButtonClick} />
            </div>
        );
    }
});


React.render(<App />, mountNode);

