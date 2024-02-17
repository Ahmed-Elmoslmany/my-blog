import { useContext, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ThemeContext } from '../../App';
import { CopyIcon, PasteIcon } from '../assets/icons';

const Code = ({ children, language }) => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="code" dir='ltr'>
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={isDark ? materialDark : materialLight}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "16px",
          boxShadow: [0, 5, 5, (0,0,0, 0.3)],
      
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code