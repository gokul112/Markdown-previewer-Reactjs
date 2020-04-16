import React, { useState } from 'react';
import './App.css';
import {Form} from 'react-bootstrap';

let marked = require('marked');

function App() {

  const defaultMarkdown = 
`# Welcome to my React Markdown Previewer!
## This is a sub-heading...  
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

  const [markdown,setMarkdown] = useState(defaultMarkdown);
  
  const setMarkdowntext = (e) => {
    setMarkdown(e.target.value)
  }


  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12">
            <div className="col-md-6">
                <Form.Group controlId="formBasicMarkdown">
                  <Form.Label className="text">MarkDown Input</Form.Label>
                  <Form.Control as="textarea" rows="40" type="text" placeholder="Enter Markdown text" value={markdown} onChange={setMarkdowntext} />
                </Form.Group>
          </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicMarkOutput">
                  <Form.Label className="text1">MarkDown Output</Form.Label>
                  <div dangerouslySetInnerHTML={{__html : marked(markdown)}} />
                </Form.Group>

                </div>
              </div>
        </div>
      </div>
  );
}

export default App;
