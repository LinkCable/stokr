
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
            url: 'http://stokr.co/api/clientToken/',
            type: 'POST',
            dataType: 'text',
            async: true,
            success: function(data) {
                console.log(data);
                form.sendClient(data);
            },
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this),
        });

        return false;
    },

    sendClient: function (token) {

        var submit = React.findDOMNode(this.refs.subscribe);
        submit.innerHTML = "";
        submit.className = "fa fa-spin";

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
                "Email" : React.findDOMNode(form.refs.email).value.trim(),
                "Password" : React.findDOMNode(form.refs.password).value.trim(),
                "SteamUser" :  React.findDOMNode(form.refs.sID).value.trim(),
                "SteamPassword" :  React.findDOMNode(form.refs.sPassword).value.trim(),
                "BraintreeNonce" : nonce
            };

            $.ajax({
                url: "http://stokr.co/api/register",
                dataType: 'json',
                type: 'POST',
                data: registerInfo,
                success: function(data) {
                    console.log("success!" + data);
                    submit.className = "fa";
                    submit.innerHTML = "";
                }.bind(this),
                error: function(xhr, status, err) {
                    submit.className = "fa";
                    submit.innerHTML = "";
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

                <span className="prompt">Just fill out the form below.</span>
                <form className="submission" onSubmit={this.handleSubmit} id="register">
                    <div className="input-row">
                        <span>EMAIL</span>
                        <input type="email" placeholder="&#xf003;" ref="email" />
                    </div>
                    <div className="input-row">
                        <span>PASSWORD</span>
                        <input type="password" placeholder="&#xf084;" ref="password" />
                    </div>
                    <div className="input-row">
                        <span>STEAM ID</span>
                        <input type="text" placeholder="&#xf1b6;" ref="sID" />
                    </div>
                    <div className="input-row">
                        <span>STEAM PASSWORD</span>
                        <input type="password" placeholder="&#xf084;" ref="sPassword" />
                    </div>
                    <div className="input-row">
                        <span>CREDIT CARD NUMBER</span>
                        <input type="number" size="16" data-braintree-name="number" placeholder="&#xf09d;" ref="card" />
                    </div>
                    <div className="input-row">
                        <span>EXPIRATION DATE</span>
                        <input type="text" data-braintree-name="expiration_date" placeholder="&#xf273;" ref="expDate"/>
                    </div>
                </form>
                <button type="submit" form="register" className="submit" value="Submit">
                    <span ref="subscribe">Submit</span></button>
            </div>
        );
    }
});


module.exports = Signup;

