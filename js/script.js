$(document).ready(function() {

// Kliknięcie na mały obrazek
    $("#projects #gallery img").click(function() { 
// Wyświetlenie okienka z powiększeniem (usuwam klasę d-none)
        $("#lightbox").removeClass("d-none");
// ustalam, że zmienna imgSrc to ścieżka do klikniętego obrazka
        var imgSrc = $(this).attr("src");
// ustalam że ścieżka dużego obrazka to imgSrc
        $("#lightbox #lightbox-items img").attr("src", imgSrc);
        var indexA = $(this).index();
        // alert(indexA);

// Kliknięcie na "dalej"
    $("#next").click(function() {

// Jeżeli indeks bieżącego obrazka jest ostatnim
        if($("#projects #gallery img").eq(indexA).is(":last-child")) {
// Ustal index na 0
            indexA = 0;
        }
// W każdym innym wypadku nowy index to index+1
        else {
        indexA = indexA + 1 
        }
// Ścieżka nowego obrazka z sekcji projects
        var imgSrc2 = $("#projects #gallery img").eq(indexA).attr("src");
// Wrzucenie ścieżki 
        $("#lightbox #lightbox-items img").attr("src", imgSrc2);        
    });

// Kliknięcie wstecz

    $("#prev").click(function() {
        if($("#projects #gallery img").eq(indexA).is(":first-child")) {
            indexA = $("#projects #gallery img:last-child").index();
        }
        else {
        indexA = indexA - 1 
        }
        var imgSrc2 = $("#projects #gallery img").eq(indexA).attr("src");

        $("#lightbox #lightbox-items img").attr("src", imgSrc2);        
    });




    });


// Kliknięcie na "zamknij"
    $("#close").click(function() { 
// Dodanie klasy d-none - lightbox się nie wyświetla   
        $("#lightbox").addClass("d-none");
    });

});

