const form = document.querySelector('form');

const handleSubmit = (event) => {
    event.preventDefault();

    let formResult 
    Array.from(event.target).map((item) => {
        if (item.tagName === 'INPUT' || item.tagName === 'TEXTAREA') {
            const inputValue = item.value
            formResult = { ...formResult, [item.name]: inputValue }
        }
    })
    console.log(formResult)
}