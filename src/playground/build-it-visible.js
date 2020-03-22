// TU LAM
/*const app = {
    title: 'Visibility toggle',
    details: 'This is details'
};

const appRoot = document.getElementById('app');

let details_shown;
details_shown = false;
const toggleDetails = () => {
    if (details_shown)
        details_shown = false;
    else
        details_shown = true;
    render();
};

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>{details_shown ? 'Hide details' : 'Show details'}</button>
            {details_shown && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();*/

// DAP AN
/*let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>Details shown</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();*/

// CACH MOI. SECTION 4 BUILD IT
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });        
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'}</button>
                {this.state.visibility && (<p>Details shown</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));