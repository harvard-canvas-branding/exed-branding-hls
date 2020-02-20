if (window.ga) {
  try {
    ga('create', 'UA-tbd', 'auto', 'hlsTracker');
    ga('hlsTracker.set', 'anonymizeIp', true);

    ga('hlsTracker.send', 'pageview');
  }
  catch(err) {
    // do nothing
    console.log('hlsTracker failed');
  }
} else {
  console.log('window.ga was not present');
}
