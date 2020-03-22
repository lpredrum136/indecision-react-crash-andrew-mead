class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    // LIFECYCLE
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState((prevState) => ({ options: options }));
            }
        } catch (err) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {// When props or state change
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    // handle delete one option
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    // Handle pick
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    // Handle add option
    handleAddOption(option) {
        if (!option) {// Empty input
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
        // Tu lam, k nen vi se thay doi truc tiep cai options. Nen tao han mot cai moi
        // prevState.options.push(option);
        // return {
        //     options: prevState.options
        // };
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};


const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>
                What should I do?
                </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />// Cu array thi phai co "key"
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button
                onClick={(event) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(event) {//This is the function of THIS class
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);//This is the function PASSED DOWN from parent(Indecision)
        // If error (see Parent Indecision, handleAddOption() declaration to see two errors). If no error it's gonna return undefined
        this.setState(() => ({ error: error }));

        if (!error) {
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" id="" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));