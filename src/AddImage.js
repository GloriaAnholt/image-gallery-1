import React, { Component } from 'react';


export default class AddImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            url: ''
        }
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        let newImage = { 
            title: this.state.title,
            description: this.state.desc,
            url: this.state.url
        };
        this.props.addImage(newImage);
        this.setState({ title: '', desc: '', url: '' })
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type='text'
                    placeholder='title'
                    onChange={e => {
                        this.setState({ title: e.target.value })
                    }}
                    value={ this.state.title }
                />
                <input
                    type='text'
                    placeholder='description'
                    onChange={e => {
                        this.setState({ desc: e.target.value })
                    }}
                    value={ this.state.desc }
                />
                <input
                    type='text'
                    placeholder='url'
                    onChange={e => {
                        this.setState({ url: e.target.value })
                    }}
                    value={ this.state.url }
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }

}