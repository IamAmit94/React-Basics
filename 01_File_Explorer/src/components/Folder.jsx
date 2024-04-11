import { useState } from "react";

const Folder = ({ handleInsertNode = () => {}, handleRenameNode = () => {}, handleDeleteNode = () => {}, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
      visible: false,
      isFolder:false
  });
  const [renameValue, setRenameValue] = useState(explorer.name); // Store the value of the node being renamed

  const handleNewFolder = (e, isFolder) => {
      e.stopPropagation(); // Stop the expansion of the button
      setExpand(true);
      setShowInput({
          visible: true,
          isFolder
      });
  };

  const onAddFolder = (e) => {
      if (e.keyCode === 13 && e.target.value) {
          handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
          setShowInput({ ...showInput, visible: false });
      }
  };

  const handleRename = (e) => {
      setRenameValue(e.target.value);
  };

  const handleRenameConfirm = () => {
      if (renameValue !== explorer.name) {
          handleRenameNode(explorer.id, renameValue);
      }
  };

  const handleDelete = () => {
      handleDeleteNode(explorer.id);
  };

  if (explorer.isFolder) {
      return (
          <div style={{ marginTop: 5 }}>
              <div className="folder" onClick={() => setExpand(!expand)}>
                  <span> 📁 {explorer.name}</span>
                  <div>
                      <button onClick={(e) => handleNewFolder(e, true)}>Folder + </button>
                      <button onClick={(e) => handleNewFolder(e, false)}>File + </button>
                      <button onClick={handleDelete}>❌ </button>
                      <button onClick={() => setShowInput({...showInput, visible: true})}> 🖌 </button>
                  </div>
              </div>

              <div style={{display: expand ? 'block' : 'none', paddingLeft: 30}}>
                  {
                      showInput.visible && (
                          <div className="inputContainer">
                              <span>{showInput.isFolder ? "📁" : "📃"}</span>
                              <input
                                  type="text"
                                  value={renameValue}
                                  onChange={handleRename}
                                  onBlur={handleRenameConfirm}
                                  onKeyDown={onAddFolder}
                                  className="inputContainer__input"
                                  autoFocus
                              />
                          </div>
                      )
                  }
                  {explorer.items.map((exp) => {
                      return <Folder
                          handleInsertNode={handleInsertNode}
                          handleRenameNode={handleRenameNode}
                          handleDeleteNode={handleDeleteNode}
                          explorer={exp}
                          key={exp.id}
                      />;
                  })}
              </div>
          </div>
      );
  } else {
      return <span className="file"> 📃 {explorer.name} </span>;
  }
};


export default Folder;
