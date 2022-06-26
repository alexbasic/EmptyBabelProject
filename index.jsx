class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }
    handleTextInputChange(e) {
        this.props.onTextInputChange(e.target.value);
    }
    render() {
        return <input type="text" value={this.props.text} onChange={this.handleTextInputChange} />
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    }
    handleTextInputChange(value){
        this.setState({text:value});
    }
    render() {
        return (
        <div>
            <TextInput text={this.state.text} onTextInputChange={this.handleTextInputChange}/>
            <TextInput text={this.state.text} onTextInputChange={this.handleTextInputChange}/>
        </div>
        );
    }
}


//App code
const rootNodeElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootNodeElement);
root.render(
    <App text = "123"/>
);
