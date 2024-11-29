import { send } from "vite";

export const separateMessagesByPerson = (jsonData) => {
    const messages = jsonData.messages;
    const messagesByPerson = {};
    let personTwo = jsonData.name.trim().toLowerCase();
    let personTwoId = 'user' + jsonData.id;
    let personOne = '';
    let personOneId = '';
  
    messages.forEach((message) => {
      const sender = message.from || message.actor;
    const senderID = message.from_id || message.actor_id;
    if (senderID !== personTwoId) {
        personOneId = senderID;
        personOne = sender;
    } else {
        personTwoId = senderID
        personTwo = sender;
    }


      if (sender && typeof sender === 'string') {
        if (!messagesByPerson[sender]) {
          messagesByPerson[sender] = [];
        }
        messagesByPerson[sender].push(message);
      } else {
        console.warn('Message without sender:', message);
      }
    });
  
    return [
      messagesByPerson[personOne] || [],
      messagesByPerson[personTwo] || [],
      personOne,
      personTwo,
    ];
  };



  
  export const countWords = (personOneMessages, personTwoMessages, personOneName, personTwoName) => {
    const wordCount = (messages) => {
        let wordCountMap = {};
        messages.forEach((message) => {
            const splitMessage = message.text.split(/[ \.\n]+/);
            splitMessage.forEach((word) => {
                if (wordCountMap[word]) {
                    wordCountMap[word] += 1;
                } else {
                    wordCountMap[word] = 1;
                }
            })
        })
        return wordCountMap;
    }

    const personOneWordCount = wordCount(personOneMessages);
    const personTwoWordCount = wordCount(personTwoMessages);
    console.log("personOneWordCount" , personOneWordCount);
    console.log(personTwoWordCount);


  };
  
  const jsonData = {
    name: "My",
    type: "personal_chat",
    id: 741896147,
    messages: [
      {
        id: 26725,
        type: "message",
        date: "2020-01-05T08:18:16",
        date_unixtime: "1578201496",
        edited: "2020-01-05T08:18:43",
        edited_unixtime: "1578201523",
        from: "Ľíĵ Âłëm",
        from_id: "user749661969",
        text: "Hii genna tmechialesh ende?",
        text_entities: [{ type: "plain", text: "Hii genna tmechialesh ende?" }],
      },
      {
        id: 26736,
        type: "message",
        date: "2020-01-05T08:35:03",
        date_unixtime: "1578202503",
        from: "My Love",
        from_id: "user741896147",
        text: "Enjnja chap fetena alegn ena memelalese endayhonbign",
        text_entities: [{ type: "plain", text: "Enjnja chap fetena alegn ena memelalese endayhonbign" }],
      },
      {
        id: 26737,
        type: "message",
        date: "2020-01-05T08:43:19",
        date_unixtime: "1578202999",
        from: "Ľíĵ Âłëm",
        from_id: "user749661969",
        reply_to_message_id: 26736,
        text: "Meche nw fetenaw",
        text_entities: [{ type: "plain", text: "Meche nw fetenaw" }],
      },
      {
        id: 26737,
        type: "message",
        date: "2020-01-05T08:43:19",
        date_unixtime: "1578202999",
        from: "Ľíĵ Âłëm",
        from_id: "user749661969",
        reply_to_message_id: 26736,
        text: "Meche nw fetenaw",
        text_entities: [{ type: "plain", text: "Meche nw fetenaw" }],
      },
    ],
  };
  
  const datas = separateMessagesByPerson(jsonData);
  const personTwoName = datas[3];
  const personOneName = datas[2];
  const personOneMessages = datas[0];
  const personTwoMessages = datas[1];

console.log(countWords(personOneMessages, personTwoMessages, personOneName, personTwoName));

  

  