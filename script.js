class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `# H1 Heading

## H2 Subheading
[FreeCodeCamp](https://www.freecodecamp.org)
\`Inline code\`

\`\`\`
function greet() {
  return "Hello!";
}
\`\`\`

- List item
> Blockquote

![Image](https://via.placeholder.com/100)
**Bold text**`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <textarea id="editor" value={this.state.text} onChange={this.handleChange} />
        <div id="preview" dangerouslySetInnerHTML={{
          __html: marked.parse(this.state.text),
        }} />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));
