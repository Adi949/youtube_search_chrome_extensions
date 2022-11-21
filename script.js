chrome.contextMenus.create({
  id: '2',
  title: 'Search on youtube "%s""',
  contexts: ['selection'],
})

chrome.contextMenus.onClicked.addListener(async function (d) {
  var url = 'https://www.youtube.com/results?search_query=' + d.selectionText
  window.open(url, '_blank')
})
