import { useState } from "react"
import explorer from "./data/folderData"
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode, renameNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
      const finalTree = insertNode(explorerData, folderId, item, isFolder);
      setExplorerData(finalTree);
  };

  const handleRenameNode = (nodeId, newName) => {
      // Update the explorer data to rename the node
      const updatedExplorerData = renameNode(explorerData, nodeId, newName);
      setExplorerData(updatedExplorerData);
  };

  const handleDeleteNode = (nodeId) => {
      // Update the explorer data to delete the node
      const updatedExplorerData = deleteNode(explorerData, nodeId);
      setExplorerData(updatedExplorerData);
  };

  return (
      <div>
          <Folder
              handleInsertNode={handleInsertNode}
              handleRenameNode={handleRenameNode}
              handleDeleteNode={handleDeleteNode}
              explorer={explorerData}
          />
      </div>
  );
};


export default App