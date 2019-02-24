let results = [];
$('.history').fadeOut();

function insertToText(number) {
    document.form.textView.value += number;
}

function calculate() {
    let before = document.form.textView.value;
    document.form.textView.value = eval(document.form.textView.value);
    let after = document.form.textView.value;
    let result = {
        before: before,
        after: after
    };
    document.history.textView.value += "- " + before + " = " + after + "\n";
    results.push(result);
}

function clearArea() {
    document.form.textView.value = '';
}

function deleteNumber() {
    let value = document.form.textView.value;
    document.form.textView.value = value.substring(0, value.length - 1)
}

function fade() {
    document.history.textView.value = '';
    $('.history').slideToggle();
    results.forEach(function (result) {
        document.history.textView.value += "- " + result.before + " = " + result.after + "\n"
    });
}