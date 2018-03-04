import React, { Component } from 'react'

class AddPhoto extends Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const link = event.target.elements.link.value
        const description = event.target.elements.description.value
        if (link && description) {
            const newPost = {
                id: Number(new Date()),
                imageLink: link,
                description: description
            }
            this.props.onAddPhoto(newPost)
        }
    }
    
    render() {
        return(
            <div>
                <h1>Potowall</h1>
                <div className="photo-create-form">
                    <form onSubmit={ this.handleSubmit }>
                        <input
                            type="text"
                            placeholder="Image link"
                            name="link"
                        />

                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                        />

                        <button> Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto