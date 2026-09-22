async function translateText() {

    let text = document.getElementById("text").value;
    let source = document.getElementById("source").value;
    let target = document.getElementById("target").value;

    let result = document.getElementById("result");

    // Check if text is empty
    if (text.trim() === "") {
        result.innerText = "Please enter some text.";
        return;
    }

    result.innerText = "Translating...";

    try {

        // Translation API
        let url =
            "https://api.mymemory.translated.net/get?q=" +
            encodeURIComponent(text) +
            "&langpair=" +
            source +
            "|" +
            target;

        let response = await fetch(url);

        let data = await response.json();

        // Display translated text
        if (data.responseData && data.responseData.translatedText) {

            result.innerText =
                data.responseData.translatedText;

        } else {

            result.innerText =
                "Translation could not be completed.";

        }

    } catch (error) {

        result.innerText =
            "Error: Please check your internet connection.";

        console.log(error);
    }
}