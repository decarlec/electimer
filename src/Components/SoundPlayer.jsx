class SoudPlayer extends Component {
    state = { play: false }

    audio = new Audio(this.props.url)

    componentDidMount() {
        audio.addEventListener('ended', () => this.setState({play:false}));
    }

    componentWillUnmount() {
        audio.removeEventListener('ended', () => this.setState({play:false}));
    }
    render() { 
        return ( 
            <div>
                
            </div>
          );
    }
}
 
export default SoudPlayer;