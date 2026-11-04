
const API_URL = "https://zsk8tf5yu3.execute-api.ap-south-1.amazonaws.com/convert";

const textInput = document.getElementById("textInput");
const convertBtn = document.getElementById("convertBtn");
const statusText = document.getElementById("status");
const charCount = document.getElementById("charCount");

const audioSection = document.getElementById("audioSection");
const audioPlayer = document.getElementById("audioPlayer");
const downloadLink = document.getElementById("downloadLink");

textInput.addEventListener("input", () => {
    charCount.textContent =
        `${textInput.value.length} / 2500 characters`;
});

convertBtn.addEventListener("click", async () => {
    const text = textInput.value.trim();

    if (!text) {
        statusText.textContent = "Please enter some text first.";
        return;
    }

    convertBtn.disabled = true;
    convertBtn.textContent = "Converting...";
    statusText.textContent = "Generating your speech. Please wait.";

    audioSection.hidden = true;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Conversion failed.");
        }

        audioPlayer.src = data.audioUrl;
        downloadLink.href = data.audioUrl;

        audioSection.hidden = false;

        statusText.textContent =
            "Speech generated successfully!";

    } catch (error) {
        console.error(error);

        statusText.textContent =
            error.message || "Something went wrong.";

    } finally {
        convertBtn.disabled = false;
        convertBtn.textContent = "Convert to Speech";
    }
});
