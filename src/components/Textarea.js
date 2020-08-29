import React, { Component } from "react";
import "./Style/Textarea.sass";
const marked = require("marked");

class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      text: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    /* console.log(marked("# Marked in browser\n\nRendered by **marked**.")); */
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div className="wrapper">
        <h2>Editor</h2>
        <textarea
          id="editor"
          cols="100"
          rows="20"
          value={text}
          onChange={this.handleChange}
        />
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    );
  }
}

const initialState = `# Welcome to my React Markdown Previewer!

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

![React Logo w/ Text](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)`;

export default Textarea;
