

function handleFormSubmit(apiState) {

    const handleSubmit = e => {
        e.preventDefault()
        const getValues = {
            term: apiState.term,
            location: apiState.location,
            offsetLimit: 100
        }
        fetch(`${config.API_ENDPOINT}/yelp-api`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(note => {
                this.context.addNote(note)
                this.props.history.push(`/folder/${note.folder_id}`)
            })
            .catch(error => {
                console.error({error})
            })
    }
}

export default handleFormSubmit;