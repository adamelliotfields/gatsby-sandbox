/* eslint-disable react/jsx-props-no-spreading, react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';

const Line = ({ number, line, getLineProps, getTokenProps }) => {
  return (
    <div {...getLineProps({ line, key: number, className: 'is-table-row' })}>
      <span className="is-table-cell is-unselectable has-text-right pr-4" style={{ opacity: 0.5 }}>
        {number}
      </span>
      <span className="is-table-cell">
        {line.map((token, key) => (
          <span {...getTokenProps({ token, key })} />
        ))}
      </span>
    </div>
  );
};

Line.propTypes = {
  number: PropTypes.number.isRequired,
  line: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  getLineProps: PropTypes.func.isRequired,
  getTokenProps: PropTypes.func.isRequired,
};

function Pre({ children }) {
  // Thanks to Chris Biscardi for showing how to get this to work.
  // https://egghead.io/lessons/react-syntax-highlighting-code-blocks-using-components-with-prism-react-renderer-and-gatsby-mdx
  const code = children?.props?.children?.trim();
  const languageClassName = children?.props?.className ?? '';
  const match = languageClassName.match(/language-(?<lang>.*)/);
  const language = match?.groups?.lang ?? '';

  // Wrap in a <figure> so it gets the same padding as images and iframes.
  return (
    <figure>
      <Highlight {...defaultProps} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={classnames(className, 'has-text-left', 'py-2', 'px-3')} style={style}>
            {tokens.map((line, i) => (
              <Line
                key={i + 1}
                number={i + 1}
                line={line}
                getLineProps={getLineProps}
                getTokenProps={getTokenProps}
              />
            ))}
          </pre>
        )}
      </Highlight>
    </figure>
  );
}

Pre.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pre;
