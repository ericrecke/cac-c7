'use strict';

const element = React.createElement;

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = { liked: false};
    }

    render() {
        if(this.state.liked){
            return 'You liked this.';
        }

        return element(
            'button',
            {onClick: () => this.setState({ liked:true})},
            'Like'
        );
    }
}

//SITE WEB EXAMPLE
// const domContainer = document.querySelector('#myApp');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));

//
const domContainer = document.querySelector('#myApp');
ReactDOM.render(element(LikeButton),domContainer);