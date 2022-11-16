window.onload = () => {
    $(document).ready(() => {
        $('#sidebarCollapse').on('click', () => {
            $('#sidebar').toggleClass('active');
        });
    });
}