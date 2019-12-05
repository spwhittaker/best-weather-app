import React from 'react';

class SearchForm extends React.Component {
    constructor(props)
    {super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {searchText: '',}
}

    handleInputChange(event) {
        this.setState({searchText: event.target.value});
  }

render () {
    let searchText = this.state.searchText;
    return (
      <div>
          <input type="text" onChange={this.handleInputChange} value={this.state.searchText}/>
          <button type="submit" onClick={e => this.props.onSubmit(e,searchText)}>Search</button>
        </div>
    )
}

}

export default SearchForm;