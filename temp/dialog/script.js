document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.btn__cover button'),
        dialog = document.querySelector('.dialog'),
        closeDialog = document.querySelector('.dialog .close i'),
        body = document.body;

    btn.addEventListener('click', () => {
        console.log('click');
        dialog.showModal();
        body.classList.add('hide');
    })

    closeDialog.addEventListener('click', () => {
        dialog.close();
        body.classList.remove('hide');
    });

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
        body.classList.remove('hide');
    })
})