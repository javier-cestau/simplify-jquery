module.exports = function (query) {
  // Check if the query is searching for an ID
  let nodes = document.querySelectorAll(query)

  switch (nodes.length) {
    case 0:
      return null
    case 1:
      return nodes[0]
    default:
      return nodes
  }
}
