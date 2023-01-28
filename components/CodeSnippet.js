import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';

const CodeSnippet = props => {
  return (
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {prettier.format(props.children, {
        parser: 'babel',
        plugins: [parserBabel]
      })}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
