import React, { useEffect, useState } from "react";
import ChatHistoryInstructions from "./instructionsToUploadFile";
import '../css/spineer.css';

const FileUpload = () => {
  const [jsonData, setJsonData] = useState(null);
  const [uploaded, setUploaded] = useState('false');
  const [personOneTexts , setPersonOneTexts] = useState([]);
  const [personTwoTexts , setPersonTwoTexts] = useState([]);
  const [messagesByPerson, setMessagesByPerson] = useState({});

  useEffect(() => {
    const chatStates = JSON.parse(localStorage.getItem('ChatStates'));
    if (chatStates) {
      setJsonData(chatStates.chatHistory);
      setUploaded(chatStates.uploaded);
    }
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          setJsonData(json);
          setUploaded('true');
          
          // Create the chatStates object
          const chatStates = {
            chatHistory: json,    // Save updated json data
            uploaded: 'true',     // Save upload status as true
            file: file            // Optionally save the file
          };

          // Store the updated state and the timestamp in localStorage
          localStorage.setItem('ChatStates', JSON.stringify([chatStates, Date.now()]));
        } catch (error) {
          alert("Invalid JSON file");
        }
      };

      setUploaded('loading'); // Show loading spinner
      reader.readAsText(file);
    }
  };

  useEffect(() => {
    if (jsonData && jsonData.messages) {
      const groupedMessages = {};

      jsonData.messages.forEach((message) => {
        console.log(message);
        const sender = message.from;
        if (!groupedMessages[sender]) {
          groupedMessages[sender] = []; 
        }
        groupedMessages[sender].push(message.text); 
      });

      setMessagesByPerson(messagesByPerson); // Set the grouped messages
    }

    console.log(personOneTexts);
  }, [jsonData]);

  const chatStates = JSON.parse(localStorage.getItem('ChatStates'));

  return (
    <div>
      {/* Only show instructions if 'uploaded' state is 'false' */}
      {
        !chatStates || chatStates[1] - Date.now > 86400 && chatStates[0].uploaded  === 'false' ? <ChatHistoryInstructions /> : null
      }

      <h3>Upload chat history in a JSON format.</h3>
      <div>
        <input type="file" accept=".json" onChange={handleFileUpload} />
        {uploaded === 'loading' && (
          <div className="spinner"></div> // Show spinner while uploading
        )}
      </div>

      <div className="result">
        {jsonData && (
          <pre style={{ maxHeight: "300px", overflow: "auto" }}>
            {JSON.stringify(jsonData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
