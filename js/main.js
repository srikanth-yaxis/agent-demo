document.getElementById('startBtn').addEventListener('click', function() {
  const scenario = document.getElementById('scenario').value;
  const iframe = document.getElementById('elevenWidget');
  const widgetContainer = document.getElementById('widgetContainer');

  const widgetURLs = {
    canada: "YOUR_ELEVENLABS_WIDGET_URL_FOR_CANADA_PR",
    student: "YOUR_ELEVENLABS_WIDGET_URL_FOR_STUDENT_VISA",
    work: "YOUR_ELEVENLABS_WIDGET_URL_FOR_WORK_PERMIT"
  };

  iframe.src = widgetURLs[scenario] || widgetURLs.canada;
  widgetContainer.style.display = 'flex';
  this.style.display = 'none';
});