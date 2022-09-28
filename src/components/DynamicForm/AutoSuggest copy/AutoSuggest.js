import React from "react";
import get from 'lodash.get';
import Button from "../../Button/Button";

export default class AutoSuggest extends React.PureComponent {
    state = {
        search: "",
        isDisabled: false,
        selectedOption: false,
        autosuggest: ""
    };

    changeSearch = event => {
        this.setState({
            search: event.target.value
        });
        this.props.scrollToBottom();
    };

    selectOption = (payload, title) => {
        this.props.sendQuickMessage(payload, title);
        this.setState({
            search: "",
            selectedOption: true,
            autosuggest: title,
            isDisabled: true
        });
    };

    dynamicSearch = () => {
        const list = get(this, "props.chat.data", []);
        const se = get(this, "state.search", "");
        const regex = new RegExp(`(${se})`, "gi");

        return list
            .filter(option => {
                return get(this, "state.search", "") === "" ? true : option.title.match(regex);
            })
            .map((option, index) => (
                <div key={index} onClick={() => this.selectOption(option.payload, option.title)}>
                    <span>{option.title}</span>
                </div>
            ));
    };

    render() {
        return (
            <div className="autosuggest-container left-chat">
                <div className="input-section">
                    <input
                        type="text"
                        value={this.state.selectedOption ? this.state.autosuggest : this.props.autosuggest}
                        placeholder={get(this, "props.chat.text", "")}
                        onChange={this.changeSearch}
                        autoComplete="off"
                        disabled={this.state.isDisabled}
                    />
                    <Button className="circle-btn">
                        <img src={require("../../../public/images/search.svg")} alt="" />
                    </Button>
                </div>

                {!this.state.selectedOption ? <div className="suggestion-list">{this.dynamicSearch()}</div> : null}
            </div>
        );
    }
}
