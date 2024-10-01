function loadData4() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#result4').html('<h3>' + response.title + '</h3><p>' + response.body + '</p>');
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}