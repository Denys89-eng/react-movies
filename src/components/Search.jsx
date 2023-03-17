import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        type: 'all'
    }


    validateValue = (e) => {
        this.setState({search: e.target.value})
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.upgradeState(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.upgradeState(this.state.search, this.state.type)
        })

    }


    render() {
        const {value} = this.state

        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input
                            placeholder='search'
                            type='search'
                            className="validate"
                            value={value}
                            onChange={this.validateValue}
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn'
                            onClick={this.handleFilter}
                        >Send</button>
                    </div>
                    <form action="#">
                        <p>
                            <label>
                                <input
                                    onChange={this.handleFilter}
                                    value='all'
                                    type="radio"
                                    data-type='all'
                                    checked={this.state.type === 'all'}
                                />
                                <span>All</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    onChange={this.handleFilter}
                                    type="radio"
                                    value='movie'
                                    data-type='movie'
                                    checked={this.state.type === 'movie'}
                                />
                                <span>Only Movies</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    onChange={this.handleFilter}
                                    type="radio"
                                    value='serial'
                                    data-type='series'
                                    checked={this.state.type === 'series'}
                                />
                                <span>Serial</span>
                            </label>
                        </p>
                    </form>
                </div>

            </div>
        )
    }
}

export {Search}