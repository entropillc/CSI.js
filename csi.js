$(function() {
  var commentNodes = [];
  
  var getCommentsFromChildNodes = function(node) {
    var childNodes = node.childNodes;
    for (var i = 0, length = childNodes.length, childNode; i < length; i++) {
      childNode = childNodes[i];
      if (childNode.nodeType === 8) commentNodes.push(childNode);
      if (childNode.hasChildNodes()) getCommentsFromChildNodes(childNode);
    }
  };
  
  var getIncludesFromCommentNodes = function(commentNodes) {
    var includeNodes = [];
    
    var pattern = /^#include virtual\=".+"/;
    for (var i = 0, length = commentNodes.length; i < length; i++) {
      if (pattern.test(commentNodes[i].nodeValue)) includeNodes.push(commentNodes[i]);
    }
    
    return includeNodes;
  };

  getCommentsFromChildNodes(document);
  
  var includeNodes = getIncludesFromCommentNodes(commentNodes);
  var includePath;
  for (var i = 0, length = includeNodes.length, includeNode; i < length; i++) {
    includeNode = includeNodes[i];
    includePath = $.trim(includeNode.nodeValue);
    includePath = includePath.substring(18, includePath.length - 1);
    
    $.ajax({
      url: includePath,
      async: false,
      dataType: 'html',
      success: function(data) { $(includeNode).after($(data)).remove(); }
    });
  }  
});
