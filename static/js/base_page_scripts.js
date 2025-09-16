document.addEventListener('DOMContentLoaded', () => {
    const search_hat_container = document.getElementById('search_hat_container');
    const search_button = document.getElementById('search_button');

    search_button.addEventListener('click', () =>
    {
        if(search_hat_container.offsetWidth > 800)
        {
            search_button.type = "submit";
            console.log("Тестим 1");
        }
        else
        {
            search_button.type = "button";
            console.log("Тестим 2");
        }
    });
});