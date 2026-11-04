# Text2Voice – AWS Text-to-Speech Converter

A simple cloud-based web application that converts text into speech using Amazon Polly. Users can enter text, generate MP3 audio, listen to it, and download it.

## Technologies Used
- HTML, CSS, JavaScript
- Python
- AWS Lambda
- Amazon Polly
- Amazon S3
- Amazon API Gateway

## Features
- Convert text into speech.
- Generate MP3 audio files.
- Store audio files in Amazon S3.
- Play and download generated audio.
- Simple and user-friendly interface.

## How It Works
1. User enters text on the website.
2. API Gateway sends the request to AWS Lambda.
3. Lambda uses Amazon Polly to generate speech.
4. Generated MP3 is stored in Amazon S3.
5. The website receives the audio URL for playback and download.

## Project Structure
```text
AWS-TextToSpeech/
├── backend/
│   └── lambda_function.py
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

## Setup
1. Clone the repository.
2. Open the project in VS Code.
3. Add your API Gateway URL in `frontend/script.js`.
4. Open `frontend/index.html` using Live Server.
5. Enter text and click **Convert to Speech**.

## AWS Region
`ap-south-1` (Mumbai)

## Author
Saurabh Kumar
