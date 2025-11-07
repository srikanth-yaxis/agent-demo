document.getElementById('startBtn').addEventListener('click', function() {
  const iframe = document.getElementById('elevenWidget');
  const widgetContainer = document.getElementById('widgetContainer');

  // Use your ElevenLabs embedded agent link
  const agentURL = "https://elevenlabs.io/voice-lab/embed/agent_3001k9f22jvme5k8yk3h7dywze8h?autoStart=true&mic=on";

  // Show the widget and start the agent
  iframe.src = agentURL;
  widgetContainer.style.display = 'flex';

  // Hide the button after starting
  this.style.display = 'none';
});
