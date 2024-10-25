// src/VoiceButton.js
import React, { useState, useEffect } from 'react';

const VoiceButton = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const recognition = new window.SpeechRecognition() || new window.webkitSpeechRecognition();
  recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcriptText = event.results[currentIndex][0].transcript;
    setTranscript(transcriptText);
    takeCommand(transcriptText.toLowerCase());
  };

  const takeCommand = (message) => {
    // implement takeCommand logic here
  };

  const handleButtonClick = () => {
    recognition.start();
    setIsListening(true);
  };

  useEffect(() => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    }
  }, [isListening]);

  return (
    <button id="btn" onClick={handleButtonClick}>
      <img src="mic.svg" alt="mic" id="mic" />
      <span id="content">{transcript}</span>
    </button>
  );
};

export default VoiceButton;