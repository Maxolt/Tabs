let $ = (id) => document.getElementById(id);

$("tab1").addEventListener('click', function () {
    $("text").textContent = "This is how to write 'Hello, World!' in Python";
    $("example").innerHTML = "print('Hello, World!')";
});

$("tab2").addEventListener('click', function () {
    $("text").textContent = "This is how to write 'Hello, World!' in Golang";
    $("example").innerHTML = "package Main<br>import \"fmt\"<br>func Main() {<br>fmt.Println(\"Hello, World\")<br>}";
});

$("tab3").addEventListener('click', function () {
    $("text").textContent = "This is how to write 'Hello, World!' in JavaScript";
    $("example").innerHTML = "console.log(\"Hello, World!\")";
});

$("tab4").addEventListener('click', function () {
    $("text").textContent = "This is how to write 'Hello, World!' in Java";
    $("example").innerHTML = "public class Main {<br>public static void main(String[] args) {<br>System.out.println(\"Hello, World!\");<br>}}";
});