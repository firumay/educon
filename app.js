document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.needOpen');

    elements.forEach(element => {
        element.addEventListener("click", function() {
            if (element.style.height === '60px' || element.style.height === '') {
                // Сначала установить высоту содержимого, затем плавно переключиться на auto
                const autoHeight = element.scrollHeight + 'px';
                element.style.height = autoHeight;

                // Устанавливаем таймаут для переключения на auto после завершения анимации
                setTimeout(() => {
                    element.style.height = 'auto';
                }, 800); // Должно совпадать с временем transition
            } else {
                // Получаем текущую высоту содержимого
                const fixedHeight = element.scrollHeight + 'px';
                element.style.height = fixedHeight;

                // Принудительно выполняем рефлоу
                element.offsetHeight;

                // Затем устанавливаем конечную высоту 60px
                element.style.height = '60px';
            }
        });
    });
});