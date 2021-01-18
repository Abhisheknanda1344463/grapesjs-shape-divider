export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const shapedividerBlock = config.shapedividerBlock;
  const style = config.style;
  const pfx = '.gjs';
  const type = 'shape-divider';
  const content = `<div class = ${pfx}-shape-divider data-gjs-type="${type}"></div>
    ${style ? `<style>${style}</style>` : ''}`;

  shapedividerBlock && bm.add(type, {
      label: config.labelShapeDvd,
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M2 2v18h18V2H2zm0-2h18a2 2 0 012 2v18a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .9.9 0 2 0zM1 13L2 0h18l1 9-20 4z"></path></svg>`,
      category: config.labelSectionCategory,
    content,
    ...shapedividerBlock
  });
}
