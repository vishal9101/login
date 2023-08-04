function startProgress() {
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    // Update the progress bar every 100ms
    const intervalId = setInterval(() => {
        progress += 5; // Increase the progress by 5% (adjust as needed)

        if (progress <= 100) {
            progressBar.value = progress;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
}
