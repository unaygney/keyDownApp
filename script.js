const insert = document.getElementById('insert');


window.addEventListener('keydown' , (event) => {

    console.log(event)

    insert.innerHTML = `
    <div id="insert">
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.type}
        <small>event.type</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    
    `

})