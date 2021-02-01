export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;

  sm.getSectors().reset(csm && csm.length ? csm : [{
    name: 'Style Options',
    open: false,
    buildProps: ['display', 'width',  'height', 'color'],
    properties: [{
      name: 'Color',
      property: 'color'
    }],
  }]);
}
