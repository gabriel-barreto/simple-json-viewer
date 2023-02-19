import Highlight, { defaultProps, Language } from 'prism-react-renderer'

interface CodeBlockProps {
  code: string
  language?: Language
}

export function CodeBlock({ code, language = 'json' }: CodeBlockProps) {
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} h-full p-4`} style={style}>
          <code>
            {tokens.map((line, idx) => (
              <div
                key={`line-${idx}`}
                {...getLineProps({ line, key: `line-${idx}` })}
              >
                {line.map((token, i) => (
                  <span
                    key={`token-${i}`}
                    {...getTokenProps({ token, key: `token-${i}` })}
                  />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
