import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeSnippet = props => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
