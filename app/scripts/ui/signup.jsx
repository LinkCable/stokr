
var React = window.React = require('react');

var braintree = require('braintree-web');
var token;

var Signup = React.createClass({

    getInitialState: function() {
        return { data: [] };
    },

    componentDidMount: function() {
    },

    handleSubmit: function(e, answers) {

        console.log(answers);

        var form = this;
        var clientToken;
        $.ajax({
            url: 'http://icestream.co/api/clientToken/',
            type: 'GET',
            dataType: 'text',
            async: true,
            success: function(data) {
                console.log(data);
                form.sendClient(data);
            },
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this),
        });

        return false;
    },

    sendClient: function (token) {

        console.log(token);

        var form = this;

        var client = new braintree.api.Client({
            clientToken: token
        });

        client.tokenizeCard({
            number: React.findDOMNode(this.refs.card).value.trim(),
            expirationDate: React.findDOMNode(this.refs.expDate).value.trim(),
        }, function (err, nonce) { //succeed, pass on nonce

            var registerInfo = {
                "username" : React.findDOMNode(form.refs.email).value.trim(),
                "password" : React.findDOMNode(form.refs.password).value.trim(),
                "steamID" :  React.findDOMNode(form.refs.sID).value.trim(),
                "steamPassWord" :  React.findDOMNode(form.refs.sPassword).value.trim(),
                "nonce" : nonce
            };

            $.ajax({
                url: "http://icestream.co/api/register",
                dataType: 'json',
                type: 'POST',
                data: registerInfo,
                success: function(data) {
                    console.log("success!" + data)
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        });

    },

    render: function() {
        return (
            <div className="signup-form">
                <h1>SO YOU'RE INTERESTED?
                    <br/>
                    AWESOME
                </h1>
                <span>Just fill out the form below.</span>
                <form id="register-form" onSubmit={this.handleSubmit()}>
                    <input type="text" placeholder="email" ref="email" />
                    <input type="password" placeholder="password" ref="password" />
                    <input type="text" placeholder="SteamID" ref="sID" />
                    <input type="password" placeholder="password" ref="sPassword" />
                    <input data-braintree-name="number" placeholder="card number" ref="card" />
                    <input data-braintree-name="expiration_date" placeholder="00/00" ref="expDate"/>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        );
    }
});


module.exports = Signup;

