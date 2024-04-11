const useTraverseTree = () => {
    // Add a file or folder in tree
    // Can be optimised using Dynamic Programming
    const insertNode = function (tree, folderId, item, isFolder) {
      if (tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
          id:new Date().getTime(),
          name: item,
          isFolder: isFolder,
          items: []
        });
  
        return tree;
      }
  
      let latestNode = [];
      latestNode = tree.items.map((ob) => {
        return insertNode(ob, folderId, item, isFolder);
      });
  
      return { ...tree, items: latestNode };
    };
  
    // const deleteNode = () => {}; // Do it Yourself
    const deleteNode = function(tree, folderId) {
      if (tree.id === folderId) {
          // Node found, return null to remove it from the tree
          return null;
      }
  
      // Recursively check each child node
      let updatedItems = tree.items.map(childNode => deleteNode(childNode, folderId));
  
      // Filter out any null nodes (deleted nodes) from the updatedItems
      updatedItems = updatedItems.filter(childNode => childNode !== null);
  
      // Return the updated tree node with filtered child nodes
      return { ...tree, items: updatedItems };
  };
  
  
    // const renameNode = () => {}; // Do it Yourself
    const renameNode = function(tree, folderId, newName) {
      if (tree.id === folderId) {
          // Node found, update its name
          return { ...tree, name: newName };
      }
  
      // Recursively check each child node
      let updatedItems = tree.items.map(childNode => renameNode(childNode, folderId, newName));
  
      // Return the updated tree node with updated child nodes
      return { ...tree, items: updatedItems };
  };
  
  
    return { insertNode, deleteNode, renameNode };
  };
  
  export default useTraverseTree;