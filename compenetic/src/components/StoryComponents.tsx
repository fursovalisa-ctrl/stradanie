// Styling
export const pageStyles = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  color: '#333',
  lineHeight: 1.5,
  padding: '0 16px',
  maxWidth: '1064px',
  margin: '0 auto',
};

export const headerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  padding: '0',
  gap: '12px',
  width: '100%',
  marginBottom: '40px',
};

export const headerTitleContainerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  padding: '0',
  gap: '4px',
  width: '100%',
};

export const headerTitleStyles = {
  width: '100%',
  fontFamily: '"hh sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '28px',
  lineHeight: '40px',
  letterSpacing: '-0.0125em',
  color: '#000000',
};

export const headerSubtitleStyles = {
  width: '100%',
  maxWidth: '611px',
  fontFamily: '"Roboto Mono", monospace',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  color: '#768694',
};

export const headerDescriptionStyles = {
  width: '100%',
  maxWidth: '611px',
  fontFamily: '"hh sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '26px',
  letterSpacing: '0.005em',
  color: '#000000',
};

export const sectionStyles = {
  marginBottom: '48px',
  padding: '0',
};

export const sectionTitleStyles = {
  width: '100%',
  fontFamily: '"hh sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '32px',
  color: '#000000',
  marginBottom: '24px',
};

export const subSectionTitleStyles = {
  fontFamily: '"hh sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '26px',
  marginBottom: '16px',
  marginTop: '32px',
  color: '#000',
};

export const paragraphStyles = {
  fontFamily: '"hh sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333',
  marginBottom: '16px',
};

export const listStyles = {
  marginBottom: '24px',
  paddingLeft: '20px',
};

export const listItemStyles = {
  fontFamily: '"hh sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333',
  marginBottom: '8px',
};

export const dividerStyles = {
  borderBottom: '1px solid #eee',
  margin: '24px 0',
  width: '100%',
};

export const codeBlockStyles = {
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '14px',
  lineHeight: '20px',
  backgroundColor: '#f6f8fa',
  padding: '16px',
  borderRadius: '4px',
  marginBottom: '24px',
  overflow: 'auto',
  width: '100%',
  color: '#333',
};

export const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(346px, 1fr))',
  gap: '24px',
  width: '100%',
  marginBottom: '24px',
};

export const rowStyles = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '16px',
  marginBottom: '24px',
};

export const variantContainerStyles = {
  boxSizing: 'border-box' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  padding: '0',
  width: '346px',
  height: '280px',
  background: '#FFFFFF',
  border: '1px solid #DCE3EB',
  boxShadow: '0px 4px 12px rgba(112, 144, 176, 0.16)',
  borderRadius: '24px',
  marginBottom: '20px',
};

export const darkVariantContainerStyles = {
  ...variantContainerStyles,
  background: '#1A1A1A',
  border: '1px solid #444',
};

export const variantDemoStyles = {
  boxSizing: 'border-box' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  gap: '8px',
  width: '100%',
  height: '200px',
  borderBottom: '1px solid #DCE3EB',
};

export const darkVariantDemoStyles = {
  ...variantDemoStyles,
  borderBottom: '1px solid #444',
};

export const variantInfoStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  padding: '24px',
  gap: '8px',
  width: '100%',
  height: '126px',
};

export const variantTitleStyles = {
  width: '100%',
  fontFamily: '"Roboto Mono", monospace',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  color: '#000000',
};

export const darkVariantTitleStyles = {
  ...variantTitleStyles,
  color: '#FFFFFF',
};

export const variantDescriptionStyles = {
  width: '100%',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',
  letterSpacing: '0.01em',
  color: '#768694',
};

export const darkVariantDescriptionStyles = {
  ...variantDescriptionStyles,
  color: '#A6B5C5',
};

export const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  marginBottom: '40px',
  fontSize: '14px',
  border: '1px solid #DCE3EB',
  borderRadius: '8px',
  overflow: 'hidden',
};

export const tableCellStyles = {
  padding: '12px 16px',
  textAlign: 'left' as const,
  borderBottom: '1px solid #DCE3EB',
  color: '#333',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

export const tableHeaderStyles = {
  ...tableCellStyles,
  fontWeight: '600',
  background: '#f7f7f7',
  color: '#000',
};

// Components
export const Header = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) => (
  <div style={headerStyles}>
    <div style={headerTitleContainerStyles}>
      <div style={headerTitleStyles}>{title}</div>
      {subtitle && <div style={headerSubtitleStyles}>{subtitle}</div>}
    </div>
    {description && <div style={headerDescriptionStyles}>{description}</div>}
  </div>
);

export const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={sectionStyles}>
    <h2 style={sectionTitleStyles}>{title}</h2>
    {children}
  </div>
);

export const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={subSectionTitleStyles}>{title}</h3>
    {children}
  </div>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p style={paragraphStyles}>{children}</p>
);

export const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul style={listStyles}>
    {items.map((item, i) => (
      <li key={i} style={listItemStyles}>
        {item}
      </li>
    ))}
  </ul>
);

export const Divider = () => <div style={dividerStyles} />;

export const CodeBlock = ({ content }: { content: string }) => (
  <pre style={codeBlockStyles}>
    <code>{content}</code>
  </pre>
);

export const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={gridStyles}>{children}</div>
);

export const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={rowStyles}>{children}</div>
);

export const Variant = ({
  title,
  paramText,
  dark = false,
  children,
}: {
  title: string;
  paramText?: string;
  dark?: boolean;
  children: React.ReactNode;
}) => (
  <div style={dark ? darkVariantContainerStyles : variantContainerStyles}>
    <div style={dark ? darkVariantDemoStyles : variantDemoStyles}>{children}</div>
    <div style={variantInfoStyles}>
      <div style={dark ? darkVariantTitleStyles : variantTitleStyles}>{title}</div>
      {paramText && (
        <div style={dark ? darkVariantDescriptionStyles : variantDescriptionStyles}>
          {paramText}
        </div>
      )}
    </div>
  </div>
);

export const Table = ({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) => (
  <table style={tableStyles}>
    <thead>
      <tr>
        {headers.map((header, i) => (
          <th key={i} style={tableHeaderStyles}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={i}>
          {row.map((cell, j) => (
            <td key={j} style={tableCellStyles}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
